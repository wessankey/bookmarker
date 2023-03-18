import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateWithoutUserInput } from "../inputs/UserTagInternalCreateWithoutUserInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class UserTagInternalCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTagInternalCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserTagInternalCreateWithoutUserInput;
}
