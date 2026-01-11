import { hash, verify } from "argon2";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User, SignupInput, LoginInput } from "../entities/User";
import { endSession, getCurrentUser, startSession } from "../auth"
import { GraphQLContext } from "../types"


@Resolver()
export default class UserResolver {
    @Query(() => [User])
    async users() {
        return await User.find();
    }

    @Mutation(() => User)
    async singup(
        @Arg("data", () => SignupInput, { validate: true }) data: SignupInput) {
        const existingUser = await User.findOne({ where: { email: data.email } });
        if (existingUser) {
            throw new GraphQLError("Email déjà existant.",
                {
                    extensions: { code: "EMAIL_ALREADY_TAKEN", http: { status: 400 } },
                });
        }

        const hashPass = await hash(data.password);
        const newUser = User.create({ ...data, hashPass });
        return await newUser.save();
    }

    @Mutation(() => String)
    async login(
        @Arg("data", () => LoginInput, { validate: true }) data: LoginInput,
        @Ctx() context: GraphQLContext,
    ) {
        const user = await User.findOne({ where: { email: data.email } });
        if (!user) {
            throw new GraphQLError("Email ou password incorrect", { extensions: { code: "INVALID_CRED", http: { status: 401 } } });
        }
        return startSession(context, user);

    }


}






