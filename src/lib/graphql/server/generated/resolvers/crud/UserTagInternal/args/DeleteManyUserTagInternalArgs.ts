import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTagInternalWhereInput } from "../../../inputs/UserTagInternalWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserTagInternalArgs {
  @TypeGraphQL.Field(_type => UserTagInternalWhereInput, {
    nullable: true
  })
  where?: UserTagInternalWhereInput | undefined;
}
