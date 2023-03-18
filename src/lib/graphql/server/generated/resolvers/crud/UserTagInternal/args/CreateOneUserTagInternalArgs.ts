import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTagInternalCreateInput } from "../../../inputs/UserTagInternalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserTagInternalArgs {
  @TypeGraphQL.Field(_type => UserTagInternalCreateInput, {
    nullable: false
  })
  data!: UserTagInternalCreateInput;
}
