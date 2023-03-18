import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCountAggregate } from "../outputs/ExternalServiceCountAggregate";
import { ExternalServiceMaxAggregate } from "../outputs/ExternalServiceMaxAggregate";
import { ExternalServiceMinAggregate } from "../outputs/ExternalServiceMinAggregate";

@TypeGraphQL.ObjectType("AggregateExternalService", {
  isAbstract: true
})
export class AggregateExternalService {
  @TypeGraphQL.Field(_type => ExternalServiceCountAggregate, {
    nullable: true
  })
  _count!: ExternalServiceCountAggregate | null;

  @TypeGraphQL.Field(_type => ExternalServiceMinAggregate, {
    nullable: true
  })
  _min!: ExternalServiceMinAggregate | null;

  @TypeGraphQL.Field(_type => ExternalServiceMaxAggregate, {
    nullable: true
  })
  _max!: ExternalServiceMaxAggregate | null;
}
