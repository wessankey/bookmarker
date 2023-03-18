import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateNestedManyWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialCreateNestedManyWithoutExternalServiceInput";
import { ExternalServiceAuthType } from "../../enums/ExternalServiceAuthType";
import { ExternalServiceType } from "../../enums/ExternalServiceType";

@TypeGraphQL.InputType("ExternalServiceCreateInput", {
  isAbstract: true
})
export class ExternalServiceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceType, {
    nullable: false
  })
  type!: "INSTAPAPER" | "READWISE";

  @TypeGraphQL.Field(_type => ExternalServiceAuthType, {
    nullable: false
  })
  authType!: "USERNAME_AND_PASSWORD" | "API_TOKEN";

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateNestedManyWithoutExternalServiceInput, {
    nullable: true
  })
  ExternalServiceCredential?: ExternalServiceCredentialCreateNestedManyWithoutExternalServiceInput | undefined;
}
