import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateOrConnectWithoutBookmarkTagInput } from "../inputs/UserTagInternalCreateOrConnectWithoutBookmarkTagInput";
import { UserTagInternalCreateWithoutBookmarkTagInput } from "../inputs/UserTagInternalCreateWithoutBookmarkTagInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalCreateNestedOneWithoutBookmarkTagInput", {
  isAbstract: true
})
export class UserTagInternalCreateNestedOneWithoutBookmarkTagInput {
  @TypeGraphQL.Field(_type => UserTagInternalCreateWithoutBookmarkTagInput, {
    nullable: true
  })
  create?: UserTagInternalCreateWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalCreateOrConnectWithoutBookmarkTagInput, {
    nullable: true
  })
  connectOrCreate?: UserTagInternalCreateOrConnectWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: true
  })
  connect?: UserTagInternalWhereUniqueInput | undefined;
}
