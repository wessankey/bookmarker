import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateWithoutTagInput } from "../inputs/UserTagInternalCreateWithoutTagInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalCreateOrConnectWithoutTagInput", {
  isAbstract: true
})
export class UserTagInternalCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTagInternalCreateWithoutTagInput, {
    nullable: false
  })
  create!: UserTagInternalCreateWithoutTagInput;
}
