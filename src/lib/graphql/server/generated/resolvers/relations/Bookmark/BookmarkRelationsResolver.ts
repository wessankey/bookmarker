import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Bookmark } from "../../../models/Bookmark";
import { Collection } from "../../../models/Collection";
import { Tag } from "../../../models/Tag";
import { User } from "../../../models/User";
import { BookmarkCollectionsArgs } from "./args/BookmarkCollectionsArgs";
import { BookmarkTagsArgs } from "./args/BookmarkTagsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class BookmarkRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Tag], {
    nullable: false
  })
  async tags(@TypeGraphQL.Root() bookmark: Bookmark, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BookmarkTagsArgs): Promise<Tag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmark.findUnique({
      where: {
        id: bookmark.id,
      },
    }).tags({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Collection], {
    nullable: false
  })
  async collections(@TypeGraphQL.Root() bookmark: Bookmark, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BookmarkCollectionsArgs): Promise<Collection[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmark.findUnique({
      where: {
        id: bookmark.id,
      },
    }).collections({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() bookmark: Bookmark, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmark.findUnique({
      where: {
        id: bookmark.id,
      },
    }).User({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
