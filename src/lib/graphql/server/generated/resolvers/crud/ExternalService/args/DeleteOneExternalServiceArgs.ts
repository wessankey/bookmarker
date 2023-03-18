import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceWhereUniqueInput } from "../../../inputs/ExternalServiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneExternalServiceArgs {
  @TypeGraphQL.Field(_type => ExternalServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceWhereUniqueInput;
}
