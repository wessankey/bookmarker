import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateManyExternalServiceInput } from "../inputs/ExternalServiceCredentialCreateManyExternalServiceInput";

@TypeGraphQL.InputType("ExternalServiceCredentialCreateManyExternalServiceInputEnvelope", {
  isAbstract: true
})
export class ExternalServiceCredentialCreateManyExternalServiceInputEnvelope {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateManyExternalServiceInput], {
    nullable: false
  })
  data!: ExternalServiceCredentialCreateManyExternalServiceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
