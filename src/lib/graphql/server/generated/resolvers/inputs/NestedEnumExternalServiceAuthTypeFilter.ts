import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceAuthType } from "../../enums/ExternalServiceAuthType";

@TypeGraphQL.InputType("NestedEnumExternalServiceAuthTypeFilter", {
  isAbstract: true
})
export class NestedEnumExternalServiceAuthTypeFilter {
  @TypeGraphQL.Field(_type => ExternalServiceAuthType, {
    nullable: true
  })
  equals?: "USERNAME_AND_PASSWORD" | "API_TOKEN" | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceAuthType], {
    nullable: true
  })
  in?: Array<"USERNAME_AND_PASSWORD" | "API_TOKEN"> | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceAuthType], {
    nullable: true
  })
  notIn?: Array<"USERNAME_AND_PASSWORD" | "API_TOKEN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExternalServiceAuthTypeFilter, {
    nullable: true
  })
  not?: NestedEnumExternalServiceAuthTypeFilter | undefined;
}
