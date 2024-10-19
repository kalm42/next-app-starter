export const createContext = async () => {
  // This is the request context, think of it like the start of middleware
  // for each tRPC "request". You can add data to this context that should be
  // available for all operations. Like the current user, session info, etc.
  const ctx = {
    session: null, // TODO! Implement sessions
  };

  return ctx;
};

export type Context = typeof createContext;
