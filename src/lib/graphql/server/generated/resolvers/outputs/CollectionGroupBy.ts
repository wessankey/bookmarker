import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCountAggregate } from "../outputs/CollectionCountAggregate";
import { CollectionMaxAggregate } from "../outputs/CollectionMaxAggregate";
import { CollectionMinAggregate } from "../outputs/CollectionMinAggregate";

@TypeGraphQL.ObjectType("CollectionGroupBy", {
  isAbstract: true
})
export class CollectionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  public!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => CollectionCountAggregate, {
    nullable: true
  })
  _count!: CollectionCountAggregate | null;

  @TypeGraphQL.Field(_type => CollectionMinAggregate, {
    nullable: true
  })
  _min!: CollectionMinAggregate | null;

  @TypeGraphQL.Field(_type => CollectionMaxAggregate, {
    nullable: true
  })
  _max!: CollectionMaxAggregate | null;
}
