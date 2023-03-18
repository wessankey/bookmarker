import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  ExternalService: crudResolvers.ExternalServiceCrudResolver,
  ExternalServiceCredential: crudResolvers.ExternalServiceCredentialCrudResolver,
  Bookmark: crudResolvers.BookmarkCrudResolver,
  Tag: crudResolvers.TagCrudResolver,
  UserTagInternal: crudResolvers.UserTagInternalCrudResolver,
  BookmarkTag: crudResolvers.BookmarkTagCrudResolver,
  Collection: crudResolvers.CollectionCrudResolver,
  Account: crudResolvers.AccountCrudResolver,
  Session: crudResolvers.SessionCrudResolver,
  VerificationToken: crudResolvers.VerificationTokenCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  ExternalService: {
    aggregateExternalService: actionResolvers.AggregateExternalServiceResolver,
    createManyExternalService: actionResolvers.CreateManyExternalServiceResolver,
    createOneExternalService: actionResolvers.CreateOneExternalServiceResolver,
    deleteManyExternalService: actionResolvers.DeleteManyExternalServiceResolver,
    deleteOneExternalService: actionResolvers.DeleteOneExternalServiceResolver,
    findFirstExternalService: actionResolvers.FindFirstExternalServiceResolver,
    findFirstExternalServiceOrThrow: actionResolvers.FindFirstExternalServiceOrThrowResolver,
    externalServices: actionResolvers.FindManyExternalServiceResolver,
    externalService: actionResolvers.FindUniqueExternalServiceResolver,
    getExternalService: actionResolvers.FindUniqueExternalServiceOrThrowResolver,
    groupByExternalService: actionResolvers.GroupByExternalServiceResolver,
    updateManyExternalService: actionResolvers.UpdateManyExternalServiceResolver,
    updateOneExternalService: actionResolvers.UpdateOneExternalServiceResolver,
    upsertOneExternalService: actionResolvers.UpsertOneExternalServiceResolver
  },
  ExternalServiceCredential: {
    aggregateExternalServiceCredential: actionResolvers.AggregateExternalServiceCredentialResolver,
    createManyExternalServiceCredential: actionResolvers.CreateManyExternalServiceCredentialResolver,
    createOneExternalServiceCredential: actionResolvers.CreateOneExternalServiceCredentialResolver,
    deleteManyExternalServiceCredential: actionResolvers.DeleteManyExternalServiceCredentialResolver,
    deleteOneExternalServiceCredential: actionResolvers.DeleteOneExternalServiceCredentialResolver,
    findFirstExternalServiceCredential: actionResolvers.FindFirstExternalServiceCredentialResolver,
    findFirstExternalServiceCredentialOrThrow: actionResolvers.FindFirstExternalServiceCredentialOrThrowResolver,
    externalServiceCredentials: actionResolvers.FindManyExternalServiceCredentialResolver,
    externalServiceCredential: actionResolvers.FindUniqueExternalServiceCredentialResolver,
    getExternalServiceCredential: actionResolvers.FindUniqueExternalServiceCredentialOrThrowResolver,
    groupByExternalServiceCredential: actionResolvers.GroupByExternalServiceCredentialResolver,
    updateManyExternalServiceCredential: actionResolvers.UpdateManyExternalServiceCredentialResolver,
    updateOneExternalServiceCredential: actionResolvers.UpdateOneExternalServiceCredentialResolver,
    upsertOneExternalServiceCredential: actionResolvers.UpsertOneExternalServiceCredentialResolver
  },
  Bookmark: {
    aggregateBookmark: actionResolvers.AggregateBookmarkResolver,
    createManyBookmark: actionResolvers.CreateManyBookmarkResolver,
    createOneBookmark: actionResolvers.CreateOneBookmarkResolver,
    deleteManyBookmark: actionResolvers.DeleteManyBookmarkResolver,
    deleteOneBookmark: actionResolvers.DeleteOneBookmarkResolver,
    findFirstBookmark: actionResolvers.FindFirstBookmarkResolver,
    findFirstBookmarkOrThrow: actionResolvers.FindFirstBookmarkOrThrowResolver,
    bookmarks: actionResolvers.FindManyBookmarkResolver,
    bookmark: actionResolvers.FindUniqueBookmarkResolver,
    getBookmark: actionResolvers.FindUniqueBookmarkOrThrowResolver,
    groupByBookmark: actionResolvers.GroupByBookmarkResolver,
    updateManyBookmark: actionResolvers.UpdateManyBookmarkResolver,
    updateOneBookmark: actionResolvers.UpdateOneBookmarkResolver,
    upsertOneBookmark: actionResolvers.UpsertOneBookmarkResolver
  },
  Tag: {
    aggregateTag: actionResolvers.AggregateTagResolver,
    createManyTag: actionResolvers.CreateManyTagResolver,
    createOneTag: actionResolvers.CreateOneTagResolver,
    deleteManyTag: actionResolvers.DeleteManyTagResolver,
    deleteOneTag: actionResolvers.DeleteOneTagResolver,
    findFirstTag: actionResolvers.FindFirstTagResolver,
    findFirstTagOrThrow: actionResolvers.FindFirstTagOrThrowResolver,
    tags: actionResolvers.FindManyTagResolver,
    tag: actionResolvers.FindUniqueTagResolver,
    getTag: actionResolvers.FindUniqueTagOrThrowResolver,
    groupByTag: actionResolvers.GroupByTagResolver,
    updateManyTag: actionResolvers.UpdateManyTagResolver,
    updateOneTag: actionResolvers.UpdateOneTagResolver,
    upsertOneTag: actionResolvers.UpsertOneTagResolver
  },
  UserTagInternal: {
    aggregateUserTagInternal: actionResolvers.AggregateUserTagInternalResolver,
    createManyUserTagInternal: actionResolvers.CreateManyUserTagInternalResolver,
    createOneUserTagInternal: actionResolvers.CreateOneUserTagInternalResolver,
    deleteManyUserTagInternal: actionResolvers.DeleteManyUserTagInternalResolver,
    deleteOneUserTagInternal: actionResolvers.DeleteOneUserTagInternalResolver,
    findFirstUserTagInternal: actionResolvers.FindFirstUserTagInternalResolver,
    findFirstUserTagInternalOrThrow: actionResolvers.FindFirstUserTagInternalOrThrowResolver,
    userTagInternals: actionResolvers.FindManyUserTagInternalResolver,
    userTagInternal: actionResolvers.FindUniqueUserTagInternalResolver,
    getUserTagInternal: actionResolvers.FindUniqueUserTagInternalOrThrowResolver,
    groupByUserTagInternal: actionResolvers.GroupByUserTagInternalResolver,
    updateManyUserTagInternal: actionResolvers.UpdateManyUserTagInternalResolver,
    updateOneUserTagInternal: actionResolvers.UpdateOneUserTagInternalResolver,
    upsertOneUserTagInternal: actionResolvers.UpsertOneUserTagInternalResolver
  },
  BookmarkTag: {
    aggregateBookmarkTag: actionResolvers.AggregateBookmarkTagResolver,
    createManyBookmarkTag: actionResolvers.CreateManyBookmarkTagResolver,
    createOneBookmarkTag: actionResolvers.CreateOneBookmarkTagResolver,
    deleteManyBookmarkTag: actionResolvers.DeleteManyBookmarkTagResolver,
    deleteOneBookmarkTag: actionResolvers.DeleteOneBookmarkTagResolver,
    findFirstBookmarkTag: actionResolvers.FindFirstBookmarkTagResolver,
    findFirstBookmarkTagOrThrow: actionResolvers.FindFirstBookmarkTagOrThrowResolver,
    bookmarkTags: actionResolvers.FindManyBookmarkTagResolver,
    bookmarkTag: actionResolvers.FindUniqueBookmarkTagResolver,
    getBookmarkTag: actionResolvers.FindUniqueBookmarkTagOrThrowResolver,
    groupByBookmarkTag: actionResolvers.GroupByBookmarkTagResolver,
    updateManyBookmarkTag: actionResolvers.UpdateManyBookmarkTagResolver,
    updateOneBookmarkTag: actionResolvers.UpdateOneBookmarkTagResolver,
    upsertOneBookmarkTag: actionResolvers.UpsertOneBookmarkTagResolver
  },
  Collection: {
    aggregateCollection: actionResolvers.AggregateCollectionResolver,
    createManyCollection: actionResolvers.CreateManyCollectionResolver,
    createOneCollection: actionResolvers.CreateOneCollectionResolver,
    deleteManyCollection: actionResolvers.DeleteManyCollectionResolver,
    deleteOneCollection: actionResolvers.DeleteOneCollectionResolver,
    findFirstCollection: actionResolvers.FindFirstCollectionResolver,
    findFirstCollectionOrThrow: actionResolvers.FindFirstCollectionOrThrowResolver,
    collections: actionResolvers.FindManyCollectionResolver,
    collection: actionResolvers.FindUniqueCollectionResolver,
    getCollection: actionResolvers.FindUniqueCollectionOrThrowResolver,
    groupByCollection: actionResolvers.GroupByCollectionResolver,
    updateManyCollection: actionResolvers.UpdateManyCollectionResolver,
    updateOneCollection: actionResolvers.UpdateOneCollectionResolver,
    upsertOneCollection: actionResolvers.UpsertOneCollectionResolver
  },
  Account: {
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    createOneAccount: actionResolvers.CreateOneAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    account: actionResolvers.FindUniqueAccountResolver,
    getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    updateOneAccount: actionResolvers.UpdateOneAccountResolver,
    upsertOneAccount: actionResolvers.UpsertOneAccountResolver
  },
  Session: {
    aggregateSession: actionResolvers.AggregateSessionResolver,
    createManySession: actionResolvers.CreateManySessionResolver,
    createOneSession: actionResolvers.CreateOneSessionResolver,
    deleteManySession: actionResolvers.DeleteManySessionResolver,
    deleteOneSession: actionResolvers.DeleteOneSessionResolver,
    findFirstSession: actionResolvers.FindFirstSessionResolver,
    findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
    sessions: actionResolvers.FindManySessionResolver,
    session: actionResolvers.FindUniqueSessionResolver,
    getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
    groupBySession: actionResolvers.GroupBySessionResolver,
    updateManySession: actionResolvers.UpdateManySessionResolver,
    updateOneSession: actionResolvers.UpdateOneSessionResolver,
    upsertOneSession: actionResolvers.UpsertOneSessionResolver
  },
  VerificationToken: {
    aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
    createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
    createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
    deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
    deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
    findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
    findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
    verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
    verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
    getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
    groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
    updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
    updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
    upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  ExternalService: ["aggregateExternalService", "createManyExternalService", "createOneExternalService", "deleteManyExternalService", "deleteOneExternalService", "findFirstExternalService", "findFirstExternalServiceOrThrow", "externalServices", "externalService", "getExternalService", "groupByExternalService", "updateManyExternalService", "updateOneExternalService", "upsertOneExternalService"],
  ExternalServiceCredential: ["aggregateExternalServiceCredential", "createManyExternalServiceCredential", "createOneExternalServiceCredential", "deleteManyExternalServiceCredential", "deleteOneExternalServiceCredential", "findFirstExternalServiceCredential", "findFirstExternalServiceCredentialOrThrow", "externalServiceCredentials", "externalServiceCredential", "getExternalServiceCredential", "groupByExternalServiceCredential", "updateManyExternalServiceCredential", "updateOneExternalServiceCredential", "upsertOneExternalServiceCredential"],
  Bookmark: ["aggregateBookmark", "createManyBookmark", "createOneBookmark", "deleteManyBookmark", "deleteOneBookmark", "findFirstBookmark", "findFirstBookmarkOrThrow", "bookmarks", "bookmark", "getBookmark", "groupByBookmark", "updateManyBookmark", "updateOneBookmark", "upsertOneBookmark"],
  Tag: ["aggregateTag", "createManyTag", "createOneTag", "deleteManyTag", "deleteOneTag", "findFirstTag", "findFirstTagOrThrow", "tags", "tag", "getTag", "groupByTag", "updateManyTag", "updateOneTag", "upsertOneTag"],
  UserTagInternal: ["aggregateUserTagInternal", "createManyUserTagInternal", "createOneUserTagInternal", "deleteManyUserTagInternal", "deleteOneUserTagInternal", "findFirstUserTagInternal", "findFirstUserTagInternalOrThrow", "userTagInternals", "userTagInternal", "getUserTagInternal", "groupByUserTagInternal", "updateManyUserTagInternal", "updateOneUserTagInternal", "upsertOneUserTagInternal"],
  BookmarkTag: ["aggregateBookmarkTag", "createManyBookmarkTag", "createOneBookmarkTag", "deleteManyBookmarkTag", "deleteOneBookmarkTag", "findFirstBookmarkTag", "findFirstBookmarkTagOrThrow", "bookmarkTags", "bookmarkTag", "getBookmarkTag", "groupByBookmarkTag", "updateManyBookmarkTag", "updateOneBookmarkTag", "upsertOneBookmarkTag"],
  Collection: ["aggregateCollection", "createManyCollection", "createOneCollection", "deleteManyCollection", "deleteOneCollection", "findFirstCollection", "findFirstCollectionOrThrow", "collections", "collection", "getCollection", "groupByCollection", "updateManyCollection", "updateOneCollection", "upsertOneCollection"],
  Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
  Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
  VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateExternalServiceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyExternalServiceArgs: ["data", "skipDuplicates"],
  CreateOneExternalServiceArgs: ["data"],
  DeleteManyExternalServiceArgs: ["where"],
  DeleteOneExternalServiceArgs: ["where"],
  FindFirstExternalServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstExternalServiceOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExternalServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueExternalServiceArgs: ["where"],
  FindUniqueExternalServiceOrThrowArgs: ["where"],
  GroupByExternalServiceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyExternalServiceArgs: ["data", "where"],
  UpdateOneExternalServiceArgs: ["data", "where"],
  UpsertOneExternalServiceArgs: ["where", "create", "update"],
  AggregateExternalServiceCredentialArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyExternalServiceCredentialArgs: ["data", "skipDuplicates"],
  CreateOneExternalServiceCredentialArgs: ["data"],
  DeleteManyExternalServiceCredentialArgs: ["where"],
  DeleteOneExternalServiceCredentialArgs: ["where"],
  FindFirstExternalServiceCredentialArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstExternalServiceCredentialOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExternalServiceCredentialArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueExternalServiceCredentialArgs: ["where"],
  FindUniqueExternalServiceCredentialOrThrowArgs: ["where"],
  GroupByExternalServiceCredentialArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyExternalServiceCredentialArgs: ["data", "where"],
  UpdateOneExternalServiceCredentialArgs: ["data", "where"],
  UpsertOneExternalServiceCredentialArgs: ["where", "create", "update"],
  AggregateBookmarkArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyBookmarkArgs: ["data", "skipDuplicates"],
  CreateOneBookmarkArgs: ["data"],
  DeleteManyBookmarkArgs: ["where"],
  DeleteOneBookmarkArgs: ["where"],
  FindFirstBookmarkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstBookmarkOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBookmarkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueBookmarkArgs: ["where"],
  FindUniqueBookmarkOrThrowArgs: ["where"],
  GroupByBookmarkArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyBookmarkArgs: ["data", "where"],
  UpdateOneBookmarkArgs: ["data", "where"],
  UpsertOneBookmarkArgs: ["where", "create", "update"],
  AggregateTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTagArgs: ["data", "skipDuplicates"],
  CreateOneTagArgs: ["data"],
  DeleteManyTagArgs: ["where"],
  DeleteOneTagArgs: ["where"],
  FindFirstTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTagOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTagArgs: ["where"],
  FindUniqueTagOrThrowArgs: ["where"],
  GroupByTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTagArgs: ["data", "where"],
  UpdateOneTagArgs: ["data", "where"],
  UpsertOneTagArgs: ["where", "create", "update"],
  AggregateUserTagInternalArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserTagInternalArgs: ["data", "skipDuplicates"],
  CreateOneUserTagInternalArgs: ["data"],
  DeleteManyUserTagInternalArgs: ["where"],
  DeleteOneUserTagInternalArgs: ["where"],
  FindFirstUserTagInternalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserTagInternalOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserTagInternalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserTagInternalArgs: ["where"],
  FindUniqueUserTagInternalOrThrowArgs: ["where"],
  GroupByUserTagInternalArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserTagInternalArgs: ["data", "where"],
  UpdateOneUserTagInternalArgs: ["data", "where"],
  UpsertOneUserTagInternalArgs: ["where", "create", "update"],
  AggregateBookmarkTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyBookmarkTagArgs: ["data", "skipDuplicates"],
  CreateOneBookmarkTagArgs: ["data"],
  DeleteManyBookmarkTagArgs: ["where"],
  DeleteOneBookmarkTagArgs: ["where"],
  FindFirstBookmarkTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstBookmarkTagOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBookmarkTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueBookmarkTagArgs: ["where"],
  FindUniqueBookmarkTagOrThrowArgs: ["where"],
  GroupByBookmarkTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyBookmarkTagArgs: ["data", "where"],
  UpdateOneBookmarkTagArgs: ["data", "where"],
  UpsertOneBookmarkTagArgs: ["where", "create", "update"],
  AggregateCollectionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCollectionArgs: ["data", "skipDuplicates"],
  CreateOneCollectionArgs: ["data"],
  DeleteManyCollectionArgs: ["where"],
  DeleteOneCollectionArgs: ["where"],
  FindFirstCollectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCollectionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCollectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCollectionArgs: ["where"],
  FindUniqueCollectionOrThrowArgs: ["where"],
  GroupByCollectionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCollectionArgs: ["data", "where"],
  UpdateOneCollectionArgs: ["data", "where"],
  UpsertOneCollectionArgs: ["where", "create", "update"],
  AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAccountArgs: ["data", "skipDuplicates"],
  CreateOneAccountArgs: ["data"],
  DeleteManyAccountArgs: ["where"],
  DeleteOneAccountArgs: ["where"],
  FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAccountArgs: ["where"],
  FindUniqueAccountOrThrowArgs: ["where"],
  GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAccountArgs: ["data", "where"],
  UpdateOneAccountArgs: ["data", "where"],
  UpsertOneAccountArgs: ["where", "create", "update"],
  AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySessionArgs: ["data", "skipDuplicates"],
  CreateOneSessionArgs: ["data"],
  DeleteManySessionArgs: ["where"],
  DeleteOneSessionArgs: ["where"],
  FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSessionArgs: ["where"],
  FindUniqueSessionOrThrowArgs: ["where"],
  GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySessionArgs: ["data", "where"],
  UpdateOneSessionArgs: ["data", "where"],
  UpsertOneSessionArgs: ["where", "create", "update"],
  AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
  CreateOneVerificationTokenArgs: ["data"],
  DeleteManyVerificationTokenArgs: ["where"],
  DeleteOneVerificationTokenArgs: ["where"],
  FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVerificationTokenArgs: ["where"],
  FindUniqueVerificationTokenOrThrowArgs: ["where"],
  GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVerificationTokenArgs: ["data", "where"],
  UpdateOneVerificationTokenArgs: ["data", "where"],
  UpsertOneVerificationTokenArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  ExternalService: relationResolvers.ExternalServiceRelationsResolver,
  ExternalServiceCredential: relationResolvers.ExternalServiceCredentialRelationsResolver,
  Bookmark: relationResolvers.BookmarkRelationsResolver,
  Tag: relationResolvers.TagRelationsResolver,
  UserTagInternal: relationResolvers.UserTagInternalRelationsResolver,
  BookmarkTag: relationResolvers.BookmarkTagRelationsResolver,
  Collection: relationResolvers.CollectionRelationsResolver,
  Account: relationResolvers.AccountRelationsResolver,
  Session: relationResolvers.SessionRelationsResolver
};
const relationResolversInfo = {
  User: ["bookmarks", "collections", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  ExternalService: ["ExternalServiceCredential"],
  ExternalServiceCredential: ["externalService", "user"],
  Bookmark: ["BookmarkTag", "collections"],
  Tag: ["UserTag"],
  UserTagInternal: ["user", "tag", "BookmarkTag"],
  BookmarkTag: ["bookmark", "user", "userTag"],
  Collection: ["bookmarks", "User"],
  Account: ["user"],
  Session: ["user"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "name", "email", "emailVerified", "image"],
  ExternalService: ["id", "type", "authType"],
  ExternalServiceCredential: ["id", "externalServiceId", "username", "password", "apiToken", "userId"],
  Bookmark: ["id", "title", "description", "url", "userId", "createdAt"],
  Tag: ["id", "value"],
  UserTagInternal: ["userId", "tagId", "tagColor"],
  BookmarkTag: ["bookmarkId", "tagId", "userId", "empty"],
  Collection: ["id", "name", "description", "public", "createdAt", "userId"],
  Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  Session: ["id", "sessionToken", "userId", "expires"],
  VerificationToken: ["identifier", "token", "expires"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "emailVerified", "image", "_count", "_min", "_max"],
  AggregateExternalService: ["_count", "_min", "_max"],
  ExternalServiceGroupBy: ["id", "type", "authType", "_count", "_min", "_max"],
  AggregateExternalServiceCredential: ["_count", "_min", "_max"],
  ExternalServiceCredentialGroupBy: ["id", "externalServiceId", "username", "password", "apiToken", "userId", "_count", "_min", "_max"],
  AggregateBookmark: ["_count", "_min", "_max"],
  BookmarkGroupBy: ["id", "title", "description", "url", "userId", "createdAt", "_count", "_min", "_max"],
  AggregateTag: ["_count", "_min", "_max"],
  TagGroupBy: ["id", "value", "_count", "_min", "_max"],
  AggregateUserTagInternal: ["_count", "_min", "_max"],
  UserTagInternalGroupBy: ["userId", "tagId", "tagColor", "_count", "_min", "_max"],
  AggregateBookmarkTag: ["_count", "_min", "_max"],
  BookmarkTagGroupBy: ["bookmarkId", "tagId", "userId", "empty", "_count", "_min", "_max"],
  AggregateCollection: ["_count", "_min", "_max"],
  CollectionGroupBy: ["id", "name", "description", "public", "createdAt", "userId", "_count", "_min", "_max"],
  AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
  AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSession: ["_count", "_min", "_max"],
  SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
  AggregateVerificationToken: ["_count", "_min", "_max"],
  VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["bookmarks", "collections", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "_all"],
  UserMinAggregate: ["id", "name", "email", "emailVerified", "image"],
  UserMaxAggregate: ["id", "name", "email", "emailVerified", "image"],
  ExternalServiceCount: ["ExternalServiceCredential"],
  ExternalServiceCountAggregate: ["id", "type", "authType", "_all"],
  ExternalServiceMinAggregate: ["id", "type", "authType"],
  ExternalServiceMaxAggregate: ["id", "type", "authType"],
  ExternalServiceCredentialCountAggregate: ["id", "externalServiceId", "username", "password", "apiToken", "userId", "_all"],
  ExternalServiceCredentialMinAggregate: ["id", "externalServiceId", "username", "password", "apiToken", "userId"],
  ExternalServiceCredentialMaxAggregate: ["id", "externalServiceId", "username", "password", "apiToken", "userId"],
  BookmarkCount: ["users", "BookmarkTag", "collections"],
  BookmarkCountAggregate: ["id", "title", "description", "url", "userId", "createdAt", "_all"],
  BookmarkMinAggregate: ["id", "title", "description", "url", "userId", "createdAt"],
  BookmarkMaxAggregate: ["id", "title", "description", "url", "userId", "createdAt"],
  TagCount: ["UserTag"],
  TagCountAggregate: ["id", "value", "_all"],
  TagMinAggregate: ["id", "value"],
  TagMaxAggregate: ["id", "value"],
  UserTagInternalCount: ["BookmarkTag"],
  UserTagInternalCountAggregate: ["userId", "tagId", "tagColor", "_all"],
  UserTagInternalMinAggregate: ["userId", "tagId", "tagColor"],
  UserTagInternalMaxAggregate: ["userId", "tagId", "tagColor"],
  BookmarkTagCountAggregate: ["bookmarkId", "tagId", "userId", "empty", "_all"],
  BookmarkTagMinAggregate: ["bookmarkId", "tagId", "userId", "empty"],
  BookmarkTagMaxAggregate: ["bookmarkId", "tagId", "userId", "empty"],
  CollectionCount: ["bookmarks"],
  CollectionCountAggregate: ["id", "name", "description", "public", "createdAt", "userId", "_all"],
  CollectionMinAggregate: ["id", "name", "description", "public", "createdAt", "userId"],
  CollectionMaxAggregate: ["id", "name", "description", "public", "createdAt", "userId"],
  AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
  AccountAvgAggregate: ["expires_at"],
  AccountSumAggregate: ["expires_at"],
  AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
  SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
  SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
  VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
  VerificationTokenMinAggregate: ["identifier", "token", "expires"],
  VerificationTokenMaxAggregate: ["identifier", "token", "expires"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image"],
  ExternalServiceWhereInput: ["AND", "OR", "NOT", "id", "type", "authType", "ExternalServiceCredential"],
  ExternalServiceOrderByWithRelationInput: ["id", "type", "authType", "ExternalServiceCredential"],
  ExternalServiceWhereUniqueInput: ["id", "type"],
  ExternalServiceOrderByWithAggregationInput: ["id", "type", "authType", "_count", "_max", "_min"],
  ExternalServiceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "type", "authType"],
  ExternalServiceCredentialWhereInput: ["AND", "OR", "NOT", "id", "externalServiceId", "username", "password", "apiToken", "userId", "externalService", "user"],
  ExternalServiceCredentialOrderByWithRelationInput: ["id", "externalServiceId", "username", "password", "apiToken", "userId", "externalService", "user"],
  ExternalServiceCredentialWhereUniqueInput: ["id"],
  ExternalServiceCredentialOrderByWithAggregationInput: ["id", "externalServiceId", "username", "password", "apiToken", "userId", "_count", "_max", "_min"],
  ExternalServiceCredentialScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "externalServiceId", "username", "password", "apiToken", "userId"],
  BookmarkWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "url", "users", "userId", "createdAt", "BookmarkTag", "collections"],
  BookmarkOrderByWithRelationInput: ["id", "title", "description", "url", "users", "userId", "createdAt", "BookmarkTag", "collections"],
  BookmarkWhereUniqueInput: ["id"],
  BookmarkOrderByWithAggregationInput: ["id", "title", "description", "url", "userId", "createdAt", "_count", "_max", "_min"],
  BookmarkScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "url", "userId", "createdAt"],
  TagWhereInput: ["AND", "OR", "NOT", "id", "value", "UserTag"],
  TagOrderByWithRelationInput: ["id", "value", "UserTag"],
  TagWhereUniqueInput: ["id", "value"],
  TagOrderByWithAggregationInput: ["id", "value", "_count", "_max", "_min"],
  TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "value"],
  UserTagInternalWhereInput: ["AND", "OR", "NOT", "user", "userId", "tag", "tagId", "tagColor", "BookmarkTag"],
  UserTagInternalOrderByWithRelationInput: ["user", "userId", "tag", "tagId", "tagColor", "BookmarkTag"],
  UserTagInternalWhereUniqueInput: ["userId_tagId"],
  UserTagInternalOrderByWithAggregationInput: ["userId", "tagId", "tagColor", "_count", "_max", "_min"],
  UserTagInternalScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "tagId", "tagColor"],
  BookmarkTagWhereInput: ["AND", "OR", "NOT", "bookmarkId", "tagId", "userId", "empty", "bookmark", "user", "userTag"],
  BookmarkTagOrderByWithRelationInput: ["bookmarkId", "tagId", "userId", "empty", "bookmark", "user", "userTag"],
  BookmarkTagWhereUniqueInput: ["bookmarkId_tagId"],
  BookmarkTagOrderByWithAggregationInput: ["bookmarkId", "tagId", "userId", "empty", "_count", "_max", "_min"],
  BookmarkTagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "bookmarkId", "tagId", "userId", "empty"],
  CollectionWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "public", "createdAt", "userId", "bookmarks", "User"],
  CollectionOrderByWithRelationInput: ["id", "name", "description", "public", "createdAt", "userId", "bookmarks", "User"],
  CollectionWhereUniqueInput: ["id"],
  CollectionOrderByWithAggregationInput: ["id", "name", "description", "public", "createdAt", "userId", "_count", "_max", "_min"],
  CollectionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "public", "createdAt", "userId"],
  AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
  AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
  AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
  SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
  SessionWhereUniqueInput: ["id", "sessionToken"],
  SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
  SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
  VerificationTokenWhereUniqueInput: ["token", "identifier_token"],
  VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
  VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  UserCreateInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserCreateManyInput: ["id", "name", "email", "emailVerified", "image"],
  UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image"],
  ExternalServiceCreateInput: ["id", "type", "authType", "ExternalServiceCredential"],
  ExternalServiceUpdateInput: ["id", "type", "authType", "ExternalServiceCredential"],
  ExternalServiceCreateManyInput: ["id", "type", "authType"],
  ExternalServiceUpdateManyMutationInput: ["id", "type", "authType"],
  ExternalServiceCredentialCreateInput: ["id", "username", "password", "apiToken", "externalService", "user"],
  ExternalServiceCredentialUpdateInput: ["id", "username", "password", "apiToken", "externalService", "user"],
  ExternalServiceCredentialCreateManyInput: ["id", "externalServiceId", "username", "password", "apiToken", "userId"],
  ExternalServiceCredentialUpdateManyMutationInput: ["id", "username", "password", "apiToken"],
  BookmarkCreateInput: ["id", "title", "description", "url", "users", "userId", "createdAt", "BookmarkTag", "collections"],
  BookmarkUpdateInput: ["id", "title", "description", "url", "users", "userId", "createdAt", "BookmarkTag", "collections"],
  BookmarkCreateManyInput: ["id", "title", "description", "url", "userId", "createdAt"],
  BookmarkUpdateManyMutationInput: ["id", "title", "description", "url", "userId", "createdAt"],
  TagCreateInput: ["id", "value", "UserTag"],
  TagUpdateInput: ["id", "value", "UserTag"],
  TagCreateManyInput: ["id", "value"],
  TagUpdateManyMutationInput: ["id", "value"],
  UserTagInternalCreateInput: ["user", "tag", "tagColor", "BookmarkTag"],
  UserTagInternalUpdateInput: ["user", "tag", "tagColor", "BookmarkTag"],
  UserTagInternalCreateManyInput: ["userId", "tagId", "tagColor"],
  UserTagInternalUpdateManyMutationInput: ["tagColor"],
  BookmarkTagCreateInput: ["empty", "bookmark", "user", "userTag"],
  BookmarkTagUpdateInput: ["empty", "bookmark", "user", "userTag"],
  BookmarkTagCreateManyInput: ["bookmarkId", "tagId", "userId", "empty"],
  BookmarkTagUpdateManyMutationInput: ["empty"],
  CollectionCreateInput: ["id", "name", "description", "public", "createdAt", "bookmarks", "User"],
  CollectionUpdateInput: ["id", "name", "description", "public", "createdAt", "bookmarks", "User"],
  CollectionCreateManyInput: ["id", "name", "description", "public", "createdAt", "userId"],
  CollectionUpdateManyMutationInput: ["id", "name", "description", "public", "createdAt"],
  AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateInput: ["id", "sessionToken", "expires", "user"],
  SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
  SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
  SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
  VerificationTokenCreateInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateInput: ["identifier", "token", "expires"],
  VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BookmarkListRelationFilter: ["every", "some", "none"],
  CollectionListRelationFilter: ["every", "some", "none"],
  AccountListRelationFilter: ["every", "some", "none"],
  SessionListRelationFilter: ["every", "some", "none"],
  UserTagInternalListRelationFilter: ["every", "some", "none"],
  ExternalServiceCredentialListRelationFilter: ["every", "some", "none"],
  BookmarkTagListRelationFilter: ["every", "some", "none"],
  BookmarkOrderByRelationAggregateInput: ["_count"],
  CollectionOrderByRelationAggregateInput: ["_count"],
  AccountOrderByRelationAggregateInput: ["_count"],
  SessionOrderByRelationAggregateInput: ["_count"],
  UserTagInternalOrderByRelationAggregateInput: ["_count"],
  ExternalServiceCredentialOrderByRelationAggregateInput: ["_count"],
  BookmarkTagOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumExternalServiceTypeFilter: ["equals", "in", "notIn", "not"],
  EnumExternalServiceAuthTypeFilter: ["equals", "in", "notIn", "not"],
  ExternalServiceCountOrderByAggregateInput: ["id", "type", "authType"],
  ExternalServiceMaxOrderByAggregateInput: ["id", "type", "authType"],
  ExternalServiceMinOrderByAggregateInput: ["id", "type", "authType"],
  EnumExternalServiceTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumExternalServiceAuthTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ExternalServiceRelationFilter: ["is", "isNot"],
  UserRelationFilter: ["is", "isNot"],
  ExternalServiceCredentialCountOrderByAggregateInput: ["id", "externalServiceId", "username", "password", "apiToken", "userId"],
  ExternalServiceCredentialMaxOrderByAggregateInput: ["id", "externalServiceId", "username", "password", "apiToken", "userId"],
  ExternalServiceCredentialMinOrderByAggregateInput: ["id", "externalServiceId", "username", "password", "apiToken", "userId"],
  UserListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserOrderByRelationAggregateInput: ["_count"],
  BookmarkCountOrderByAggregateInput: ["id", "title", "description", "url", "userId", "createdAt"],
  BookmarkMaxOrderByAggregateInput: ["id", "title", "description", "url", "userId", "createdAt"],
  BookmarkMinOrderByAggregateInput: ["id", "title", "description", "url", "userId", "createdAt"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  TagCountOrderByAggregateInput: ["id", "value"],
  TagMaxOrderByAggregateInput: ["id", "value"],
  TagMinOrderByAggregateInput: ["id", "value"],
  TagRelationFilter: ["is", "isNot"],
  UserTagInternalUserIdTagIdCompoundUniqueInput: ["userId", "tagId"],
  UserTagInternalCountOrderByAggregateInput: ["userId", "tagId", "tagColor"],
  UserTagInternalMaxOrderByAggregateInput: ["userId", "tagId", "tagColor"],
  UserTagInternalMinOrderByAggregateInput: ["userId", "tagId", "tagColor"],
  BookmarkRelationFilter: ["is", "isNot"],
  UserTagInternalRelationFilter: ["is", "isNot"],
  BookmarkTagBookmarkIdTagIdCompoundUniqueInput: ["bookmarkId", "tagId"],
  BookmarkTagCountOrderByAggregateInput: ["bookmarkId", "tagId", "userId", "empty"],
  BookmarkTagMaxOrderByAggregateInput: ["bookmarkId", "tagId", "userId", "empty"],
  BookmarkTagMinOrderByAggregateInput: ["bookmarkId", "tagId", "userId", "empty"],
  BoolFilter: ["equals", "not"],
  CollectionCountOrderByAggregateInput: ["id", "name", "description", "public", "createdAt", "userId"],
  CollectionMaxOrderByAggregateInput: ["id", "name", "description", "public", "createdAt", "userId"],
  CollectionMinOrderByAggregateInput: ["id", "name", "description", "public", "createdAt", "userId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
  AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountAvgOrderByAggregateInput: ["expires_at"],
  AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountSumOrderByAggregateInput: ["expires_at"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
  VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
  BookmarkCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  CollectionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserTagInternalCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ExternalServiceCredentialCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookmarkTagCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  BookmarkUpdateManyWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CollectionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserTagInternalUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExternalServiceCredentialUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BookmarkTagUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExternalServiceCredentialCreateNestedManyWithoutExternalServiceInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumExternalServiceTypeFieldUpdateOperationsInput: ["set"],
  EnumExternalServiceAuthTypeFieldUpdateOperationsInput: ["set"],
  ExternalServiceCredentialUpdateManyWithoutExternalServiceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExternalServiceCreateNestedOneWithoutExternalServiceCredentialInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutExternalServicesInput: ["create", "connectOrCreate", "connect"],
  ExternalServiceUpdateOneRequiredWithoutExternalServiceCredentialNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutExternalServicesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedManyWithoutBookmarksInput: ["create", "connectOrCreate", "connect"],
  BookmarkTagCreateNestedManyWithoutBookmarkInput: ["create", "connectOrCreate", "createMany", "connect"],
  CollectionCreateNestedManyWithoutBookmarksInput: ["create", "connectOrCreate", "connect"],
  UserUpdateManyWithoutBookmarksNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BookmarkTagUpdateManyWithoutBookmarkNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CollectionUpdateManyWithoutBookmarksNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserTagInternalCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserTagInternalUpdateManyWithoutTagNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  TagCreateNestedOneWithoutUserTagInput: ["create", "connectOrCreate", "connect"],
  BookmarkTagCreateNestedManyWithoutUserTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutTagsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TagUpdateOneRequiredWithoutUserTagNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BookmarkTagUpdateManyWithoutUserTagNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BookmarkCreateNestedOneWithoutBookmarkTagInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutBookmarkTagInput: ["create", "connectOrCreate", "connect"],
  UserTagInternalCreateNestedOneWithoutBookmarkTagInput: ["create", "connectOrCreate", "connect"],
  BookmarkUpdateOneRequiredWithoutBookmarkTagNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutBookmarkTagNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserTagInternalUpdateOneRequiredWithoutBookmarkTagNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BookmarkCreateNestedManyWithoutCollectionsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutCollectionsInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  BookmarkUpdateManyWithoutCollectionsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateOneWithoutCollectionsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumExternalServiceTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumExternalServiceAuthTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumExternalServiceTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumExternalServiceAuthTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BookmarkCreateWithoutUsersInput: ["id", "title", "description", "url", "userId", "createdAt", "BookmarkTag", "collections"],
  BookmarkCreateOrConnectWithoutUsersInput: ["where", "create"],
  CollectionCreateWithoutUserInput: ["id", "name", "description", "public", "createdAt", "bookmarks"],
  CollectionCreateOrConnectWithoutUserInput: ["where", "create"],
  CollectionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountCreateOrConnectWithoutUserInput: ["where", "create"],
  AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
  SessionCreateOrConnectWithoutUserInput: ["where", "create"],
  SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  UserTagInternalCreateWithoutUserInput: ["tag", "tagColor", "BookmarkTag"],
  UserTagInternalCreateOrConnectWithoutUserInput: ["where", "create"],
  UserTagInternalCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ExternalServiceCredentialCreateWithoutUserInput: ["id", "username", "password", "apiToken", "externalService"],
  ExternalServiceCredentialCreateOrConnectWithoutUserInput: ["where", "create"],
  ExternalServiceCredentialCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  BookmarkTagCreateWithoutUserInput: ["empty", "bookmark", "userTag"],
  BookmarkTagCreateOrConnectWithoutUserInput: ["where", "create"],
  BookmarkTagCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  BookmarkUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  BookmarkUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  BookmarkUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  BookmarkScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "url", "userId", "createdAt"],
  CollectionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CollectionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CollectionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  CollectionScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "public", "createdAt", "userId"],
  AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  UserTagInternalUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UserTagInternalUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UserTagInternalUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserTagInternalScalarWhereInput: ["AND", "OR", "NOT", "userId", "tagId", "tagColor"],
  ExternalServiceCredentialUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ExternalServiceCredentialUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ExternalServiceCredentialUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ExternalServiceCredentialScalarWhereInput: ["AND", "OR", "NOT", "id", "externalServiceId", "username", "password", "apiToken", "userId"],
  BookmarkTagUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  BookmarkTagUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  BookmarkTagUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  BookmarkTagScalarWhereInput: ["AND", "OR", "NOT", "bookmarkId", "tagId", "userId", "empty"],
  ExternalServiceCredentialCreateWithoutExternalServiceInput: ["id", "username", "password", "apiToken", "user"],
  ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput: ["where", "create"],
  ExternalServiceCredentialCreateManyExternalServiceInputEnvelope: ["data", "skipDuplicates"],
  ExternalServiceCredentialUpsertWithWhereUniqueWithoutExternalServiceInput: ["where", "update", "create"],
  ExternalServiceCredentialUpdateWithWhereUniqueWithoutExternalServiceInput: ["where", "data"],
  ExternalServiceCredentialUpdateManyWithWhereWithoutExternalServiceInput: ["where", "data"],
  ExternalServiceCreateWithoutExternalServiceCredentialInput: ["id", "type", "authType"],
  ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput: ["where", "create"],
  UserCreateWithoutExternalServicesInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "tags", "BookmarkTag"],
  UserCreateOrConnectWithoutExternalServicesInput: ["where", "create"],
  ExternalServiceUpsertWithoutExternalServiceCredentialInput: ["update", "create"],
  ExternalServiceUpdateWithoutExternalServiceCredentialInput: ["id", "type", "authType"],
  UserUpsertWithoutExternalServicesInput: ["update", "create"],
  UserUpdateWithoutExternalServicesInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "tags", "BookmarkTag"],
  UserCreateWithoutBookmarksInput: ["id", "name", "email", "emailVerified", "image", "collections", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserCreateOrConnectWithoutBookmarksInput: ["where", "create"],
  BookmarkTagCreateWithoutBookmarkInput: ["empty", "user", "userTag"],
  BookmarkTagCreateOrConnectWithoutBookmarkInput: ["where", "create"],
  BookmarkTagCreateManyBookmarkInputEnvelope: ["data", "skipDuplicates"],
  CollectionCreateWithoutBookmarksInput: ["id", "name", "description", "public", "createdAt", "User"],
  CollectionCreateOrConnectWithoutBookmarksInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutBookmarksInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutBookmarksInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutBookmarksInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image"],
  BookmarkTagUpsertWithWhereUniqueWithoutBookmarkInput: ["where", "update", "create"],
  BookmarkTagUpdateWithWhereUniqueWithoutBookmarkInput: ["where", "data"],
  BookmarkTagUpdateManyWithWhereWithoutBookmarkInput: ["where", "data"],
  CollectionUpsertWithWhereUniqueWithoutBookmarksInput: ["where", "update", "create"],
  CollectionUpdateWithWhereUniqueWithoutBookmarksInput: ["where", "data"],
  CollectionUpdateManyWithWhereWithoutBookmarksInput: ["where", "data"],
  UserTagInternalCreateWithoutTagInput: ["user", "tagColor", "BookmarkTag"],
  UserTagInternalCreateOrConnectWithoutTagInput: ["where", "create"],
  UserTagInternalCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  UserTagInternalUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  UserTagInternalUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  UserTagInternalUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  UserCreateWithoutTagsInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "externalServices", "BookmarkTag"],
  UserCreateOrConnectWithoutTagsInput: ["where", "create"],
  TagCreateWithoutUserTagInput: ["id", "value"],
  TagCreateOrConnectWithoutUserTagInput: ["where", "create"],
  BookmarkTagCreateWithoutUserTagInput: ["empty", "bookmark", "user"],
  BookmarkTagCreateOrConnectWithoutUserTagInput: ["where", "create"],
  BookmarkTagCreateManyUserTagInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutTagsInput: ["update", "create"],
  UserUpdateWithoutTagsInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "externalServices", "BookmarkTag"],
  TagUpsertWithoutUserTagInput: ["update", "create"],
  TagUpdateWithoutUserTagInput: ["id", "value"],
  BookmarkTagUpsertWithWhereUniqueWithoutUserTagInput: ["where", "update", "create"],
  BookmarkTagUpdateWithWhereUniqueWithoutUserTagInput: ["where", "data"],
  BookmarkTagUpdateManyWithWhereWithoutUserTagInput: ["where", "data"],
  BookmarkCreateWithoutBookmarkTagInput: ["id", "title", "description", "url", "users", "userId", "createdAt", "collections"],
  BookmarkCreateOrConnectWithoutBookmarkTagInput: ["where", "create"],
  UserCreateWithoutBookmarkTagInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "tags", "externalServices"],
  UserCreateOrConnectWithoutBookmarkTagInput: ["where", "create"],
  UserTagInternalCreateWithoutBookmarkTagInput: ["user", "tag", "tagColor"],
  UserTagInternalCreateOrConnectWithoutBookmarkTagInput: ["where", "create"],
  BookmarkUpsertWithoutBookmarkTagInput: ["update", "create"],
  BookmarkUpdateWithoutBookmarkTagInput: ["id", "title", "description", "url", "users", "userId", "createdAt", "collections"],
  UserUpsertWithoutBookmarkTagInput: ["update", "create"],
  UserUpdateWithoutBookmarkTagInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "sessions", "tags", "externalServices"],
  UserTagInternalUpsertWithoutBookmarkTagInput: ["update", "create"],
  UserTagInternalUpdateWithoutBookmarkTagInput: ["user", "tag", "tagColor"],
  BookmarkCreateWithoutCollectionsInput: ["id", "title", "description", "url", "users", "userId", "createdAt", "BookmarkTag"],
  BookmarkCreateOrConnectWithoutCollectionsInput: ["where", "create"],
  UserCreateWithoutCollectionsInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserCreateOrConnectWithoutCollectionsInput: ["where", "create"],
  BookmarkUpsertWithWhereUniqueWithoutCollectionsInput: ["where", "update", "create"],
  BookmarkUpdateWithWhereUniqueWithoutCollectionsInput: ["where", "data"],
  BookmarkUpdateManyWithWhereWithoutCollectionsInput: ["where", "data"],
  UserUpsertWithoutCollectionsInput: ["update", "create"],
  UserUpdateWithoutCollectionsInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
  UserUpsertWithoutAccountsInput: ["update", "create"],
  UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "sessions", "tags", "externalServices", "BookmarkTag"],
  UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "tags", "externalServices", "BookmarkTag"],
  UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
  UserUpsertWithoutSessionsInput: ["update", "create"],
  UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "bookmarks", "collections", "accounts", "tags", "externalServices", "BookmarkTag"],
  CollectionCreateManyUserInput: ["id", "name", "description", "public", "createdAt"],
  AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
  UserTagInternalCreateManyUserInput: ["tagId", "tagColor"],
  ExternalServiceCredentialCreateManyUserInput: ["id", "externalServiceId", "username", "password", "apiToken"],
  BookmarkTagCreateManyUserInput: ["bookmarkId", "tagId", "empty"],
  BookmarkUpdateWithoutUsersInput: ["id", "title", "description", "url", "userId", "createdAt", "BookmarkTag", "collections"],
  CollectionUpdateWithoutUserInput: ["id", "name", "description", "public", "createdAt", "bookmarks"],
  AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
  UserTagInternalUpdateWithoutUserInput: ["tag", "tagColor", "BookmarkTag"],
  ExternalServiceCredentialUpdateWithoutUserInput: ["id", "username", "password", "apiToken", "externalService"],
  BookmarkTagUpdateWithoutUserInput: ["empty", "bookmark", "userTag"],
  ExternalServiceCredentialCreateManyExternalServiceInput: ["id", "username", "password", "apiToken", "userId"],
  ExternalServiceCredentialUpdateWithoutExternalServiceInput: ["id", "username", "password", "apiToken", "user"],
  BookmarkTagCreateManyBookmarkInput: ["tagId", "userId", "empty"],
  UserUpdateWithoutBookmarksInput: ["id", "name", "email", "emailVerified", "image", "collections", "accounts", "sessions", "tags", "externalServices", "BookmarkTag"],
  BookmarkTagUpdateWithoutBookmarkInput: ["empty", "user", "userTag"],
  CollectionUpdateWithoutBookmarksInput: ["id", "name", "description", "public", "createdAt", "User"],
  UserTagInternalCreateManyTagInput: ["userId", "tagColor"],
  UserTagInternalUpdateWithoutTagInput: ["user", "tagColor", "BookmarkTag"],
  BookmarkTagCreateManyUserTagInput: ["bookmarkId", "empty"],
  BookmarkTagUpdateWithoutUserTagInput: ["empty", "bookmark", "user"],
  BookmarkUpdateWithoutCollectionsInput: ["id", "title", "description", "url", "users", "userId", "createdAt", "BookmarkTag"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}
