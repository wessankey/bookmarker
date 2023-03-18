import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutExternalServicesInput } from "../inputs/UserCreateOrConnectWithoutExternalServicesInput";
import { UserCreateWithoutExternalServicesInput } from "../inputs/UserCreateWithoutExternalServicesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutExternalServicesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutExternalServicesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutExternalServicesInput, {
    nullable: true
  })
  create?: UserCreateWithoutExternalServicesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutExternalServicesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutExternalServicesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
