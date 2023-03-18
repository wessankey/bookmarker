import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { UserTagInternal } from "../models/UserTagInternal";
import { TagCount } from "../resolvers/outputs/TagCount";

@TypeGraphQL.ObjectType("Tag", {
  isAbstract: true
})
export class Tag {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  UserTag?: UserTagInternal[];

  @TypeGraphQL.Field(_type => TagCount, {
    nullable: true
  })
  _count?: TagCount | null;
}
