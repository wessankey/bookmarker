import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCredentialCreateInput } from "../../../inputs/ExternalServiceCredentialCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneExternalServiceCredentialArgs {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateInput, {
    nullable: false
  })
  data!: ExternalServiceCredentialCreateInput;
}
