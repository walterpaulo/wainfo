import React from "react";

import { AuthProvider } from "./Auth";
import { IAuthProvider } from "./types";

const AppProvider: React.FC<IAuthProvider> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
