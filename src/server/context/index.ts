import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { IContextProvider } from "./ContextProvider";

export const TYPES = {
  IContextProvider: Symbol.for("IContextProvider"),
};

export interface IContext {
  req: NextApiRequest;
  res: NextApiResponse;
  container: IContextProvider;
  session: Session | null;
}
