import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Bookmark } from "../../../models/Bookmark";
import { Collection } from "../../../models/Collection";
import { User } from "../../../models/User";
import { CollectionBookmarksArgs } from "./args/CollectionBookmarksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Collection)
export class CollectionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Bookmark], {
    nullable: false
  })
  async bookmarks(@TypeGraphQL.Root() collection: Collection, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CollectionBookmarksArgs): Promise<Bookmark[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collection.findUnique({
      where: {
        id: collection.id,
      },
    }).bookmarks({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async User(@TypeGraphQL.Root() collection: Collection, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collection.findUnique({
      where: {
        id: collection.id,
      },
    }).User({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
