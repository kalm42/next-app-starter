import { createContext } from "@/server/context";
import { appRouter } from "@/server/routers";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api",
    req: request,
    router: appRouter,
    createContext: createContext,
  });
};

export const GET = handler;
export const POST = handler;
