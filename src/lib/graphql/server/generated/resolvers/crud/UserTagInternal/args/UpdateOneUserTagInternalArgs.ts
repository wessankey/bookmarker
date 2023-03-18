import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTagInternalUpdateInput } from "../../../inputs/UserTagInternalUpdateInput";
import { UserTagInternalWhereUniqueInput } from "../../../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserTagInternalArgs {
  @TypeGraphQL.Field(_type => UserTagInternalUpdateInput, {
    nullable: false
  })
  data!: UserTagInternalUpdateInput;

  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;
}
