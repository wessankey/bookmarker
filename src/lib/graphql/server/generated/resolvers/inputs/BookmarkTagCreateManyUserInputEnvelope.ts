import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateManyUserInput } from "../inputs/BookmarkTagCreateManyUserInput";

@TypeGraphQL.InputType("BookmarkTagCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class BookmarkTagCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateManyUserInput], {
    nullable: false
  })
  data!: BookmarkTagCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
