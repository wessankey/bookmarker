import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialUpdateWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialUpdateWithoutExternalServiceInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialUpdateWithWhereUniqueWithoutExternalServiceInput", {
  isAbstract: true
})
export class ExternalServiceCredentialUpdateWithWhereUniqueWithoutExternalServiceInput {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialUpdateWithoutExternalServiceInput, {
    nullable: false
  })
  data!: ExternalServiceCredentialUpdateWithoutExternalServiceInput;
}
