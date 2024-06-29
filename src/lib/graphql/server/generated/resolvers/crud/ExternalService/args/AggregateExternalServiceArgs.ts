import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceOrderByWithRelationInput } from "../../../inputs/ExternalServiceOrderByWithRelationInput";
import { ExternalServiceWhereInput } from "../../../inputs/ExternalServiceWhereInput";
import { ExternalServiceWhereUniqueInput } from "../../../inputs/ExternalServiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateExternalServiceArgs {
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
}
