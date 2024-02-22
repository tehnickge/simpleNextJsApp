"use client";

import { SessionProvider } from "next-auth/react";

export const SessionProviderWithChildren = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
