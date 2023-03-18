import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCountAggregate } from "../outputs/ExternalServiceCredentialCountAggregate";
import { ExternalServiceCredentialMaxAggregate } from "../outputs/ExternalServiceCredentialMaxAggregate";
import { ExternalServiceCredentialMinAggregate } from "../outputs/ExternalServiceCredentialMinAggregate";

@TypeGraphQL.ObjectType("AggregateExternalServiceCredential", {
  isAbstract: true
})
export class AggregateExternalServiceCredential {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialCountAggregate, {
    nullable: true
  })
  _count!: ExternalServiceCredentialCountAggregate | null;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialMinAggregate, {
    nullable: true
  })
  _min!: ExternalServiceCredentialMinAggregate | null;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialMaxAggregate, {
    nullable: true
  })
  _max!: ExternalServiceCredentialMaxAggregate | null;
}
