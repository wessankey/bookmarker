import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserTagInternalArgs } from "./args/AggregateUserTagInternalArgs";
import { CreateManyUserTagInternalArgs } from "./args/CreateManyUserTagInternalArgs";
import { CreateOneUserTagInternalArgs } from "./args/CreateOneUserTagInternalArgs";
import { DeleteManyUserTagInternalArgs } from "./args/DeleteManyUserTagInternalArgs";
import { DeleteOneUserTagInternalArgs } from "./args/DeleteOneUserTagInternalArgs";
import { FindFirstUserTagInternalArgs } from "./args/FindFirstUserTagInternalArgs";
import { FindFirstUserTagInternalOrThrowArgs } from "./args/FindFirstUserTagInternalOrThrowArgs";
import { FindManyUserTagInternalArgs } from "./args/FindManyUserTagInternalArgs";
import { FindUniqueUserTagInternalArgs } from "./args/FindUniqueUserTagInternalArgs";
import { FindUniqueUserTagInternalOrThrowArgs } from "./args/FindUniqueUserTagInternalOrThrowArgs";
import { GroupByUserTagInternalArgs } from "./args/GroupByUserTagInternalArgs";
import { UpdateManyUserTagInternalArgs } from "./args/UpdateManyUserTagInternalArgs";
import { UpdateOneUserTagInternalArgs } from "./args/UpdateOneUserTagInternalArgs";
import { UpsertOneUserTagInternalArgs } from "./args/UpsertOneUserTagInternalArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserTagInternal } from "../../../models/UserTagInternal";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserTagInternal } from "../../outputs/AggregateUserTagInternal";
import { UserTagInternalGroupBy } from "../../outputs/UserTagInternalGroupBy";

@TypeGraphQL.Resolver(_of => UserTagInternal)
export class UserTagInternalCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUserTagInternal, {
    nullable: false
  })
  async aggregateUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserTagInternalArgs): Promise<AggregateUserTagInternal> {
    return getPrismaFromContext(ctx).userTagInternal.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserTagInternalArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserTagInternal, {
    nullable: false
  })
  async createOneUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserTagInternalArgs): Promise<UserTagInternal> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserTagInternalArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserTagInternal, {
    nullable: true
  })
  async deleteOneUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserTagInternalArgs): Promise<UserTagInternal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserTagInternal, {
    nullable: true
  })
  async findFirstUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserTagInternalArgs): Promise<UserTagInternal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserTagInternal, {
    nullable: true
  })
  async findFirstUserTagInternalOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserTagInternalOrThrowArgs): Promise<UserTagInternal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserTagInternal], {
    nullable: false
  })
  async userTagInternals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserTagInternalArgs): Promise<UserTagInternal[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserTagInternal, {
    nullable: true
  })
  async userTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserTagInternalArgs): Promise<UserTagInternal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserTagInternal, {
    nullable: true
  })
  async getUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserTagInternalOrThrowArgs): Promise<UserTagInternal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserTagInternalGroupBy], {
    nullable: false
  })
  async groupByUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserTagInternalArgs): Promise<UserTagInternalGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserTagInternalArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserTagInternal, {
    nullable: true
  })
  async updateOneUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserTagInternalArgs): Promise<UserTagInternal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserTagInternal, {
    nullable: false
  })
  async upsertOneUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserTagInternalArgs): Promise<UserTagInternal> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
