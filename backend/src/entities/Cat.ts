import { Length } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Ad } from "./Ad";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ length: 100 })
    nom: string;

    @OneToMany(
        () => Ad,
        (ad) => ad.categorie,
    )
    ads: Ad[];
}

@InputType()
export class NewCat {
    @Field()
    @Length(2, 23, { message: "Ce champ doit contenir entre 2 et 23 chars" })
    nom: string;
}

@InputType()
export class UpdateCat {
    @Field({ nullable: true })
    @Length(2, 23, { message: "Ce champ doit contenir entre 2 et 23 chars" })
    nom?: string;
}