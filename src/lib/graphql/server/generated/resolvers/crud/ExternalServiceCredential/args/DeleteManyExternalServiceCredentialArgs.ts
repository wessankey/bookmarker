import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCredentialWhereInput } from "../../../inputs/ExternalServiceCredentialWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExternalServiceCredentialArgs {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereInput, {
    nullable: true
  })
  where?: ExternalServiceCredentialWhereInput | undefined;
}
