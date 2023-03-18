import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { Tag } from "../../../models/Tag";
import { User } from "../../../models/User";
import { UserTagInternal } from "../../../models/UserTagInternal";
import { UserTagInternalBookmarkTagArgs } from "./args/UserTagInternalBookmarkTagArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserTagInternal)
export class UserTagInternalRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() userTagInternal: UserTagInternal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.findUnique({
      where: {
        userId_tagId: {
          userId: userTagInternal.userId,
          tagId: userTagInternal.tagId,
        },
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false
  })
  async tag(@TypeGraphQL.Root() userTagInternal: UserTagInternal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Tag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.findUnique({
      where: {
        userId_tagId: {
          userId: userTagInternal.userId,
          tagId: userTagInternal.tagId,
        },
      },
    }).tag({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [BookmarkTag], {
    nullable: false
  })
  async BookmarkTag(@TypeGraphQL.Root() userTagInternal: UserTagInternal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserTagInternalBookmarkTagArgs): Promise<BookmarkTag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.findUnique({
      where: {
        userId_tagId: {
          userId: userTagInternal.userId,
          tagId: userTagInternal.tagId,
        },
      },
    }).BookmarkTag({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
