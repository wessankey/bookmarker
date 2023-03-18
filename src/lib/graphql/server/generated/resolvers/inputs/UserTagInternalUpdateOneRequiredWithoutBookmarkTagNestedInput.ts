import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateOrConnectWithoutBookmarkTagInput } from "../inputs/UserTagInternalCreateOrConnectWithoutBookmarkTagInput";
import { UserTagInternalCreateWithoutBookmarkTagInput } from "../inputs/UserTagInternalCreateWithoutBookmarkTagInput";
import { UserTagInternalUpdateWithoutBookmarkTagInput } from "../inputs/UserTagInternalUpdateWithoutBookmarkTagInput";
import { UserTagInternalUpsertWithoutBookmarkTagInput } from "../inputs/UserTagInternalUpsertWithoutBookmarkTagInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalUpdateOneRequiredWithoutBookmarkTagNestedInput", {
  isAbstract: true
})
export class UserTagInternalUpdateOneRequiredWithoutBookmarkTagNestedInput {
  @TypeGraphQL.Field(_type => UserTagInternalCreateWithoutBookmarkTagInput, {
    nullable: true
  })
  create?: UserTagInternalCreateWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalCreateOrConnectWithoutBookmarkTagInput, {
    nullable: true
  })
  connectOrCreate?: UserTagInternalCreateOrConnectWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalUpsertWithoutBookmarkTagInput, {
    nullable: true
  })
  upsert?: UserTagInternalUpsertWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: true
  })
  connect?: UserTagInternalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateWithoutBookmarkTagInput, {
    nullable: true
  })
  update?: UserTagInternalUpdateWithoutBookmarkTagInput | undefined;
}
