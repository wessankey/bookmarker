import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagScalarWhereInput } from "../inputs/BookmarkTagScalarWhereInput";
import { BookmarkTagUpdateManyMutationInput } from "../inputs/BookmarkTagUpdateManyMutationInput";

@TypeGraphQL.InputType("BookmarkTagUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class BookmarkTagUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => BookmarkTagScalarWhereInput, {
    nullable: false
  })
  where!: BookmarkTagScalarWhereInput;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookmarkTagUpdateManyMutationInput;
}