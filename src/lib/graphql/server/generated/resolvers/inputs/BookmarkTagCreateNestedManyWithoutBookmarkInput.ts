import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateManyBookmarkInputEnvelope } from "../inputs/BookmarkTagCreateManyBookmarkInputEnvelope";
import { BookmarkTagCreateOrConnectWithoutBookmarkInput } from "../inputs/BookmarkTagCreateOrConnectWithoutBookmarkInput";
import { BookmarkTagCreateWithoutBookmarkInput } from "../inputs/BookmarkTagCreateWithoutBookmarkInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagCreateNestedManyWithoutBookmarkInput", {
  isAbstract: true
})
export class BookmarkTagCreateNestedManyWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateWithoutBookmarkInput], {
    nullable: true
  })
  create?: BookmarkTagCreateWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagCreateOrConnectWithoutBookmarkInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkTagCreateOrConnectWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagCreateManyBookmarkInputEnvelope, {
    nullable: true
  })
  createMany?: BookmarkTagCreateManyBookmarkInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagWhereUniqueInput], {
    nullable: true
  })
  connect?: BookmarkTagWhereUniqueInput[] | undefined;
}
