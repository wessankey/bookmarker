import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateOrConnectWithoutTagsInput } from "../inputs/BookmarkCreateOrConnectWithoutTagsInput";
import { BookmarkCreateWithoutTagsInput } from "../inputs/BookmarkCreateWithoutTagsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateNestedManyWithoutTagsInput", {
  isAbstract: true
})
export class BookmarkCreateNestedManyWithoutTagsInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutTagsInput], {
    nullable: true
  })
  create?: BookmarkCreateWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutTagsInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true
  })
  connect?: BookmarkWhereUniqueInput[] | undefined;
}
