import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCredentialUpdateInput } from "../../../inputs/ExternalServiceCredentialUpdateInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../../../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneExternalServiceCredentialArgs {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialUpdateInput, {
    nullable: false
  })
  data!: ExternalServiceCredentialUpdateInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialWhereUniqueInput;
}
