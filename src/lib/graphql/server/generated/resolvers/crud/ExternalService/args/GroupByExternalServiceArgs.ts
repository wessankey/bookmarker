import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceOrderByWithAggregationInput } from "../../../inputs/ExternalServiceOrderByWithAggregationInput";
import { ExternalServiceScalarWhereWithAggregatesInput } from "../../../inputs/ExternalServiceScalarWhereWithAggregatesInput";
import { ExternalServiceWhereInput } from "../../../inputs/ExternalServiceWhereInput";
import { ExternalServiceScalarFieldEnum } from "../../../../enums/ExternalServiceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExternalServiceArgs {
  @TypeGraphQL.Field(_type => ExternalServiceWhereInput, {
    nullable: true
  })
  where?: ExternalServiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExternalServiceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "authType">;

  @TypeGraphQL.Field(_type => ExternalServiceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExternalServiceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
