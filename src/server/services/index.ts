import { Container } from "inversify";
import {
  ExternalService,
  Bookmark,
  User,
} from "../../lib/graphql/server/generated/models";
import { Collection, ExternalServiceType } from "@prisma/client";
import { BookmarkCustom } from "../models/BookmarkCustom";
import { BookmarkService } from "./BookmarkService";
import { CollectionService } from "./CollectionService";
import { ExternalServiceService } from "./ExternalServiceService";
import { TagService } from "./TagService";
import { UserService } from "./UserService";

export const TYPES = {
  IBookmarkService: Symbol.for("IBookmarkService"),
  ICollectionService: Symbol.for("ICollectionService"),
  ITagService: Symbol.for("ITagService"),
  IUserService: Symbol.for("IUserService"),
  IExternalServiceService: Symbol.for("IExternalServiceService"),
};

export interface IUserService {
  getAllUsers(): Promise<User[]>;

  getUser(id: string): Promise<User>;

  activateUsernameAndPasswordExternalService(
    userId: string,
    externalService: ExternalServiceType,
    username: string,
    password: string
  ): Promise<Boolean>;

  activateAPITokenExternalService(
    userId: string,
    externalService: ExternalServiceType,
    apiToken: string
  ): Promise<Boolean>;

  deactivateExternalService(
    userId: string,
    serviceType: ExternalServiceType
  ): Promise<Boolean>;
}

export interface IBookmarkFilter {
  tag?: string;
  collectionId?: string;
}

export interface IBookmarkService {
  getUserBookmarks(
    userId: string,
    filter: IBookmarkFilter
  ): Promise<BookmarkCustom[]>;

  upsertBookmark({
    id,
    userId,
    title,
    description,
    url,
    tags,
    collectionId,
  }: {
    id?: string;
    userId: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
    collectionId?: string;
  }): Promise<Bookmark>;

  deleteBookmark(id: string): Promise<Bookmark>;
}

export interface ICollectionService {
  getCollection(
    id: string
  ): Promise<Collection & { bookmarks: BookmarkCustom[] }>;

  getCollectionBookmarks(id: string): Promise<BookmarkCustom[]>;

  getUserCollections(userId: string): Promise<Collection[]>;

  createCollection({
    name,
    description,
    isPublic,
    createdAt,
    userId,
  }: {
    name: string;
    description: string;
    isPublic: boolean;
    createdAt: string;
    userId: string;
  }): Promise<Collection>;

  addExistingBookmarkToCollection(
    collectionId: string,
    bookmarkId: string
  ): Promise<Boolean>;

  removeBookmarkFromCollection(
    collectionId: string,
    bookmarkId: string
  ): Promise<Boolean>;
}

export interface IUserTag {
  id?: string;
  value: string;
  color: string;
}

export interface ITagService {
  getTags(userId: string): Promise<IUserTag[]>;

  upsertTag({
    id,
    name,
    color,
    userId,
  }: {
    id?: string;
    name: string;
    color: string;
    userId: string;
  }): Promise<IUserTag>;

  deleteTag(tagId: string, userId: string): Promise<Boolean>;
}

export interface IExternalServiceService {
  getAllExternalServices(): Promise<ExternalService[]>;

  shareBookmark(
    bookmarkId: string,
    userId: string,
    externalService: ExternalServiceType
  ): Promise<Boolean>;
}

export const bind = (container: Container) => {
  container
    .bind<IBookmarkService>(TYPES.IBookmarkService)
    .to(BookmarkService)
    .inRequestScope();

  container
    .bind<ICollectionService>(TYPES.ICollectionService)
    .to(CollectionService)
    .inRequestScope();

  container
    .bind<ITagService>(TYPES.ITagService)
    .to(TagService)
    .inRequestScope();

  container
    .bind<IUserService>(TYPES.IUserService)
    .to(UserService)
    .inRequestScope();

  container
    .bind<IExternalServiceService>(TYPES.IExternalServiceService)
    .to(ExternalServiceService)
    .inRequestScope();
};
