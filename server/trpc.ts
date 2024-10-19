import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import superjson from "superjson";
import { ClientEnvironmentVariables as env } from "@/lib/env";

const [NEXT_PUBLIC_ENVIRONMENT, errorNBE] = env.NEXT_PUBLIC_ENVIRONMENT;
if (errorNBE) throw errorNBE;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  isDev: NEXT_PUBLIC_ENVIRONMENT === "development",
});

export const middleware = t.middleware;
export const createCallerFactory = t.createCallerFactory;
export const mergeRouters = t.mergeRouters;
export const router = t.router;
export const procedure = t.procedure;
