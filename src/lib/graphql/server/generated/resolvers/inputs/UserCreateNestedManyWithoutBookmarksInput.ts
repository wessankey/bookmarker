import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookmarksInput } from "../inputs/UserCreateOrConnectWithoutBookmarksInput";
import { UserCreateWithoutBookmarksInput } from "../inputs/UserCreateWithoutBookmarksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutBookmarksInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutBookmarksInput], {
    nullable: true
  })
  create?: UserCreateWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutBookmarksInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
