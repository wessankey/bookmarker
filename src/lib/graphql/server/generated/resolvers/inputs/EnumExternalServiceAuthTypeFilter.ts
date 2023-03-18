import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumExternalServiceAuthTypeFilter } from "../inputs/NestedEnumExternalServiceAuthTypeFilter";
import { ExternalServiceAuthType } from "../../enums/ExternalServiceAuthType";

@TypeGraphQL.InputType("EnumExternalServiceAuthTypeFilter", {
  isAbstract: true
})
export class EnumExternalServiceAuthTypeFilter {
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
