import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExternalService } from "../models/ExternalService";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("ExternalServiceCredential", {
  isAbstract: true
})
export class ExternalServiceCredential {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  externalServiceId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  apiToken?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  externalService?: ExternalService;

  user?: User;
}
