import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserTagInternalMaxAggregate", {
  isAbstract: true
})
export class UserTagInternalMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tagId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tagColor!: string | null;
}
