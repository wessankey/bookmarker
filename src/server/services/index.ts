import { Container } from "inversify";
import {
  Bookmark,
  ExternalService,
  User,
} from "../../lib/graphql/server/generated/models";
import { CollectionService } from "./CollectionService";
import { ExternalServiceService } from "./ExternalServiceService";
import { UserService } from "./UserService";

export const TYPES = {
  ICollectionService: Symbol.for("ICollectionService"),
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

export interface ICollectionService {
  getCollection(id: string): Promise<Collection & { bookmarks: Bookmark[] }>;

  getCollectionBookmarks(id: string): Promise<Bookmark[]>;

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
    .bind<ICollectionService>(TYPES.ICollectionService)
    .to(CollectionService)
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
