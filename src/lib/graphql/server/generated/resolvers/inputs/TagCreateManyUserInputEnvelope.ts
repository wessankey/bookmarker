import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateManyUserInput } from "../inputs/TagCreateManyUserInput";

@TypeGraphQL.InputType("TagCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class TagCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TagCreateManyUserInput], {
    nullable: false
  })
  data!: TagCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
