import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBookmarkTagArgs } from "./args/AggregateBookmarkTagArgs";
import { CreateManyBookmarkTagArgs } from "./args/CreateManyBookmarkTagArgs";
import { CreateOneBookmarkTagArgs } from "./args/CreateOneBookmarkTagArgs";
import { DeleteManyBookmarkTagArgs } from "./args/DeleteManyBookmarkTagArgs";
import { DeleteOneBookmarkTagArgs } from "./args/DeleteOneBookmarkTagArgs";
import { FindFirstBookmarkTagArgs } from "./args/FindFirstBookmarkTagArgs";
import { FindFirstBookmarkTagOrThrowArgs } from "./args/FindFirstBookmarkTagOrThrowArgs";
import { FindManyBookmarkTagArgs } from "./args/FindManyBookmarkTagArgs";
import { FindUniqueBookmarkTagArgs } from "./args/FindUniqueBookmarkTagArgs";
import { FindUniqueBookmarkTagOrThrowArgs } from "./args/FindUniqueBookmarkTagOrThrowArgs";
import { GroupByBookmarkTagArgs } from "./args/GroupByBookmarkTagArgs";
import { UpdateManyBookmarkTagArgs } from "./args/UpdateManyBookmarkTagArgs";
import { UpdateOneBookmarkTagArgs } from "./args/UpdateOneBookmarkTagArgs";
import { UpsertOneBookmarkTagArgs } from "./args/UpsertOneBookmarkTagArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookmarkTag } from "../../outputs/AggregateBookmarkTag";
import { BookmarkTagGroupBy } from "../../outputs/BookmarkTagGroupBy";

@TypeGraphQL.Resolver(_of => BookmarkTag)
export class BookmarkTagCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateBookmarkTag, {
    nullable: false
  })
  async aggregateBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookmarkTagArgs): Promise<AggregateBookmarkTag> {
    return getPrismaFromContext(ctx).bookmarkTag.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyBookmarkTagArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BookmarkTag, {
    nullable: false
  })
  async createOneBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneBookmarkTagArgs): Promise<BookmarkTag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBookmarkTagArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BookmarkTag, {
    nullable: true
  })
  async deleteOneBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneBookmarkTagArgs): Promise<BookmarkTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BookmarkTag, {
    nullable: true
  })
  async findFirstBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBookmarkTagArgs): Promise<BookmarkTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BookmarkTag, {
    nullable: true
  })
  async findFirstBookmarkTagOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBookmarkTagOrThrowArgs): Promise<BookmarkTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BookmarkTag], {
    nullable: false
  })
  async bookmarkTags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBookmarkTagArgs): Promise<BookmarkTag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BookmarkTag, {
    nullable: true
  })
  async bookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBookmarkTagArgs): Promise<BookmarkTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BookmarkTag, {
    nullable: true
  })
  async getBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBookmarkTagOrThrowArgs): Promise<BookmarkTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BookmarkTagGroupBy], {
    nullable: false
  })
  async groupByBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBookmarkTagArgs): Promise<BookmarkTagGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBookmarkTagArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BookmarkTag, {
    nullable: true
  })
  async updateOneBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneBookmarkTagArgs): Promise<BookmarkTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BookmarkTag, {
    nullable: false
  })
  async upsertOneBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneBookmarkTagArgs): Promise<BookmarkTag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
