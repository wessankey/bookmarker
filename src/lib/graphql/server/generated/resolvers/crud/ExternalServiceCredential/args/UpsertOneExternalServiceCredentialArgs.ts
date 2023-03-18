import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCredentialCreateInput } from "../../../inputs/ExternalServiceCredentialCreateInput";
import { ExternalServiceCredentialUpdateInput } from "../../../inputs/ExternalServiceCredentialUpdateInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../../../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneExternalServiceCredentialArgs {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateInput, {
    nullable: false
  })
  create!: ExternalServiceCredentialCreateInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialUpdateInput, {
    nullable: false
  })
  update!: ExternalServiceCredentialUpdateInput;
}
