import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./components/hoc/auth-context";
import { Toaster } from "react-hot-toast";
import "./index.css";

import { router } from "./router";
import { TanstackProvider } from "./components/hoc/tanstack-provider";
import { AuthProvider } from "./components/hoc/auth-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackProvider>
      <AuthProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AuthContextProvider>
      </AuthProvider>
    </TanstackProvider>
  </React.StrictMode>
);
