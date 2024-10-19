import publicProcedure from "../procedures/public";
import { router } from "../trpc";

export const helloRouter = router({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sayHello: publicProcedure.query(({ ctx }) => {
    return { greeting: `Hello World!` };
  }),
});
