import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOrderByWithAggregationInput } from "../../../inputs/TagOrderByWithAggregationInput";
import { TagScalarWhereWithAggregatesInput } from "../../../inputs/TagScalarWhereWithAggregatesInput";
import { TagWhereInput } from "../../../inputs/TagWhereInput";
import { TagScalarFieldEnum } from "../../../../enums/TagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTagArgs {
  @TypeGraphQL.Field(_type => TagWhereInput, {
    nullable: true
  })
  where?: TagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "value" | "userId" | "tagColor">;

  @TypeGraphQL.Field(_type => TagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
