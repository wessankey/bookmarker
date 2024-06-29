import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCreateInput } from "../../../inputs/ExternalServiceCreateInput";
import { ExternalServiceUpdateInput } from "../../../inputs/ExternalServiceUpdateInput";
import { ExternalServiceWhereUniqueInput } from "../../../inputs/ExternalServiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneExternalServiceArgs {
  @TypeGraphQL.Field(_type => ExternalServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExternalServiceCreateInput, {
    nullable: false
  })
  create!: ExternalServiceCreateInput;

  @TypeGraphQL.Field(_type => ExternalServiceUpdateInput, {
    nullable: false
  })
  update!: ExternalServiceUpdateInput;
}
