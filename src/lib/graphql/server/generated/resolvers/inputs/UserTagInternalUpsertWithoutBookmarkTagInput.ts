import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateWithoutBookmarkTagInput } from "../inputs/UserTagInternalCreateWithoutBookmarkTagInput";
import { UserTagInternalUpdateWithoutBookmarkTagInput } from "../inputs/UserTagInternalUpdateWithoutBookmarkTagInput";

@TypeGraphQL.InputType("UserTagInternalUpsertWithoutBookmarkTagInput", {
  isAbstract: true
})
export class UserTagInternalUpsertWithoutBookmarkTagInput {
  @TypeGraphQL.Field(_type => UserTagInternalUpdateWithoutBookmarkTagInput, {
    nullable: false
  })
  update!: UserTagInternalUpdateWithoutBookmarkTagInput;

  @TypeGraphQL.Field(_type => UserTagInternalCreateWithoutBookmarkTagInput, {
    nullable: false
  })
  create!: UserTagInternalCreateWithoutBookmarkTagInput;
}
