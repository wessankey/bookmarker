import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCredentialWhereUniqueInput } from "../../../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneExternalServiceCredentialArgs {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialWhereUniqueInput;
}
