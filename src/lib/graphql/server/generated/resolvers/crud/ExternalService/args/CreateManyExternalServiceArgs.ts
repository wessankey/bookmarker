import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCreateManyInput } from "../../../inputs/ExternalServiceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExternalServiceArgs {
  @TypeGraphQL.Field(_type => [ExternalServiceCreateManyInput], {
    nullable: false
  })
  data!: ExternalServiceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
