import React, { createContext, useCallback, useState, useContext } from "react";
import { AuthState, IAuthProvider, SignInCredentials } from "./types";
import { loginRequest } from "./util";


interface AuthContextData {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: object;
  signInLogin(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@u:token");
    const exp = localStorage.getItem("@u:exp");

    if (token && exp) {
      return { token, exp: JSON.parse(exp) };
    }

    return {} as AuthState;
  });

  const signInLogin = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await loginRequest({ email, password });

    const { token, exp } = response.data;

    console.log(response);

    localStorage.setItem("@u:token", token);
    localStorage.setItem("@u:exp", JSON.stringify(exp));

    setData({ token, exp });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@u:token");
    localStorage.removeItem("@u:exp");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data , signInLogin, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("UseAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
