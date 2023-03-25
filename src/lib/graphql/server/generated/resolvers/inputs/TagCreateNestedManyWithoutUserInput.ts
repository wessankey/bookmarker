import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateManyUserInputEnvelope } from "../inputs/TagCreateManyUserInputEnvelope";
import { TagCreateOrConnectWithoutUserInput } from "../inputs/TagCreateOrConnectWithoutUserInput";
import { TagCreateWithoutUserInput } from "../inputs/TagCreateWithoutUserInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class TagCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutUserInput], {
    nullable: true
  })
  create?: TagCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TagCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TagCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  connect?: TagWhereUniqueInput[] | undefined;
}
