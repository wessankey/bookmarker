import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceAuthType } from "../../enums/ExternalServiceAuthType";
import { ExternalServiceType } from "../../enums/ExternalServiceType";

@TypeGraphQL.ObjectType("ExternalServiceMinAggregate", {
  isAbstract: true
})
export class ExternalServiceMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => ExternalServiceType, {
    nullable: true
  })
  type!: "INSTAPAPER" | "READWISE" | null;

  @TypeGraphQL.Field(_type => ExternalServiceAuthType, {
    nullable: true
  })
  authType!: "USERNAME_AND_PASSWORD" | "API_TOKEN" | null;
}
