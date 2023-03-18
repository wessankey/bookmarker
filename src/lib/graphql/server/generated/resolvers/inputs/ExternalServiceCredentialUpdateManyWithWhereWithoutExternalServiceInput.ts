import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialScalarWhereInput } from "../inputs/ExternalServiceCredentialScalarWhereInput";
import { ExternalServiceCredentialUpdateManyMutationInput } from "../inputs/ExternalServiceCredentialUpdateManyMutationInput";

@TypeGraphQL.InputType("ExternalServiceCredentialUpdateManyWithWhereWithoutExternalServiceInput", {
  isAbstract: true
})
export class ExternalServiceCredentialUpdateManyWithWhereWithoutExternalServiceInput {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialScalarWhereInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialScalarWhereInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExternalServiceCredentialUpdateManyMutationInput;
}
