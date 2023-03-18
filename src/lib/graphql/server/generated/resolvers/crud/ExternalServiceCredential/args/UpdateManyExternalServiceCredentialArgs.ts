import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCredentialUpdateManyMutationInput } from "../../../inputs/ExternalServiceCredentialUpdateManyMutationInput";
import { ExternalServiceCredentialWhereInput } from "../../../inputs/ExternalServiceCredentialWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExternalServiceCredentialArgs {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExternalServiceCredentialUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereInput, {
    nullable: true
  })
  where?: ExternalServiceCredentialWhereInput | undefined;
}
