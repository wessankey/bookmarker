import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTagInternalCreateInput } from "../../../inputs/UserTagInternalCreateInput";
import { UserTagInternalUpdateInput } from "../../../inputs/UserTagInternalUpdateInput";
import { UserTagInternalWhereUniqueInput } from "../../../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserTagInternalArgs {
  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTagInternalCreateInput, {
    nullable: false
  })
  create!: UserTagInternalCreateInput;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateInput, {
    nullable: false
  })
  update!: UserTagInternalUpdateInput;
}
