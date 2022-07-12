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
  signInLogin(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
  islogged: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [data, setData] = useState<AuthState>();
  const [islogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const local = getUserLocalStorage();
    const token = local?.token;
    if (local) {
      setData({ token, exp: local.exp });
      setIsLogged(local.islggg);
    }
  }, []);

  const signInLogin = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const response = await loginRequest({ email, password });
      if (response.status === 200) {
        setIsLogged(true);
        const { token, exp } = response.data;
        const islggg = true;
        setUserLocalStorage({ token, exp, islggg });
        setData({ token, exp });
        return true;
      }
      // console.log(response);
      return false;
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@u:token");
    localStorage.removeItem("@u:exp");
    localStorage.removeItem("@u:islggg");
    setIsLogged(false);

    setData({} as AuthState);
    navigate("/");
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data, signInLogin, signOut, islogged }}
    >
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
