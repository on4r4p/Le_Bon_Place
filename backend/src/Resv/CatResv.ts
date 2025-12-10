import { GraphQLError } from "graphql";
import {
    Arg,
    Args,
    ArgsType,
    Int,
    Mutation,
    Query,
    Resolver,
} from "type-graphql";
import { Like } from "typeorm";
import { Category, NewCat, UpdateCat } from "../entities/Cat";

@Resolver()
export default class CatResolver {
    @Query(() => [Category])
    async categories() {
        return Category.find();
    }


    @Mutation(() => Category)
    async createCategory(
        @Arg("data", () => NewCat, { validate: true }) data: NewCat,
    ) {
        const newCategory = new Category();
        Object.assign(newCategory, data);
        const { id } = await newCategory.save();
        return Category.findOne({
            where: { id },
            relations: { ads: true },
        });
    }

    @Mutation(() => Category)
    async updateCategory(@Arg("id", () => Int) id: number, @Arg("data", () => UpdateCat, { validate: true }) data: UpdateCat,) {
        const categoryToUpdate = await Category.findOne({
            where: { id },
            relations: { ads: true },
        });
        if (!categoryToUpdate)
            throw new GraphQLError("category not found", {
                extensions: { code: "NOT_FOUND", http: { status: 404 } },
            });

        Object.assign(categoryToUpdate, data)
        await categoryToUpdate.save()
        return categoryToUpdate
    }

    @Mutation(() => String)
    async deleteCategory(@Arg("id", () => Int) id: number) {
        const category = await Category.findOne({
            where: { id },
            relations: { ads: true },
        });
        if (!category)
            throw new GraphQLError("category not found", {
                extensions: { code: "NOT_FOUND", http: { status: 404 } },
            });
        await category.remove()
        return 'category deleted !'
    }
}