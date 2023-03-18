import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateWithoutBookmarkTagInput } from "../inputs/UserTagInternalCreateWithoutBookmarkTagInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalCreateOrConnectWithoutBookmarkTagInput", {
  isAbstract: true
})
export class UserTagInternalCreateOrConnectWithoutBookmarkTagInput {
  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTagInternalCreateWithoutBookmarkTagInput, {
    nullable: false
  })
  create!: UserTagInternalCreateWithoutBookmarkTagInput;
}
