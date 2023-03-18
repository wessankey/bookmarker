import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCountAggregate } from "../outputs/ExternalServiceCountAggregate";
import { ExternalServiceMaxAggregate } from "../outputs/ExternalServiceMaxAggregate";
import { ExternalServiceMinAggregate } from "../outputs/ExternalServiceMinAggregate";
import { ExternalServiceAuthType } from "../../enums/ExternalServiceAuthType";
import { ExternalServiceType } from "../../enums/ExternalServiceType";

@TypeGraphQL.ObjectType("ExternalServiceGroupBy", {
  isAbstract: true
})
export class ExternalServiceGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => ExternalServiceType, {
    nullable: false
  })
  type!: "INSTAPAPER" | "READWISE";

  @TypeGraphQL.Field(_type => ExternalServiceAuthType, {
    nullable: false
  })
  authType!: "USERNAME_AND_PASSWORD" | "API_TOKEN";

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
