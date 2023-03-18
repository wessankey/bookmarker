import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCredentialOrderByWithRelationInput } from "../../../inputs/ExternalServiceCredentialOrderByWithRelationInput";
import { ExternalServiceCredentialWhereInput } from "../../../inputs/ExternalServiceCredentialWhereInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../../../inputs/ExternalServiceCredentialWhereUniqueInput";
import { ExternalServiceCredentialScalarFieldEnum } from "../../../../enums/ExternalServiceCredentialScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstExternalServiceCredentialArgs {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereInput, {
    nullable: true
  })
  where?: ExternalServiceCredentialWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExternalServiceCredentialOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExternalServiceCredentialWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "externalServiceId" | "username" | "password" | "apiToken" | "userId"> | undefined;
}
