import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceUpdateInput } from "../../../inputs/ExternalServiceUpdateInput";
import { ExternalServiceWhereUniqueInput } from "../../../inputs/ExternalServiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneExternalServiceArgs {
  @TypeGraphQL.Field(_type => ExternalServiceUpdateInput, {
    nullable: false
  })
  data!: ExternalServiceUpdateInput;

  @TypeGraphQL.Field(_type => ExternalServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceWhereUniqueInput;
}
