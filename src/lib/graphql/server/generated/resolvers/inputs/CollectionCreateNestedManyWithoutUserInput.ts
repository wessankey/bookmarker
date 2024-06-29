import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateManyUserInputEnvelope } from "../inputs/CollectionCreateManyUserInputEnvelope";
import { CollectionCreateOrConnectWithoutUserInput } from "../inputs/CollectionCreateOrConnectWithoutUserInput";
import { CollectionCreateWithoutUserInput } from "../inputs/CollectionCreateWithoutUserInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class CollectionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CollectionCreateWithoutUserInput], {
    nullable: true
  })
  create?: CollectionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CollectionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  connect?: CollectionWhereUniqueInput[] | undefined;
}
