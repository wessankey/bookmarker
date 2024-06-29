import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutExternalServicesInput } from "../inputs/UserCreateWithoutExternalServicesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutExternalServicesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutExternalServicesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutExternalServicesInput, {
    nullable: false
  })
  create!: UserCreateWithoutExternalServicesInput;
}
