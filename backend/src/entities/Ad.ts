import { Field, InputType, Int, ObjectType } from "type-graphql";
import { IsUrl, Length, Min } from "class-validator";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectId } from "../types_backend";
import { Category } from "./Cat";
import { Tag } from "./Tg";

@ObjectType()
@Entity()
export class Ad extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 100 })
  titre: string;

  @Field()
  @Column()
  prix: number;

  @Field()
  @Column({ type: "text", nullable: true })
  description: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Category)
  @ManyToOne(() => Category, { onDelete: 'CASCADE' })
  categorie: Category;

  @Field(() => [Tag])
  @JoinTable()
  @ManyToMany(() => Tag)
  tags: Tag[];

  @Field()
  @Column({ length: 50 })
  location: string;

  @Field()
  @Column()
  picpath: string;
}

@InputType()
export class NewAd {
  @Field()
  @Length(4, 50, { message: "Le titre doit contenir au minimum 4 lettres et au maximum 50" })
  titre: string;

  @Field()
  description: string;

  @Field()
  @Min(0, { message: "Pas assez cher mon fils" })
  prix: number;

  @Field()
  location: string;

  @Field()
  @IsUrl()
  picpath: string;

  @Field(() => ObjectId)
  category: ObjectId;

  @Field(() => [ObjectId], { nullable: true })
  tags?: ObjectId[];
}

@InputType()
export class UpdateAd {
  @Field({ nullable: true })
  @Length(4, 50, { message: "Le titre doit contenir au minimum 4 lettres et au maximum 50" })
  titre?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  @Min(0, { message: "Pas assez cher mon fils.." })
  prix?: number;

  @Field({ nullable: true })
  @IsUrl()
  picpath?: string;

  @Field(() => ObjectId, { nullable: true })
  categorie?: ObjectId;

  @Field(() => [ObjectId], { nullable: true })
  tags?: ObjectId[];

  @Field({ nullable: true })
  location?: string;
}