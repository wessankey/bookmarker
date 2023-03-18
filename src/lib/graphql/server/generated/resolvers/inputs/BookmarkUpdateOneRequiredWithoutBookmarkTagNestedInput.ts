import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateOrConnectWithoutBookmarkTagInput } from "../inputs/BookmarkCreateOrConnectWithoutBookmarkTagInput";
import { BookmarkCreateWithoutBookmarkTagInput } from "../inputs/BookmarkCreateWithoutBookmarkTagInput";
import { BookmarkUpdateWithoutBookmarkTagInput } from "../inputs/BookmarkUpdateWithoutBookmarkTagInput";
import { BookmarkUpsertWithoutBookmarkTagInput } from "../inputs/BookmarkUpsertWithoutBookmarkTagInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateOneRequiredWithoutBookmarkTagNestedInput", {
  isAbstract: true
})
export class BookmarkUpdateOneRequiredWithoutBookmarkTagNestedInput {
  @TypeGraphQL.Field(_type => BookmarkCreateWithoutBookmarkTagInput, {
    nullable: true
  })
  create?: BookmarkCreateWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateOrConnectWithoutBookmarkTagInput, {
    nullable: true
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpsertWithoutBookmarkTagInput, {
    nullable: true
  })
  upsert?: BookmarkUpsertWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: true
  })
  connect?: BookmarkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutBookmarkTagInput, {
    nullable: true
  })
  update?: BookmarkUpdateWithoutBookmarkTagInput | undefined;
}
