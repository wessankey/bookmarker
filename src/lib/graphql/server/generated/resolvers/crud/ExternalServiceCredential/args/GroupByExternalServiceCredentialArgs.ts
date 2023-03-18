import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCredentialOrderByWithAggregationInput } from "../../../inputs/ExternalServiceCredentialOrderByWithAggregationInput";
import { ExternalServiceCredentialScalarWhereWithAggregatesInput } from "../../../inputs/ExternalServiceCredentialScalarWhereWithAggregatesInput";
import { ExternalServiceCredentialWhereInput } from "../../../inputs/ExternalServiceCredentialWhereInput";
import { ExternalServiceCredentialScalarFieldEnum } from "../../../../enums/ExternalServiceCredentialScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExternalServiceCredentialArgs {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereInput, {
    nullable: true
  })
  where?: ExternalServiceCredentialWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExternalServiceCredentialOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "externalServiceId" | "username" | "password" | "apiToken" | "userId">;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExternalServiceCredentialScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
