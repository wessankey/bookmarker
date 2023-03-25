/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  ExpiresAt = 'expires_at',
  Id = 'id',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type ActivateApiTokenServiceInput = {
  apiToken: Scalars['String'];
  externalService: ExternalServiceType;
};

export type ActivateUsernameAndPasswordServiceInput = {
  externalService: ExternalServiceType;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AddBookmarkToCollectionInput = {
  bookmarkId: Scalars['String'];
  collectionId: Scalars['String'];
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateBookmark = {
  __typename?: 'AggregateBookmark';
  _count?: Maybe<BookmarkCountAggregate>;
  _max?: Maybe<BookmarkMaxAggregate>;
  _min?: Maybe<BookmarkMinAggregate>;
};

export type AggregateCollection = {
  __typename?: 'AggregateCollection';
  _count?: Maybe<CollectionCountAggregate>;
  _max?: Maybe<CollectionMaxAggregate>;
  _min?: Maybe<CollectionMinAggregate>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  User: User;
  _count?: Maybe<BookmarkCount>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['String'];
};


export type BookmarkCollectionsArgs = {
  cursor?: InputMaybe<CollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type BookmarkTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type BookmarkCount = {
  __typename?: 'BookmarkCount';
  collections: Scalars['Int'];
  tags: Scalars['Int'];
};

export type BookmarkCountAggregate = {
  __typename?: 'BookmarkCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  url: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookmarkCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookmarkCreateInput = {
  User: UserCreateNestedOneWithoutBookmarksInput;
  collections?: InputMaybe<CollectionCreateNestedManyWithoutBookmarksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutBookmarkInput>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type BookmarkCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type BookmarkCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type BookmarkCreateManyUserInputEnvelope = {
  data: Array<BookmarkCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookmarkCreateNestedManyWithoutCollectionsInput = {
  connect?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkCreateOrConnectWithoutCollectionsInput>>;
  create?: InputMaybe<Array<BookmarkCreateWithoutCollectionsInput>>;
};

export type BookmarkCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookmarkCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookmarkCreateManyUserInputEnvelope>;
};

export type BookmarkCreateNestedOneWithoutTagsInput = {
  connect?: InputMaybe<BookmarkWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookmarkCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<BookmarkCreateWithoutTagsInput>;
};

export type BookmarkCreateOrConnectWithoutCollectionsInput = {
  create: BookmarkCreateWithoutCollectionsInput;
  where: BookmarkWhereUniqueInput;
};

export type BookmarkCreateOrConnectWithoutTagsInput = {
  create: BookmarkCreateWithoutTagsInput;
  where: BookmarkWhereUniqueInput;
};

export type BookmarkCreateOrConnectWithoutUserInput = {
  create: BookmarkCreateWithoutUserInput;
  where: BookmarkWhereUniqueInput;
};

export type BookmarkCreateWithoutCollectionsInput = {
  User: UserCreateNestedOneWithoutBookmarksInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutBookmarkInput>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type BookmarkCreateWithoutTagsInput = {
  User: UserCreateNestedOneWithoutBookmarksInput;
  collections?: InputMaybe<CollectionCreateNestedManyWithoutBookmarksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type BookmarkCreateWithoutUserInput = {
  collections?: InputMaybe<CollectionCreateNestedManyWithoutBookmarksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutBookmarkInput>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type BookmarkCustom = {
  __typename?: 'BookmarkCustom';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type BookmarkGroupBy = {
  __typename?: 'BookmarkGroupBy';
  _count?: Maybe<BookmarkCountAggregate>;
  _max?: Maybe<BookmarkMaxAggregate>;
  _min?: Maybe<BookmarkMinAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type BookmarkListRelationFilter = {
  every?: InputMaybe<BookmarkWhereInput>;
  none?: InputMaybe<BookmarkWhereInput>;
  some?: InputMaybe<BookmarkWhereInput>;
};

export type BookmarkMaxAggregate = {
  __typename?: 'BookmarkMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookmarkMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookmarkMinAggregate = {
  __typename?: 'BookmarkMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookmarkMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookmarkOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookmarkOrderByWithAggregationInput = {
  _count?: InputMaybe<BookmarkCountOrderByAggregateInput>;
  _max?: InputMaybe<BookmarkMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookmarkMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookmarkOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>;
  collections?: InputMaybe<CollectionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookmarkRelationFilter = {
  is?: InputMaybe<BookmarkWhereInput>;
  isNot?: InputMaybe<BookmarkWhereInput>;
};

export enum BookmarkScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Title = 'title',
  Url = 'url',
  UserId = 'userId'
}

export type BookmarkScalarWhereInput = {
  AND?: InputMaybe<Array<BookmarkScalarWhereInput>>;
  NOT?: InputMaybe<Array<BookmarkScalarWhereInput>>;
  OR?: InputMaybe<Array<BookmarkScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookmarkScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BookmarkScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BookmarkScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BookmarkScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type BookmarkUpdateInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutBookmarksNestedInput>;
  collections?: InputMaybe<CollectionUpdateManyWithoutBookmarksNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutBookmarkNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookmarkUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookmarkUpdateManyWithWhereWithoutCollectionsInput = {
  data: BookmarkUpdateManyMutationInput;
  where: BookmarkScalarWhereInput;
};

export type BookmarkUpdateManyWithWhereWithoutUserInput = {
  data: BookmarkUpdateManyMutationInput;
  where: BookmarkScalarWhereInput;
};

export type BookmarkUpdateManyWithoutCollectionsNestedInput = {
  connect?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkCreateOrConnectWithoutCollectionsInput>>;
  create?: InputMaybe<Array<BookmarkCreateWithoutCollectionsInput>>;
  delete?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookmarkScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  set?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  update?: InputMaybe<Array<BookmarkUpdateWithWhereUniqueWithoutCollectionsInput>>;
  updateMany?: InputMaybe<Array<BookmarkUpdateManyWithWhereWithoutCollectionsInput>>;
  upsert?: InputMaybe<Array<BookmarkUpsertWithWhereUniqueWithoutCollectionsInput>>;
};

export type BookmarkUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookmarkCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookmarkCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookmarkScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  set?: InputMaybe<Array<BookmarkWhereUniqueInput>>;
  update?: InputMaybe<Array<BookmarkUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<BookmarkUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<BookmarkUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BookmarkUpdateOneWithoutTagsNestedInput = {
  connect?: InputMaybe<BookmarkWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookmarkCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<BookmarkCreateWithoutTagsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<BookmarkUpdateWithoutTagsInput>;
  upsert?: InputMaybe<BookmarkUpsertWithoutTagsInput>;
};

export type BookmarkUpdateWithWhereUniqueWithoutCollectionsInput = {
  data: BookmarkUpdateWithoutCollectionsInput;
  where: BookmarkWhereUniqueInput;
};

export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
  data: BookmarkUpdateWithoutUserInput;
  where: BookmarkWhereUniqueInput;
};

export type BookmarkUpdateWithoutCollectionsInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutBookmarksNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutBookmarkNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookmarkUpdateWithoutTagsInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutBookmarksNestedInput>;
  collections?: InputMaybe<CollectionUpdateManyWithoutBookmarksNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookmarkUpdateWithoutUserInput = {
  collections?: InputMaybe<CollectionUpdateManyWithoutBookmarksNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutBookmarkNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookmarkUpsertWithWhereUniqueWithoutCollectionsInput = {
  create: BookmarkCreateWithoutCollectionsInput;
  update: BookmarkUpdateWithoutCollectionsInput;
  where: BookmarkWhereUniqueInput;
};

export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
  create: BookmarkCreateWithoutUserInput;
  update: BookmarkUpdateWithoutUserInput;
  where: BookmarkWhereUniqueInput;
};

export type BookmarkUpsertWithoutTagsInput = {
  create: BookmarkCreateWithoutTagsInput;
  update: BookmarkUpdateWithoutTagsInput;
};

export type BookmarkWhereInput = {
  AND?: InputMaybe<Array<BookmarkWhereInput>>;
  NOT?: InputMaybe<Array<BookmarkWhereInput>>;
  OR?: InputMaybe<Array<BookmarkWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  collections?: InputMaybe<CollectionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookmarkWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Collection = {
  __typename?: 'Collection';
  _count?: Maybe<CollectionCount>;
  bookmarks: Array<BookmarkCustom>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  public: Scalars['Boolean'];
  userId?: Maybe<Scalars['String']>;
};

export type CollectionCount = {
  __typename?: 'CollectionCount';
  bookmarks: Scalars['Int'];
};

export type CollectionCountAggregate = {
  __typename?: 'CollectionCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  public: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CollectionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CollectionCreateInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutCollectionsInput>;
  bookmarks?: InputMaybe<BookmarkCreateNestedManyWithoutCollectionsInput>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  public: Scalars['Boolean'];
};

export type CollectionCreateManyInput = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  public: Scalars['Boolean'];
  userId?: InputMaybe<Scalars['String']>;
};

export type CollectionCreateManyUserInput = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  public: Scalars['Boolean'];
};

export type CollectionCreateManyUserInputEnvelope = {
  data: Array<CollectionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CollectionCreateNestedManyWithoutBookmarksInput = {
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionCreateOrConnectWithoutBookmarksInput>>;
  create?: InputMaybe<Array<CollectionCreateWithoutBookmarksInput>>;
};

export type CollectionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CollectionCreateWithoutUserInput>>;
  createMany?: InputMaybe<CollectionCreateManyUserInputEnvelope>;
};

export type CollectionCreateOrConnectWithoutBookmarksInput = {
  create: CollectionCreateWithoutBookmarksInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionCreateOrConnectWithoutUserInput = {
  create: CollectionCreateWithoutUserInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionCreateWithoutBookmarksInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutCollectionsInput>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  public: Scalars['Boolean'];
};

export type CollectionCreateWithoutUserInput = {
  bookmarks?: InputMaybe<BookmarkCreateNestedManyWithoutCollectionsInput>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  public: Scalars['Boolean'];
};

export type CollectionGroupBy = {
  __typename?: 'CollectionGroupBy';
  _count?: Maybe<CollectionCountAggregate>;
  _max?: Maybe<CollectionMaxAggregate>;
  _min?: Maybe<CollectionMinAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  public: Scalars['Boolean'];
  userId?: Maybe<Scalars['String']>;
};

export type CollectionListRelationFilter = {
  every?: InputMaybe<CollectionWhereInput>;
  none?: InputMaybe<CollectionWhereInput>;
  some?: InputMaybe<CollectionWhereInput>;
};

export type CollectionMaxAggregate = {
  __typename?: 'CollectionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['String']>;
};

export type CollectionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CollectionMinAggregate = {
  __typename?: 'CollectionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['String']>;
};

export type CollectionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CollectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CollectionOrderByWithAggregationInput = {
  _count?: InputMaybe<CollectionCountOrderByAggregateInput>;
  _max?: InputMaybe<CollectionMaxOrderByAggregateInput>;
  _min?: InputMaybe<CollectionMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CollectionOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>;
  bookmarks?: InputMaybe<BookmarkOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum CollectionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Public = 'public',
  UserId = 'userId'
}

export type CollectionScalarWhereInput = {
  AND?: InputMaybe<Array<CollectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<CollectionScalarWhereInput>>;
  OR?: InputMaybe<Array<CollectionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  public?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type CollectionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CollectionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CollectionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CollectionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  public?: InputMaybe<BoolWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type CollectionUpdateInput = {
  User?: InputMaybe<UserUpdateOneWithoutCollectionsNestedInput>;
  bookmarks?: InputMaybe<BookmarkUpdateManyWithoutCollectionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CollectionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CollectionUpdateManyWithWhereWithoutBookmarksInput = {
  data: CollectionUpdateManyMutationInput;
  where: CollectionScalarWhereInput;
};

export type CollectionUpdateManyWithWhereWithoutUserInput = {
  data: CollectionUpdateManyMutationInput;
  where: CollectionScalarWhereInput;
};

export type CollectionUpdateManyWithoutBookmarksNestedInput = {
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionCreateOrConnectWithoutBookmarksInput>>;
  create?: InputMaybe<Array<CollectionCreateWithoutBookmarksInput>>;
  delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CollectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  set?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  update?: InputMaybe<Array<CollectionUpdateWithWhereUniqueWithoutBookmarksInput>>;
  updateMany?: InputMaybe<Array<CollectionUpdateManyWithWhereWithoutBookmarksInput>>;
  upsert?: InputMaybe<Array<CollectionUpsertWithWhereUniqueWithoutBookmarksInput>>;
};

export type CollectionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CollectionCreateWithoutUserInput>>;
  createMany?: InputMaybe<CollectionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CollectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  set?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  update?: InputMaybe<Array<CollectionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CollectionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CollectionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CollectionUpdateWithWhereUniqueWithoutBookmarksInput = {
  data: CollectionUpdateWithoutBookmarksInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
  data: CollectionUpdateWithoutUserInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionUpdateWithoutBookmarksInput = {
  User?: InputMaybe<UserUpdateOneWithoutCollectionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CollectionUpdateWithoutUserInput = {
  bookmarks?: InputMaybe<BookmarkUpdateManyWithoutCollectionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CollectionUpsertWithWhereUniqueWithoutBookmarksInput = {
  create: CollectionCreateWithoutBookmarksInput;
  update: CollectionUpdateWithoutBookmarksInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
  create: CollectionCreateWithoutUserInput;
  update: CollectionUpdateWithoutUserInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionWhereInput = {
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  bookmarks?: InputMaybe<BookmarkListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  public?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type CollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumExternalServiceAuthTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ExternalServiceAuthType>;
};

export type EnumExternalServiceAuthTypeFilter = {
  equals?: InputMaybe<ExternalServiceAuthType>;
  in?: InputMaybe<Array<ExternalServiceAuthType>>;
  not?: InputMaybe<NestedEnumExternalServiceAuthTypeFilter>;
  notIn?: InputMaybe<Array<ExternalServiceAuthType>>;
};

export type EnumExternalServiceTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ExternalServiceType>;
};

export type EnumExternalServiceTypeFilter = {
  equals?: InputMaybe<ExternalServiceType>;
  in?: InputMaybe<Array<ExternalServiceType>>;
  not?: InputMaybe<NestedEnumExternalServiceTypeFilter>;
  notIn?: InputMaybe<Array<ExternalServiceType>>;
};

export type ExternalService = {
  __typename?: 'ExternalService';
  _count?: Maybe<ExternalServiceCount>;
  authType: ExternalServiceAuthType;
  id: Scalars['String'];
  type: ExternalServiceType;
};

export enum ExternalServiceAuthType {
  ApiToken = 'API_TOKEN',
  UsernameAndPassword = 'USERNAME_AND_PASSWORD'
}

export type ExternalServiceCount = {
  __typename?: 'ExternalServiceCount';
  ExternalServiceCredential: Scalars['Int'];
};

export type ExternalServiceCreateNestedOneWithoutExternalServiceCredentialInput = {
  connect?: InputMaybe<ExternalServiceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput>;
  create?: InputMaybe<ExternalServiceCreateWithoutExternalServiceCredentialInput>;
};

export type ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput = {
  create: ExternalServiceCreateWithoutExternalServiceCredentialInput;
  where: ExternalServiceWhereUniqueInput;
};

export type ExternalServiceCreateWithoutExternalServiceCredentialInput = {
  authType: ExternalServiceAuthType;
  id?: InputMaybe<Scalars['String']>;
  type: ExternalServiceType;
};

export type ExternalServiceCredential = {
  __typename?: 'ExternalServiceCredential';
  apiToken?: Maybe<Scalars['String']>;
  externalService: ExternalService;
  externalServiceId: Scalars['String'];
  id: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type ExternalServiceCredentialCreateManyUserInput = {
  apiToken?: InputMaybe<Scalars['String']>;
  externalServiceId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ExternalServiceCredentialCreateManyUserInputEnvelope = {
  data: Array<ExternalServiceCredentialCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ExternalServiceCredentialCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ExternalServiceCredentialWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExternalServiceCredentialCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ExternalServiceCredentialCreateWithoutUserInput>>;
  createMany?: InputMaybe<ExternalServiceCredentialCreateManyUserInputEnvelope>;
};

export type ExternalServiceCredentialCreateOrConnectWithoutUserInput = {
  create: ExternalServiceCredentialCreateWithoutUserInput;
  where: ExternalServiceCredentialWhereUniqueInput;
};

export type ExternalServiceCredentialCreateWithoutUserInput = {
  apiToken?: InputMaybe<Scalars['String']>;
  externalService: ExternalServiceCreateNestedOneWithoutExternalServiceCredentialInput;
  id?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ExternalServiceCredentialListRelationFilter = {
  every?: InputMaybe<ExternalServiceCredentialWhereInput>;
  none?: InputMaybe<ExternalServiceCredentialWhereInput>;
  some?: InputMaybe<ExternalServiceCredentialWhereInput>;
};

export type ExternalServiceCredentialOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ExternalServiceCredentialOrderByWithRelationInput = {
  apiToken?: InputMaybe<SortOrder>;
  externalService?: InputMaybe<ExternalServiceOrderByWithRelationInput>;
  externalServiceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export enum ExternalServiceCredentialScalarFieldEnum {
  ApiToken = 'apiToken',
  ExternalServiceId = 'externalServiceId',
  Id = 'id',
  Password = 'password',
  UserId = 'userId',
  Username = 'username'
}

export type ExternalServiceCredentialScalarWhereInput = {
  AND?: InputMaybe<Array<ExternalServiceCredentialScalarWhereInput>>;
  NOT?: InputMaybe<Array<ExternalServiceCredentialScalarWhereInput>>;
  OR?: InputMaybe<Array<ExternalServiceCredentialScalarWhereInput>>;
  apiToken?: InputMaybe<StringNullableFilter>;
  externalServiceId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type ExternalServiceCredentialUpdateManyMutationInput = {
  apiToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ExternalServiceCredentialUpdateManyWithWhereWithoutUserInput = {
  data: ExternalServiceCredentialUpdateManyMutationInput;
  where: ExternalServiceCredentialScalarWhereInput;
};

export type ExternalServiceCredentialUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ExternalServiceCredentialWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExternalServiceCredentialCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ExternalServiceCredentialCreateWithoutUserInput>>;
  createMany?: InputMaybe<ExternalServiceCredentialCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ExternalServiceCredentialWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExternalServiceCredentialScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExternalServiceCredentialWhereUniqueInput>>;
  set?: InputMaybe<Array<ExternalServiceCredentialWhereUniqueInput>>;
  update?: InputMaybe<Array<ExternalServiceCredentialUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ExternalServiceCredentialUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ExternalServiceCredentialUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ExternalServiceCredentialUpdateWithWhereUniqueWithoutUserInput = {
  data: ExternalServiceCredentialUpdateWithoutUserInput;
  where: ExternalServiceCredentialWhereUniqueInput;
};

export type ExternalServiceCredentialUpdateWithoutUserInput = {
  apiToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalService?: InputMaybe<ExternalServiceUpdateOneRequiredWithoutExternalServiceCredentialNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ExternalServiceCredentialUpsertWithWhereUniqueWithoutUserInput = {
  create: ExternalServiceCredentialCreateWithoutUserInput;
  update: ExternalServiceCredentialUpdateWithoutUserInput;
  where: ExternalServiceCredentialWhereUniqueInput;
};

export type ExternalServiceCredentialWhereInput = {
  AND?: InputMaybe<Array<ExternalServiceCredentialWhereInput>>;
  NOT?: InputMaybe<Array<ExternalServiceCredentialWhereInput>>;
  OR?: InputMaybe<Array<ExternalServiceCredentialWhereInput>>;
  apiToken?: InputMaybe<StringNullableFilter>;
  externalService?: InputMaybe<ExternalServiceRelationFilter>;
  externalServiceId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type ExternalServiceCredentialWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ExternalServiceOrderByWithRelationInput = {
  ExternalServiceCredential?: InputMaybe<ExternalServiceCredentialOrderByRelationAggregateInput>;
  authType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ExternalServiceRelationFilter = {
  is?: InputMaybe<ExternalServiceWhereInput>;
  isNot?: InputMaybe<ExternalServiceWhereInput>;
};

export enum ExternalServiceType {
  Instapaper = 'INSTAPAPER',
  Readwise = 'READWISE'
}

export type ExternalServiceUpdateOneRequiredWithoutExternalServiceCredentialNestedInput = {
  connect?: InputMaybe<ExternalServiceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput>;
  create?: InputMaybe<ExternalServiceCreateWithoutExternalServiceCredentialInput>;
  update?: InputMaybe<ExternalServiceUpdateWithoutExternalServiceCredentialInput>;
  upsert?: InputMaybe<ExternalServiceUpsertWithoutExternalServiceCredentialInput>;
};

export type ExternalServiceUpdateWithoutExternalServiceCredentialInput = {
  authType?: InputMaybe<EnumExternalServiceAuthTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumExternalServiceTypeFieldUpdateOperationsInput>;
};

export type ExternalServiceUpsertWithoutExternalServiceCredentialInput = {
  create: ExternalServiceCreateWithoutExternalServiceCredentialInput;
  update: ExternalServiceUpdateWithoutExternalServiceCredentialInput;
};

export type ExternalServiceWhereInput = {
  AND?: InputMaybe<Array<ExternalServiceWhereInput>>;
  ExternalServiceCredential?: InputMaybe<ExternalServiceCredentialListRelationFilter>;
  NOT?: InputMaybe<Array<ExternalServiceWhereInput>>;
  OR?: InputMaybe<Array<ExternalServiceWhereInput>>;
  authType?: InputMaybe<EnumExternalServiceAuthTypeFilter>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumExternalServiceTypeFilter>;
};

export type ExternalServiceWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ExternalServiceType>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateAPITokenExternalService: Scalars['Boolean'];
  activateUsernameAndPasswordExternalService: Scalars['Boolean'];
  addBookmarkToCollection: Scalars['Boolean'];
  createManyBookmark: AffectedRowsOutput;
  createManyCollection: AffectedRowsOutput;
  createManyTag: AffectedRowsOutput;
  createOneBookmark: Bookmark;
  createOneCollection: Collection;
  createOneTag: Tag;
  deactivateExternalService: Scalars['Boolean'];
  deleteManyBookmark: AffectedRowsOutput;
  deleteManyCollection: AffectedRowsOutput;
  deleteManyTag: AffectedRowsOutput;
  deleteOneBookmark?: Maybe<Bookmark>;
  deleteOneCollection?: Maybe<Collection>;
  deleteOneTag?: Maybe<Tag>;
  removeBookmarkFromCollection: Scalars['Boolean'];
  shareToExternalService: Scalars['Boolean'];
  updateManyBookmark: AffectedRowsOutput;
  updateManyCollection: AffectedRowsOutput;
  updateManyTag: AffectedRowsOutput;
  updateOneBookmark?: Maybe<Bookmark>;
  updateOneCollection?: Maybe<Collection>;
  updateOneTag?: Maybe<Tag>;
  upsertOneBookmark: Bookmark;
  upsertOneCollection: Collection;
  upsertOneTag: Tag;
};


export type MutationActivateApiTokenExternalServiceArgs = {
  input: ActivateApiTokenServiceInput;
};


export type MutationActivateUsernameAndPasswordExternalServiceArgs = {
  input: ActivateUsernameAndPasswordServiceInput;
};


export type MutationAddBookmarkToCollectionArgs = {
  addBookmarkToCollectionInput: AddBookmarkToCollectionInput;
};


export type MutationCreateManyBookmarkArgs = {
  data: Array<BookmarkCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCollectionArgs = {
  data: Array<CollectionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTagArgs = {
  data: Array<TagCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneBookmarkArgs = {
  data: BookmarkCreateInput;
};


export type MutationCreateOneCollectionArgs = {
  data: CollectionCreateInput;
};


export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
};


export type MutationDeactivateExternalServiceArgs = {
  serviceType: ExternalServiceType;
};


export type MutationDeleteManyBookmarkArgs = {
  where?: InputMaybe<BookmarkWhereInput>;
};


export type MutationDeleteManyCollectionArgs = {
  where?: InputMaybe<CollectionWhereInput>;
};


export type MutationDeleteManyTagArgs = {
  where?: InputMaybe<TagWhereInput>;
};


export type MutationDeleteOneBookmarkArgs = {
  where: BookmarkWhereUniqueInput;
};


export type MutationDeleteOneCollectionArgs = {
  where: CollectionWhereUniqueInput;
};


export type MutationDeleteOneTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationRemoveBookmarkFromCollectionArgs = {
  removeBookmarkFromCollectionInput: RemoveBookmarkFromCollectionInput;
};


export type MutationShareToExternalServiceArgs = {
  input: ShareInput;
};


export type MutationUpdateManyBookmarkArgs = {
  data: BookmarkUpdateManyMutationInput;
  where?: InputMaybe<BookmarkWhereInput>;
};


export type MutationUpdateManyCollectionArgs = {
  data: CollectionUpdateManyMutationInput;
  where?: InputMaybe<CollectionWhereInput>;
};


export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where?: InputMaybe<TagWhereInput>;
};


export type MutationUpdateOneBookmarkArgs = {
  data: BookmarkUpdateInput;
  where: BookmarkWhereUniqueInput;
};


export type MutationUpdateOneCollectionArgs = {
  data: CollectionUpdateInput;
  where: CollectionWhereUniqueInput;
};


export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertOneBookmarkArgs = {
  create: BookmarkCreateInput;
  update: BookmarkUpdateInput;
  where: BookmarkWhereUniqueInput;
};


export type MutationUpsertOneCollectionArgs = {
  create: CollectionCreateInput;
  update: CollectionUpdateInput;
  where: CollectionWhereUniqueInput;
};


export type MutationUpsertOneTagArgs = {
  create: TagCreateInput;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumExternalServiceAuthTypeFilter = {
  equals?: InputMaybe<ExternalServiceAuthType>;
  in?: InputMaybe<Array<ExternalServiceAuthType>>;
  not?: InputMaybe<NestedEnumExternalServiceAuthTypeFilter>;
  notIn?: InputMaybe<Array<ExternalServiceAuthType>>;
};

export type NestedEnumExternalServiceTypeFilter = {
  equals?: InputMaybe<ExternalServiceType>;
  in?: InputMaybe<Array<ExternalServiceType>>;
  not?: InputMaybe<NestedEnumExternalServiceTypeFilter>;
  notIn?: InputMaybe<Array<ExternalServiceType>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBookmark: AggregateBookmark;
  aggregateCollection: AggregateCollection;
  aggregateTag: AggregateTag;
  bookmark?: Maybe<Bookmark>;
  bookmarks: Array<Bookmark>;
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  externalServices: Array<ExternalService>;
  findFirstBookmark?: Maybe<Bookmark>;
  findFirstBookmarkOrThrow?: Maybe<Bookmark>;
  findFirstCollection?: Maybe<Collection>;
  findFirstCollectionOrThrow?: Maybe<Collection>;
  findFirstTag?: Maybe<Tag>;
  findFirstTagOrThrow?: Maybe<Tag>;
  getBookmark?: Maybe<Bookmark>;
  getCollection?: Maybe<Collection>;
  getTag?: Maybe<Tag>;
  groupByBookmark: Array<BookmarkGroupBy>;
  groupByCollection: Array<CollectionGroupBy>;
  groupByTag: Array<TagGroupBy>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  user: User;
  users: Array<User>;
};


export type QueryAggregateBookmarkArgs = {
  cursor?: InputMaybe<BookmarkWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BookmarkOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkWhereInput>;
};


export type QueryAggregateCollectionArgs = {
  cursor?: InputMaybe<CollectionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryAggregateTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryBookmarkArgs = {
  where: BookmarkWhereUniqueInput;
};


export type QueryBookmarksArgs = {
  cursor?: InputMaybe<BookmarkWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookmarkScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookmarkOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkWhereInput>;
};


export type QueryCollectionArgs = {
  where: CollectionWhereUniqueInput;
};


export type QueryCollectionsArgs = {
  cursor?: InputMaybe<CollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryFindFirstBookmarkArgs = {
  cursor?: InputMaybe<BookmarkWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookmarkScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookmarkOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkWhereInput>;
};


export type QueryFindFirstBookmarkOrThrowArgs = {
  cursor?: InputMaybe<BookmarkWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookmarkScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookmarkOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkWhereInput>;
};


export type QueryFindFirstCollectionArgs = {
  cursor?: InputMaybe<CollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryFindFirstCollectionOrThrowArgs = {
  cursor?: InputMaybe<CollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryFindFirstTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindFirstTagOrThrowArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryGetBookmarkArgs = {
  where: BookmarkWhereUniqueInput;
};


export type QueryGetCollectionArgs = {
  where: CollectionWhereUniqueInput;
};


export type QueryGetTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryGroupByBookmarkArgs = {
  by: Array<BookmarkScalarFieldEnum>;
  having?: InputMaybe<BookmarkScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BookmarkOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkWhereInput>;
};


export type QueryGroupByCollectionArgs = {
  by: Array<CollectionScalarFieldEnum>;
  having?: InputMaybe<CollectionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CollectionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryGroupByTagArgs = {
  by: Array<TagScalarFieldEnum>;
  having?: InputMaybe<TagScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type RemoveBookmarkFromCollectionInput = {
  bookmarkId: Scalars['String'];
  collectionId: Scalars['String'];
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
};

export type SessionCreateManyUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
};

export type ShareInput = {
  bookmarkId: Scalars['String'];
  externalService: ExternalServiceType;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  Bookmark?: Maybe<Bookmark>;
  User: User;
  bookmarkId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  tagColor: Scalars['String'];
  userId: Scalars['String'];
  value: Scalars['String'];
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  _all: Scalars['Int'];
  bookmarkId: Scalars['Int'];
  id: Scalars['Int'];
  tagColor: Scalars['Int'];
  userId: Scalars['Int'];
  value: Scalars['Int'];
};

export type TagCountOrderByAggregateInput = {
  bookmarkId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagColor?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TagCreateInput = {
  Bookmark?: InputMaybe<BookmarkCreateNestedOneWithoutTagsInput>;
  User: UserCreateNestedOneWithoutTagsInput;
  id?: InputMaybe<Scalars['String']>;
  tagColor: Scalars['String'];
  value: Scalars['String'];
};

export type TagCreateManyBookmarkInput = {
  id?: InputMaybe<Scalars['String']>;
  tagColor: Scalars['String'];
  userId: Scalars['String'];
  value: Scalars['String'];
};

export type TagCreateManyBookmarkInputEnvelope = {
  data: Array<TagCreateManyBookmarkInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TagCreateManyInput = {
  bookmarkId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  tagColor: Scalars['String'];
  userId: Scalars['String'];
  value: Scalars['String'];
};

export type TagCreateManyUserInput = {
  bookmarkId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  tagColor: Scalars['String'];
  value: Scalars['String'];
};

export type TagCreateManyUserInputEnvelope = {
  data: Array<TagCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TagCreateNestedManyWithoutBookmarkInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutBookmarkInput>>;
  create?: InputMaybe<Array<TagCreateWithoutBookmarkInput>>;
  createMany?: InputMaybe<TagCreateManyBookmarkInputEnvelope>;
};

export type TagCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUserInput>>;
  createMany?: InputMaybe<TagCreateManyUserInputEnvelope>;
};

export type TagCreateOrConnectWithoutBookmarkInput = {
  create: TagCreateWithoutBookmarkInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutBookmarkInput = {
  User: UserCreateNestedOneWithoutTagsInput;
  id?: InputMaybe<Scalars['String']>;
  tagColor: Scalars['String'];
  value: Scalars['String'];
};

export type TagCreateWithoutUserInput = {
  Bookmark?: InputMaybe<BookmarkCreateNestedOneWithoutTagsInput>;
  id?: InputMaybe<Scalars['String']>;
  tagColor: Scalars['String'];
  value: Scalars['String'];
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
  bookmarkId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  tagColor: Scalars['String'];
  userId: Scalars['String'];
  value: Scalars['String'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  bookmarkId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  tagColor?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TagMaxOrderByAggregateInput = {
  bookmarkId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagColor?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  bookmarkId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  tagColor?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TagMinOrderByAggregateInput = {
  bookmarkId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagColor?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagOrderByWithAggregationInput = {
  _count?: InputMaybe<TagCountOrderByAggregateInput>;
  _max?: InputMaybe<TagMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagMinOrderByAggregateInput>;
  bookmarkId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagColor?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  Bookmark?: InputMaybe<BookmarkOrderByWithRelationInput>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  bookmarkId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagColor?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  BookmarkId = 'bookmarkId',
  Id = 'id',
  TagColor = 'tagColor',
  UserId = 'userId',
  Value = 'value'
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  bookmarkId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  tagColor?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  bookmarkId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  tagColor?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<StringWithAggregatesFilter>;
};

export type TagUpdateInput = {
  Bookmark?: InputMaybe<BookmarkUpdateOneWithoutTagsNestedInput>;
  User?: InputMaybe<UserUpdateOneRequiredWithoutTagsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tagColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tagColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutBookmarkInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithWhereWithoutUserInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutBookmarkNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutBookmarkInput>>;
  create?: InputMaybe<Array<TagCreateWithoutBookmarkInput>>;
  createMany?: InputMaybe<TagCreateManyBookmarkInputEnvelope>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutBookmarkInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutBookmarkInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutBookmarkInput>>;
};

export type TagUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUserInput>>;
  createMany?: InputMaybe<TagCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TagUpdateWithWhereUniqueWithoutBookmarkInput = {
  data: TagUpdateWithoutBookmarkInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithWhereUniqueWithoutUserInput = {
  data: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutBookmarkInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutTagsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tagColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutUserInput = {
  Bookmark?: InputMaybe<BookmarkUpdateOneWithoutTagsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tagColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutBookmarkInput = {
  create: TagCreateWithoutBookmarkInput;
  update: TagUpdateWithoutBookmarkInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  update: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  Bookmark?: InputMaybe<BookmarkRelationFilter>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  bookmarkId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  tagColor?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  bookmarks: Array<Bookmark>;
  collections: Array<Collection>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  externalServices: Array<ExternalServiceCredential>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions: Array<Session>;
  tags: Array<Tag>;
};


export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type UserBookmarksArgs = {
  cursor?: InputMaybe<BookmarkWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookmarkScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookmarkOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkWhereInput>;
};


export type UserCollectionsArgs = {
  cursor?: InputMaybe<CollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type UserExternalServicesArgs = {
  cursor?: InputMaybe<ExternalServiceCredentialWhereUniqueInput>;
  distinct?: InputMaybe<Array<ExternalServiceCredentialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ExternalServiceCredentialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExternalServiceCredentialWhereInput>;
};


export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type UserTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int'];
  bookmarks: Scalars['Int'];
  collections: Scalars['Int'];
  externalServices: Scalars['Int'];
  sessions: Scalars['Int'];
  tags: Scalars['Int'];
};

export type UserCreateNestedOneWithoutBookmarksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookmarksInput>;
  create?: InputMaybe<UserCreateWithoutBookmarksInput>;
};

export type UserCreateNestedOneWithoutCollectionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCollectionsInput>;
  create?: InputMaybe<UserCreateWithoutCollectionsInput>;
};

export type UserCreateNestedOneWithoutTagsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<UserCreateWithoutTagsInput>;
};

export type UserCreateOrConnectWithoutBookmarksInput = {
  create: UserCreateWithoutBookmarksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCollectionsInput = {
  create: UserCreateWithoutCollectionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutBookmarksInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  collections?: InputMaybe<CollectionCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  externalServices?: InputMaybe<ExternalServiceCredentialCreateNestedManyWithoutUserInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutCollectionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bookmarks?: InputMaybe<BookmarkCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  externalServices?: InputMaybe<ExternalServiceCredentialCreateNestedManyWithoutUserInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTagsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bookmarks?: InputMaybe<BookmarkCreateNestedManyWithoutUserInput>;
  collections?: InputMaybe<CollectionCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  externalServices?: InputMaybe<ExternalServiceCredentialCreateNestedManyWithoutUserInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  bookmarks?: InputMaybe<BookmarkOrderByRelationAggregateInput>;
  collections?: InputMaybe<CollectionOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  externalServices?: InputMaybe<ExternalServiceCredentialOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookmarksInput>;
  create?: InputMaybe<UserCreateWithoutBookmarksInput>;
  update?: InputMaybe<UserUpdateWithoutBookmarksInput>;
  upsert?: InputMaybe<UserUpsertWithoutBookmarksInput>;
};

export type UserUpdateOneRequiredWithoutTagsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<UserCreateWithoutTagsInput>;
  update?: InputMaybe<UserUpdateWithoutTagsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTagsInput>;
};

export type UserUpdateOneWithoutCollectionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCollectionsInput>;
  create?: InputMaybe<UserCreateWithoutCollectionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutCollectionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCollectionsInput>;
};

export type UserUpdateWithoutBookmarksInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  collections?: InputMaybe<CollectionUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  externalServices?: InputMaybe<ExternalServiceCredentialUpdateManyWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutCollectionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bookmarks?: InputMaybe<BookmarkUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  externalServices?: InputMaybe<ExternalServiceCredentialUpdateManyWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutTagsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bookmarks?: InputMaybe<BookmarkUpdateManyWithoutUserNestedInput>;
  collections?: InputMaybe<CollectionUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  externalServices?: InputMaybe<ExternalServiceCredentialUpdateManyWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
};

export type UserUpsertWithoutBookmarksInput = {
  create: UserCreateWithoutBookmarksInput;
  update: UserUpdateWithoutBookmarksInput;
};

export type UserUpsertWithoutCollectionsInput = {
  create: UserCreateWithoutCollectionsInput;
  update: UserUpdateWithoutCollectionsInput;
};

export type UserUpsertWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  update: UserUpdateWithoutTagsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  bookmarks?: InputMaybe<BookmarkListRelationFilter>;
  collections?: InputMaybe<CollectionListRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  externalServices?: InputMaybe<ExternalServiceCredentialListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type UpsertBookmarkMutationMutationVariables = Exact<{
  where: BookmarkWhereUniqueInput;
  create: BookmarkCreateInput;
  update: BookmarkUpdateInput;
}>;


export type UpsertBookmarkMutationMutation = { __typename?: 'Mutation', upsertOneBookmark: { __typename?: 'Bookmark', id: string } };

export type CreateCollectionMutationMutationVariables = Exact<{
  data: CollectionCreateInput;
}>;


export type CreateCollectionMutationMutation = { __typename?: 'Mutation', createOneCollection: { __typename?: 'Collection', id: string } };

export type ActivateApiTokenExternalServiceMutationMutationVariables = Exact<{
  input: ActivateApiTokenServiceInput;
}>;


export type ActivateApiTokenExternalServiceMutationMutation = { __typename?: 'Mutation', activateAPITokenExternalService: boolean };

export type DeactivateExternalServiceMutationMutationVariables = Exact<{
  serviceType: ExternalServiceType;
}>;


export type DeactivateExternalServiceMutationMutation = { __typename?: 'Mutation', deactivateExternalService: boolean };

export type ActivateExternalServiceMutationMutationVariables = Exact<{
  input: ActivateUsernameAndPasswordServiceInput;
}>;


export type ActivateExternalServiceMutationMutation = { __typename?: 'Mutation', activateUsernameAndPasswordExternalService: boolean };

export type AddTagMutationMutationVariables = Exact<{
  data: TagCreateInput;
}>;


export type AddTagMutationMutation = { __typename?: 'Mutation', createOneTag: { __typename?: 'Tag', id: string } };

export type DeleteTagMutationMutationVariables = Exact<{
  where: TagWhereUniqueInput;
}>;


export type DeleteTagMutationMutation = { __typename?: 'Mutation', deleteOneTag?: { __typename?: 'Tag', id: string } | null };

export type BookmarkCollectionQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type BookmarkCollectionQueryQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, name: string, bookmarks: Array<{ __typename?: 'BookmarkCustom', id: string, url: string }> }> };

export type AddBookmarkMutationMutationVariables = Exact<{
  input: AddBookmarkToCollectionInput;
}>;


export type AddBookmarkMutationMutation = { __typename?: 'Mutation', addBookmarkToCollection: boolean };

export type BookmarkQueryQueryVariables = Exact<{
  where: BookmarkWhereInput;
}>;


export type BookmarkQueryQuery = { __typename?: 'Query', bookmarks: Array<{ __typename?: 'Bookmark', id: string, title: string, description: string, url: string, createdAt: any, tags: Array<{ __typename?: 'Tag', id: string, value: string }> }>, tags: Array<{ __typename?: 'Tag', id: string, value: string, tagColor: string }>, user: { __typename?: 'User', id: string, externalServices: Array<{ __typename?: 'ExternalServiceCredential', externalService: { __typename?: 'ExternalService', type: ExternalServiceType } }> } };

export type DeleteBookmarkMutationMutationVariables = Exact<{
  where: BookmarkWhereUniqueInput;
}>;


export type DeleteBookmarkMutationMutation = { __typename?: 'Mutation', deleteOneBookmark?: { __typename?: 'Bookmark', id: string } | null };

export type CollectionQueryQueryVariables = Exact<{
  where: CollectionWhereUniqueInput;
}>;


export type CollectionQueryQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, name: string, description: string, createdAt: any, public: boolean, _count?: { __typename?: 'CollectionCount', bookmarks: number } | null }>, collection?: { __typename?: 'Collection', id: string, name: string, public: boolean, bookmarks: Array<{ __typename?: 'BookmarkCustom', id: string, title: string, description: string, url: string, createdAt: any, tags: Array<{ __typename?: 'Tag', id: string, value: string }> }> } | null, tags: Array<{ __typename?: 'Tag', id: string, value: string, tagColor: string }> };

export type CollectionsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsQueryQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, name: string, description: string, createdAt: any, public: boolean, _count?: { __typename?: 'CollectionCount', bookmarks: number } | null }> };

export type DeleteCollectionMutationMutationVariables = Exact<{
  where: CollectionWhereUniqueInput;
}>;


export type DeleteCollectionMutationMutation = { __typename?: 'Mutation', deleteOneCollection?: { __typename?: 'Collection', id: string } | null };

export type ShareToExternalServiceMutationMutationVariables = Exact<{
  input: ShareInput;
}>;


export type ShareToExternalServiceMutationMutation = { __typename?: 'Mutation', shareToExternalService: boolean };

export type AvailableExternalServicesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableExternalServicesQueryQuery = { __typename?: 'Query', user: { __typename?: 'User', externalServices: Array<{ __typename?: 'ExternalServiceCredential', id: string, externalService: { __typename?: 'ExternalService', id: string, type: ExternalServiceType } }> } };

export type ExternalServiceCredentialFragmentFragment = { __typename?: 'ExternalServiceCredential', id: string, externalService: { __typename?: 'ExternalService', id: string, type: ExternalServiceType, authType: ExternalServiceAuthType } } & { ' $fragmentName'?: 'ExternalServiceCredentialFragmentFragment' };

export type TagFragmentFragment = { __typename?: 'Tag', id: string, value: string, tagColor: string } & { ' $fragmentName'?: 'TagFragmentFragment' };

export type SettingsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SettingsQueryQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name?: string | null, email?: string | null, externalServices: Array<{ __typename?: 'ExternalServiceCredential', id: string, externalService: { __typename?: 'ExternalService', id: string, type: ExternalServiceType, authType: ExternalServiceAuthType } }> }, externalServices: Array<{ __typename?: 'ExternalService', id: string, type: ExternalServiceType, authType: ExternalServiceAuthType }> };

export type TagQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TagQueryQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', id: string, value: string, tagColor: string }> };

export const ExternalServiceCredentialFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalServiceCredentialFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalServiceCredential"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"authType"}}]}}]}}]} as unknown as DocumentNode<ExternalServiceCredentialFragmentFragment, unknown>;
export const TagFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TagFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"tagColor"}}]}}]} as unknown as DocumentNode<TagFragmentFragment, unknown>;
export const UpsertBookmarkMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertBookmarkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"create"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"update"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertOneBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"create"},"value":{"kind":"Variable","name":{"kind":"Name","value":"create"}}},{"kind":"Argument","name":{"kind":"Name","value":"update"},"value":{"kind":"Variable","name":{"kind":"Name","value":"update"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertBookmarkMutationMutation, UpsertBookmarkMutationMutationVariables>;
export const CreateCollectionMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCollectionMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCollectionMutationMutation, CreateCollectionMutationMutationVariables>;
export const ActivateApiTokenExternalServiceMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ActivateAPITokenExternalServiceMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActivateAPITokenServiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateAPITokenExternalService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ActivateApiTokenExternalServiceMutationMutation, ActivateApiTokenExternalServiceMutationMutationVariables>;
export const DeactivateExternalServiceMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeactivateExternalServiceMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalServiceType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateExternalService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serviceType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceType"}}}]}]}}]} as unknown as DocumentNode<DeactivateExternalServiceMutationMutation, DeactivateExternalServiceMutationMutationVariables>;
export const ActivateExternalServiceMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ActivateExternalServiceMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActivateUsernameAndPasswordServiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateUsernameAndPasswordExternalService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ActivateExternalServiceMutationMutation, ActivateExternalServiceMutationMutationVariables>;
export const AddTagMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTagMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddTagMutationMutation, AddTagMutationMutationVariables>;
export const DeleteTagMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTagMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTagMutationMutation, DeleteTagMutationMutationVariables>;
export const BookmarkCollectionQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BookmarkCollectionQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<BookmarkCollectionQueryQuery, BookmarkCollectionQueryQueryVariables>;
export const AddBookmarkMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddBookmarkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddBookmarkToCollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addBookmarkToCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addBookmarkToCollectionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<AddBookmarkMutationMutation, AddBookmarkMutationMutationVariables>;
export const BookmarkQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BookmarkQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmarks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"tagColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BookmarkQueryQuery, BookmarkQueryQueryVariables>;
export const DeleteBookmarkMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBookmarkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteBookmarkMutationMutation, DeleteBookmarkMutationMutationVariables>;
export const CollectionQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"tagColor"}}]}}]}}]} as unknown as DocumentNode<CollectionQueryQuery, CollectionQueryQueryVariables>;
export const CollectionsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}}]}}]}}]}}]} as unknown as DocumentNode<CollectionsQueryQuery, CollectionsQueryQueryVariables>;
export const DeleteCollectionMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCollectionMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteCollectionMutationMutation, DeleteCollectionMutationMutationVariables>;
export const ShareToExternalServiceMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ShareToExternalServiceMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ShareInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shareToExternalService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ShareToExternalServiceMutationMutation, ShareToExternalServiceMutationMutationVariables>;
export const AvailableExternalServicesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AvailableExternalServicesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AvailableExternalServicesQueryQuery, AvailableExternalServicesQueryQueryVariables>;
export const SettingsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SettingsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"externalServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"authType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"authType"}}]}}]}}]} as unknown as DocumentNode<SettingsQueryQuery, SettingsQueryQueryVariables>;
export const TagQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TagQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"tagColor"}}]}}]}}]} as unknown as DocumentNode<TagQueryQuery, TagQueryQueryVariables>;