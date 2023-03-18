import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateManyUserTagInput } from "../inputs/BookmarkTagCreateManyUserTagInput";

@TypeGraphQL.InputType("BookmarkTagCreateManyUserTagInputEnvelope", {
  isAbstract: true
})
export class BookmarkTagCreateManyUserTagInputEnvelope {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateManyUserTagInput], {
    nullable: false
  })
  data!: BookmarkTagCreateManyUserTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
