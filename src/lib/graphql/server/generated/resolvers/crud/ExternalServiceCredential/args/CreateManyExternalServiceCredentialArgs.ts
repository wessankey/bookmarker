import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExternalServiceCredentialCreateManyInput } from "../../../inputs/ExternalServiceCredentialCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExternalServiceCredentialArgs {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateManyInput], {
    nullable: false
  })
  data!: ExternalServiceCredentialCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
