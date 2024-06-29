import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateManyUserInput } from "../inputs/CollectionCreateManyUserInput";

@TypeGraphQL.InputType("CollectionCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class CollectionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CollectionCreateManyUserInput], {
    nullable: false
  })
  data!: CollectionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
