import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceWhereInput } from "../../../inputs/ExternalServiceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExternalServiceArgs {
  @TypeGraphQL.Field(_type => ExternalServiceWhereInput, {
    nullable: true
  })
  where?: ExternalServiceWhereInput | undefined;
}
