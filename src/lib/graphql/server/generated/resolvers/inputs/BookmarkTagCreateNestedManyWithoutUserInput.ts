import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateManyUserInputEnvelope } from "../inputs/BookmarkTagCreateManyUserInputEnvelope";
import { BookmarkTagCreateOrConnectWithoutUserInput } from "../inputs/BookmarkTagCreateOrConnectWithoutUserInput";
import { BookmarkTagCreateWithoutUserInput } from "../inputs/BookmarkTagCreateWithoutUserInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class BookmarkTagCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookmarkTagCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkTagCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookmarkTagCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagWhereUniqueInput], {
    nullable: true
  })
  connect?: BookmarkTagWhereUniqueInput[] | undefined;
}
