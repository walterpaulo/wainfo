import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { AuthState, IAuthProvider, SignInCredentials } from "./types";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";

interface AuthContextData {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user?: object;
  signInLogin(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [data, setData] = useState<AuthState>();
  const navigate = useNavigate()

  useEffect(() => {
    const local = getUserLocalStorage();
    const token = local?.token;
    if (local) {
      setData({ token, exp: local.exp });
    }
  }, []);

  const signInLogin = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const response = await loginRequest({ email, password });

      const { token, exp } = response.data;

      console.log(response);
      setUserLocalStorage({ token, exp });

      setData({ token, exp });
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@u:token");
    localStorage.removeItem("@u:exp");

    setData({} as AuthState);
    navigate("/")
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signInLogin, signOut }}>
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
