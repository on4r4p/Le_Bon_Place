import { Field, InputType, Int } from "type-graphql";
import { FastifyReply, FastifyRequest } from "fastify";


@InputType()
export class ObjectId {
  @Field(() => Int)
  id: number;
}

expot interface GraphQLContext {
  res: FastifyReply;
  req: FastifyRequest;
}
