import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateManyUserTagInputEnvelope } from "../inputs/BookmarkTagCreateManyUserTagInputEnvelope";
import { BookmarkTagCreateOrConnectWithoutUserTagInput } from "../inputs/BookmarkTagCreateOrConnectWithoutUserTagInput";
import { BookmarkTagCreateWithoutUserTagInput } from "../inputs/BookmarkTagCreateWithoutUserTagInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagCreateNestedManyWithoutUserTagInput", {
  isAbstract: true
})
export class BookmarkTagCreateNestedManyWithoutUserTagInput {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateWithoutUserTagInput], {
    nullable: true
  })
  create?: BookmarkTagCreateWithoutUserTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagCreateOrConnectWithoutUserTagInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkTagCreateOrConnectWithoutUserTagInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagCreateManyUserTagInputEnvelope, {
    nullable: true
  })
  createMany?: BookmarkTagCreateManyUserTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagWhereUniqueInput], {
    nullable: true
  })
  connect?: BookmarkTagWhereUniqueInput[] | undefined;
}
