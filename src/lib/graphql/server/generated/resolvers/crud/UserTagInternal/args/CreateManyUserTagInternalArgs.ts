import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTagInternalCreateManyInput } from "../../../inputs/UserTagInternalCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserTagInternalArgs {
  @TypeGraphQL.Field(_type => [UserTagInternalCreateManyInput], {
    nullable: false
  })
  data!: UserTagInternalCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
