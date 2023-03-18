import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTagInternalOrderByWithRelationInput } from "../../../inputs/UserTagInternalOrderByWithRelationInput";
import { UserTagInternalWhereInput } from "../../../inputs/UserTagInternalWhereInput";
import { UserTagInternalWhereUniqueInput } from "../../../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserTagInternalArgs {
  @TypeGraphQL.Field(_type => UserTagInternalWhereInput, {
    nullable: true
  })
  where?: UserTagInternalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserTagInternalOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserTagInternalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
