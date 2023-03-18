import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./context";
import { ContextProvider, IContextProvider } from "./context/ContextProvider";
import * as Services from "./services";
import { PrismaService } from "./services/PrismaService";

const container = new Container({ skipBaseClassChecks: true });

Services.bind(container);
container.bind<PrismaService>(PrismaService).to(PrismaService);
container
  .bind<IContextProvider>(TYPES.IContextProvider)
  .to(ContextProvider)
  .inRequestScope();

export { container };
