import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateManyUserInput } from "../inputs/UserTagInternalCreateManyUserInput";

@TypeGraphQL.InputType("UserTagInternalCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class UserTagInternalCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserTagInternalCreateManyUserInput], {
    nullable: false
  })
  data!: UserTagInternalCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
