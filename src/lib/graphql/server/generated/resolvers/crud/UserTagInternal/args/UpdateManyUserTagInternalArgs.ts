import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTagInternalUpdateManyMutationInput } from "../../../inputs/UserTagInternalUpdateManyMutationInput";
import { UserTagInternalWhereInput } from "../../../inputs/UserTagInternalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserTagInternalArgs {
  @TypeGraphQL.Field(_type => UserTagInternalUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserTagInternalUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserTagInternalWhereInput, {
    nullable: true
  })
  where?: UserTagInternalWhereInput | undefined;
}
