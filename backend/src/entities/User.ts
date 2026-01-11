import { IsEmail, IsStrongPassword, isStrongPassword } from 'class-validator';
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, } from "typeorm";

export enum UserRole {
    ADMIN = "ADMIN",
    VISITOR = "VISITOR"
}

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ unique: true })
    email: string;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    hashPass: string;

    @Field(() => UserRole)

    //temp fix pour sqlite
    @Column({ type: "simple-enum", enum: UserRole, default: UserRole.VISITOR })
    role: UserRole;
}

@InputType()
export class SignupInput {

    @Field()
    @IsEmail({}, { message: "Email invalide" })
    email: string;
    @Field()
    @IsStrongPassword({}, { message: "8 char min + Majuscule/minuscule+ chiffre+ speciale char" })
    password: string;

}

@InputType()
export class LoginInput {
    @Field()
    @IsEmail({}, { message: "Email invalide" })
    email: string

    @IsStrongPassword({}, { message: "8 char min + Majuscule/minuscule+ chiffre+ speciale char" })
    password: string;
}


