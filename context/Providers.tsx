"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
