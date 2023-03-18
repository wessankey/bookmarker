import { inject, injectable } from "inversify";
import {
  IBookmarkService,
  ICollectionService,
  ITagService,
  IUserService,
  IExternalServiceService,
  TYPES,
} from "../services";

export interface IContextProvider {
  bookmarkService: IBookmarkService;
  collectionService: ICollectionService;
  tagService: ITagService;
  userService: IUserService;
  externalServiceService: IExternalServiceService;
}

@injectable()
export class ContextProvider implements IContextProvider {
  @inject(TYPES.IBookmarkService)
  public bookmarkService: IBookmarkService;

  @inject(TYPES.ICollectionService)
  public collectionService: ICollectionService;

  @inject(TYPES.ITagService)
  public tagService: ITagService;

  @inject(TYPES.IUserService)
  public userService: IUserService;

  @inject(TYPES.IExternalServiceService)
  public externalServiceService: IExternalServiceService;
}
