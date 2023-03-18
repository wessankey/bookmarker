import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExternalServiceCredential } from "../models/ExternalServiceCredential";
import { ExternalServiceAuthType } from "../enums/ExternalServiceAuthType";
import { ExternalServiceType } from "../enums/ExternalServiceType";
import { ExternalServiceCount } from "../resolvers/outputs/ExternalServiceCount";

@TypeGraphQL.ObjectType("ExternalService", {
  isAbstract: true
})
export class ExternalService {
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

  ExternalServiceCredential?: ExternalServiceCredential[];

  @TypeGraphQL.Field(_type => ExternalServiceCount, {
    nullable: true
  })
  _count?: ExternalServiceCount | null;
}
