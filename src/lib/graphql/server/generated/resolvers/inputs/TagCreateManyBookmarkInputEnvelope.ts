import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateManyBookmarkInput } from "../inputs/TagCreateManyBookmarkInput";

@TypeGraphQL.InputType("TagCreateManyBookmarkInputEnvelope", {
  isAbstract: true
})
export class TagCreateManyBookmarkInputEnvelope {
  @TypeGraphQL.Field(_type => [TagCreateManyBookmarkInput], {
    nullable: false
  })
  data!: TagCreateManyBookmarkInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
