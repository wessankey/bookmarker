import { inject, injectable } from "inversify";
import {
  ICollectionService,
  IUserService,
  IExternalServiceService,
  TYPES,
} from "../services";

export interface IContextProvider {
  collectionService: ICollectionService;
  userService: IUserService;
  externalServiceService: IExternalServiceService;
}

@injectable()
export class ContextProvider implements IContextProvider {
  @inject(TYPES.ICollectionService)
  public collectionService: ICollectionService;

  @inject(TYPES.IUserService)
  public userService: IUserService;

  @inject(TYPES.IExternalServiceService)
  public externalServiceService: IExternalServiceService;
}
