"use client";

import React, { PropsWithChildren } from "react";
import { ThemeProvider as Provider } from "next-themes";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </Provider>
  );
};

export default ThemeProvider;
