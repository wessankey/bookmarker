import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceOrderByWithRelationInput } from "../../../inputs/ExternalServiceOrderByWithRelationInput";
import { ExternalServiceWhereInput } from "../../../inputs/ExternalServiceWhereInput";
import { ExternalServiceWhereUniqueInput } from "../../../inputs/ExternalServiceWhereUniqueInput";
import { ExternalServiceScalarFieldEnum } from "../../../../enums/ExternalServiceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyExternalServiceArgs {
  @TypeGraphQL.Field(_type => ExternalServiceWhereInput, {
    nullable: true
  })
  where?: ExternalServiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExternalServiceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExternalServiceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "authType"> | undefined;
}
