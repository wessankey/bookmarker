import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceUpdateManyMutationInput } from "../../../inputs/ExternalServiceUpdateManyMutationInput";
import { ExternalServiceWhereInput } from "../../../inputs/ExternalServiceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExternalServiceArgs {
  @TypeGraphQL.Field(_type => ExternalServiceUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExternalServiceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExternalServiceWhereInput, {
    nullable: true
  })
  where?: ExternalServiceWhereInput | undefined;
}
