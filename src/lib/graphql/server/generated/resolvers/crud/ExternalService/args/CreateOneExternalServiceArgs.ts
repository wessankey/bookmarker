import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCreateInput } from "../../../inputs/ExternalServiceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneExternalServiceArgs {
  @TypeGraphQL.Field(_type => ExternalServiceCreateInput, {
    nullable: false
  })
  data!: ExternalServiceCreateInput;
}
