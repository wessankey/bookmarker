import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCountAggregate } from "../outputs/UserTagInternalCountAggregate";
import { UserTagInternalMaxAggregate } from "../outputs/UserTagInternalMaxAggregate";
import { UserTagInternalMinAggregate } from "../outputs/UserTagInternalMinAggregate";

@TypeGraphQL.ObjectType("UserTagInternalGroupBy", {
  isAbstract: true
})
export class UserTagInternalGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagColor!: string;

  @TypeGraphQL.Field(_type => UserTagInternalCountAggregate, {
    nullable: true
  })
  _count!: UserTagInternalCountAggregate | null;

  @TypeGraphQL.Field(_type => UserTagInternalMinAggregate, {
    nullable: true
  })
  _min!: UserTagInternalMinAggregate | null;

  @TypeGraphQL.Field(_type => UserTagInternalMaxAggregate, {
    nullable: true
  })
  _max!: UserTagInternalMaxAggregate | null;
}
