import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutExternalServicesInput } from "../inputs/UserCreateOrConnectWithoutExternalServicesInput";
import { UserCreateWithoutExternalServicesInput } from "../inputs/UserCreateWithoutExternalServicesInput";
import { UserUpdateWithoutExternalServicesInput } from "../inputs/UserUpdateWithoutExternalServicesInput";
import { UserUpsertWithoutExternalServicesInput } from "../inputs/UserUpsertWithoutExternalServicesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutExternalServicesNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutExternalServicesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutExternalServicesInput, {
    nullable: true
  })
  create?: UserCreateWithoutExternalServicesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutExternalServicesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutExternalServicesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutExternalServicesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutExternalServicesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutExternalServicesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutExternalServicesInput | undefined;
}
