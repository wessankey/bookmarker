import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagScalarWhereInput } from "../inputs/BookmarkTagScalarWhereInput";
import { BookmarkTagUpdateManyMutationInput } from "../inputs/BookmarkTagUpdateManyMutationInput";

@TypeGraphQL.InputType("BookmarkTagUpdateManyWithWhereWithoutBookmarkInput", {
  isAbstract: true
})
export class BookmarkTagUpdateManyWithWhereWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => BookmarkTagScalarWhereInput, {
    nullable: false
  })
  where!: BookmarkTagScalarWhereInput;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookmarkTagUpdateManyMutationInput;
}
