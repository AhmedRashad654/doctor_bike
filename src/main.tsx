import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme.ts";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/route.tsx";
import { ContextProvider } from "./context/ContextUseState.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ContextProvider>
  </StrictMode>
);
