import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExternalServiceArgs } from "./args/AggregateExternalServiceArgs";
import { CreateManyExternalServiceArgs } from "./args/CreateManyExternalServiceArgs";
import { CreateOneExternalServiceArgs } from "./args/CreateOneExternalServiceArgs";
import { DeleteManyExternalServiceArgs } from "./args/DeleteManyExternalServiceArgs";
import { DeleteOneExternalServiceArgs } from "./args/DeleteOneExternalServiceArgs";
import { FindFirstExternalServiceArgs } from "./args/FindFirstExternalServiceArgs";
import { FindFirstExternalServiceOrThrowArgs } from "./args/FindFirstExternalServiceOrThrowArgs";
import { FindManyExternalServiceArgs } from "./args/FindManyExternalServiceArgs";
import { FindUniqueExternalServiceArgs } from "./args/FindUniqueExternalServiceArgs";
import { FindUniqueExternalServiceOrThrowArgs } from "./args/FindUniqueExternalServiceOrThrowArgs";
import { GroupByExternalServiceArgs } from "./args/GroupByExternalServiceArgs";
import { UpdateManyExternalServiceArgs } from "./args/UpdateManyExternalServiceArgs";
import { UpdateOneExternalServiceArgs } from "./args/UpdateOneExternalServiceArgs";
import { UpsertOneExternalServiceArgs } from "./args/UpsertOneExternalServiceArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ExternalService } from "../../../models/ExternalService";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateExternalService } from "../../outputs/AggregateExternalService";
import { ExternalServiceGroupBy } from "../../outputs/ExternalServiceGroupBy";

@TypeGraphQL.Resolver(_of => ExternalService)
export class ExternalServiceCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateExternalService, {
    nullable: false
  })
  async aggregateExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExternalServiceArgs): Promise<AggregateExternalService> {
    return getPrismaFromContext(ctx).externalService.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyExternalServiceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExternalService, {
    nullable: false
  })
  async createOneExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneExternalServiceArgs): Promise<ExternalService> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyExternalServiceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExternalService, {
    nullable: true
  })
  async deleteOneExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExternalServiceArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExternalService, {
    nullable: true
  })
  async findFirstExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExternalServiceArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExternalService, {
    nullable: true
  })
  async findFirstExternalServiceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExternalServiceOrThrowArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExternalService], {
    nullable: false
  })
  async externalServices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExternalServiceArgs): Promise<ExternalService[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExternalService, {
    nullable: true
  })
  async externalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExternalServiceArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExternalService, {
    nullable: true
  })
  async getExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExternalServiceOrThrowArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExternalServiceGroupBy], {
    nullable: false
  })
  async groupByExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExternalServiceArgs): Promise<ExternalServiceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyExternalServiceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExternalService, {
    nullable: true
  })
  async updateOneExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneExternalServiceArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExternalService, {
    nullable: false
  })
  async upsertOneExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneExternalServiceArgs): Promise<ExternalService> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
