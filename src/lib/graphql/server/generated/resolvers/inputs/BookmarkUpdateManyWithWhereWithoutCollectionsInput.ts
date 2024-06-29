import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkScalarWhereInput } from "../inputs/BookmarkScalarWhereInput";
import { BookmarkUpdateManyMutationInput } from "../inputs/BookmarkUpdateManyMutationInput";

@TypeGraphQL.InputType("BookmarkUpdateManyWithWhereWithoutCollectionsInput", {
  isAbstract: true
})
export class BookmarkUpdateManyWithWhereWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => BookmarkScalarWhereInput, {
    nullable: false
  })
  where!: BookmarkScalarWhereInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookmarkUpdateManyMutationInput;
}
