import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateOrConnectWithoutUsersInput } from "../inputs/BookmarkCreateOrConnectWithoutUsersInput";
import { BookmarkCreateWithoutUsersInput } from "../inputs/BookmarkCreateWithoutUsersInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class BookmarkCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutUsersInput], {
    nullable: true
  })
  create?: BookmarkCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true
  })
  connect?: BookmarkWhereUniqueInput[] | undefined;
}
