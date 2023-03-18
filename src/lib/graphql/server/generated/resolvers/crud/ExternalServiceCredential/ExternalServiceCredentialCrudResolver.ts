import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExternalServiceCredentialArgs } from "./args/AggregateExternalServiceCredentialArgs";
import { CreateManyExternalServiceCredentialArgs } from "./args/CreateManyExternalServiceCredentialArgs";
import { CreateOneExternalServiceCredentialArgs } from "./args/CreateOneExternalServiceCredentialArgs";
import { DeleteManyExternalServiceCredentialArgs } from "./args/DeleteManyExternalServiceCredentialArgs";
import { DeleteOneExternalServiceCredentialArgs } from "./args/DeleteOneExternalServiceCredentialArgs";
import { FindFirstExternalServiceCredentialArgs } from "./args/FindFirstExternalServiceCredentialArgs";
import { FindFirstExternalServiceCredentialOrThrowArgs } from "./args/FindFirstExternalServiceCredentialOrThrowArgs";
import { FindManyExternalServiceCredentialArgs } from "./args/FindManyExternalServiceCredentialArgs";
import { FindUniqueExternalServiceCredentialArgs } from "./args/FindUniqueExternalServiceCredentialArgs";
import { FindUniqueExternalServiceCredentialOrThrowArgs } from "./args/FindUniqueExternalServiceCredentialOrThrowArgs";
import { GroupByExternalServiceCredentialArgs } from "./args/GroupByExternalServiceCredentialArgs";
import { UpdateManyExternalServiceCredentialArgs } from "./args/UpdateManyExternalServiceCredentialArgs";
import { UpdateOneExternalServiceCredentialArgs } from "./args/UpdateOneExternalServiceCredentialArgs";
import { UpsertOneExternalServiceCredentialArgs } from "./args/UpsertOneExternalServiceCredentialArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ExternalServiceCredential } from "../../../models/ExternalServiceCredential";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateExternalServiceCredential } from "../../outputs/AggregateExternalServiceCredential";
import { ExternalServiceCredentialGroupBy } from "../../outputs/ExternalServiceCredentialGroupBy";

@TypeGraphQL.Resolver(_of => ExternalServiceCredential)
export class ExternalServiceCredentialCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateExternalServiceCredential, {
    nullable: false
  })
  async aggregateExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExternalServiceCredentialArgs): Promise<AggregateExternalServiceCredential> {
    return getPrismaFromContext(ctx).externalServiceCredential.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyExternalServiceCredentialArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExternalServiceCredential, {
    nullable: false
  })
  async createOneExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneExternalServiceCredentialArgs): Promise<ExternalServiceCredential> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyExternalServiceCredentialArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExternalServiceCredential, {
    nullable: true
  })
  async deleteOneExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExternalServiceCredentialArgs): Promise<ExternalServiceCredential | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExternalServiceCredential, {
    nullable: true
  })
  async findFirstExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExternalServiceCredentialArgs): Promise<ExternalServiceCredential | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExternalServiceCredential, {
    nullable: true
  })
  async findFirstExternalServiceCredentialOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExternalServiceCredentialOrThrowArgs): Promise<ExternalServiceCredential | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExternalServiceCredential], {
    nullable: false
  })
  async externalServiceCredentials(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExternalServiceCredentialArgs): Promise<ExternalServiceCredential[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExternalServiceCredential, {
    nullable: true
  })
  async externalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExternalServiceCredentialArgs): Promise<ExternalServiceCredential | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExternalServiceCredential, {
    nullable: true
  })
  async getExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExternalServiceCredentialOrThrowArgs): Promise<ExternalServiceCredential | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExternalServiceCredentialGroupBy], {
    nullable: false
  })
  async groupByExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExternalServiceCredentialArgs): Promise<ExternalServiceCredentialGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyExternalServiceCredentialArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExternalServiceCredential, {
    nullable: true
  })
  async updateOneExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneExternalServiceCredentialArgs): Promise<ExternalServiceCredential | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExternalServiceCredential, {
    nullable: false
  })
  async upsertOneExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneExternalServiceCredentialArgs): Promise<ExternalServiceCredential> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
