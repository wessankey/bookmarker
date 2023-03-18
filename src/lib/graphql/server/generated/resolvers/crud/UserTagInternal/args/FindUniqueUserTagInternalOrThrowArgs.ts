import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTagInternalWhereUniqueInput } from "../../../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserTagInternalOrThrowArgs {
  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;
}