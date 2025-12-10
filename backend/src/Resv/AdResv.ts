import { GraphQLError } from "graphql";
import {
    Arg,
    Args,
    ArgsType,
    Field,
    Int,
    Mutation,
    Query,
    Resolver,
} from "type-graphql";
import { Like } from "typeorm";
import { Ad, NewAd, UpdateAd } from "../entities/Ad";

@ArgsType()
class GetAdsArgs {
    @Field({ nullable: true })
    titleContains?: string;

    @Field(() => Int, { nullable: true })
    categorieId?: number;

    @Field(() => Int, { nullable: true, defaultValue: 5 })
    limit?: number;

    @Field({ defaultValue: "createdAt", nullable: true })
    sortBy?: string;

    @Field({ defaultValue: "desc", nullable: true })
    order?: string;
}

@Resolver()
export default class AdResolver {
    @Query(() => [Ad])
    async ads(
        @Args() { titleContains, limit, categorieId, order, sortBy }: GetAdsArgs,
    ) {
        return Ad.find({
            where: {
                categorie: { id: categorieId },
                titre: titleContains ? Like(`%${titleContains}%`) : undefined,
            },
            order: {
                [`${sortBy}`]: order,
            },
            take: limit,
        });
    }

    @Query(() => Ad)
    async ad(@Arg("id", () => Int) id: number) {
        const ad = await Ad.findOne({
            where: { id },
            relations: { tags: true, categorie: true },
        });
        if (!ad)
            throw new GraphQLError("ad not found", {
                extensions: { code: "NOT_FOUND", http: { status: 404 } },
            });
        return ad;
    }

    @Mutation(() => Ad)
    async createAd(
        @Arg("data", () => NewAd, { validate: true }) data: NewAd,
    ) {
        const newAd = new Ad();
        Object.assign(newAd, data);
        const { id } = await newAd.save();
        return Ad.findOne({
            where: { id },
            relations: { tags: true, categorie: true },
        });
    }

    @Mutation(() => Ad)
    async updateAd(@Arg("id", () => Int) id: number, @Arg("data", () => UpdateAd, { validate: true }) data: UpdateAd,) {
        const adToUpdate = await Ad.findOne({
            where: { id },
            relations: { tags: true, categorie: true },
        });
        if (!adToUpdate)
            throw new GraphQLError("ad not found", {
                extensions: { code: "NOT_FOUND", http: { status: 404 } },
            });

        Object.assign(adToUpdate, data)
        await adToUpdate.save()
        return adToUpdate
    }

    @Mutation(() => String)
    async deleteAd(@Arg("id", () => Int) id: number) {
        const ad = await Ad.findOne({
            where: { id },
            relations: { tags: true, categorie: true },
        });
        if (!ad)
            throw new GraphQLError("ad not found", {
                extensions: { code: "NOT_FOUND", http: { status: 404 } },
            });
        await ad.remove()
        return 'ad deleted !'
    }
}