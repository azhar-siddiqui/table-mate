"use client";

import React from "react";
import { ActiveThemeProvider } from "../themes/active-theme";
import QueryProvider from "./query-provider";

export default function Providers({
  activeThemeValue,
  children,
}: Readonly<{
  activeThemeValue: string;
  children: React.ReactNode;
}>) {
  return (
    <ActiveThemeProvider initialTheme={activeThemeValue}>
      <QueryProvider>{children}</QueryProvider>
    </ActiveThemeProvider>
  );
}
