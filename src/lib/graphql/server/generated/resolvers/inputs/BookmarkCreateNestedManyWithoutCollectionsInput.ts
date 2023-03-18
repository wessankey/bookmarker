import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateOrConnectWithoutCollectionsInput } from "../inputs/BookmarkCreateOrConnectWithoutCollectionsInput";
import { BookmarkCreateWithoutCollectionsInput } from "../inputs/BookmarkCreateWithoutCollectionsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateNestedManyWithoutCollectionsInput", {
  isAbstract: true
})
export class BookmarkCreateNestedManyWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutCollectionsInput], {
    nullable: true
  })
  create?: BookmarkCreateWithoutCollectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutCollectionsInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutCollectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true
  })
  connect?: BookmarkWhereUniqueInput[] | undefined;
}
