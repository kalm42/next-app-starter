import { createContext } from "../context";
import { createCallerFactory, mergeRouters } from "../trpc";
import { helloRouter } from "./hello";

export const appRouter = mergeRouters(helloRouter);
export const createCaller = createCallerFactory(appRouter);
export const createAsyncCaller = async () => {
  const context = await createContext();
  return createCaller(context);
};

// export type definition of API
export type AppRouter = typeof appRouter;
