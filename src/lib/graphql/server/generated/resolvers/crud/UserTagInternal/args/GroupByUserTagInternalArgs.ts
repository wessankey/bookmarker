import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTagInternalOrderByWithAggregationInput } from "../../../inputs/UserTagInternalOrderByWithAggregationInput";
import { UserTagInternalScalarWhereWithAggregatesInput } from "../../../inputs/UserTagInternalScalarWhereWithAggregatesInput";
import { UserTagInternalWhereInput } from "../../../inputs/UserTagInternalWhereInput";
import { UserTagInternalScalarFieldEnum } from "../../../../enums/UserTagInternalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserTagInternalArgs {
  @TypeGraphQL.Field(_type => UserTagInternalWhereInput, {
    nullable: true
  })
  where?: UserTagInternalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserTagInternalOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "tagId" | "tagColor">;

  @TypeGraphQL.Field(_type => UserTagInternalScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserTagInternalScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
