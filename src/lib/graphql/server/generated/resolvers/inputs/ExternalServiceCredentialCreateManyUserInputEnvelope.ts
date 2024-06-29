import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateManyUserInput } from "../inputs/ExternalServiceCredentialCreateManyUserInput";

@TypeGraphQL.InputType("ExternalServiceCredentialCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ExternalServiceCredentialCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateManyUserInput], {
    nullable: false
  })
  data!: ExternalServiceCredentialCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
