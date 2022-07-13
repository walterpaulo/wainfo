import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthState,
  IAuthProvider,
  IUserCurrent,
  SignInCredentials,
} from "./types";
import {
  getUserLocalStorage,
  loginRequest,
  setUserCurrentStorage,
  setUserLocalStorage,
  userAuthorized,
} from "./util";

interface AuthContextData {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user?: object;
  signInLogin(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
  islogged: boolean;
  userCurrent: IUserCurrent;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [data, setData] = useState<AuthState>();
  const [islogged, setIsLogged] = useState(false);
  const [userCurrent, setUserCurrent] = useState<IUserCurrent>();
  const navigate = useNavigate();

  useEffect(() => {
    const local = getUserLocalStorage();
    const token = local?.token;
    if (local) {
      setData({ token, exp: local.exp });
      setIsLogged(local.islggg);
      setUserCurrent(local.userObject);
    }
    const userRes = getUserCurrent();
    userRes.then((data) => {
      setUserCurrent(data);
    });
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
        const res = await userAuthorized(token);
        setUserCurrent(res.data);
        setUserCurrentStorage(res.data);

        return true;
      }
      return false;
    },
    []
  );

  const getUserCurrent = useCallback(async () => {
    const response = await userAuthorized();
    if (response.status === 200) {
      setIsLogged(true);
      const data: IUserCurrent = response.data;
      return data;
    } else {
      const data: IUserCurrent = {
        id: 1,
        name: "",
        email: "",
        status: true,
      };
      return data;
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@u:token");
    localStorage.removeItem("@u:exp");
    localStorage.removeItem("@u:islggg");
    localStorage.removeItem("@u:ub");
    setIsLogged(false);

    setData({} as AuthState);
    navigate("/");
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data, signInLogin, signOut, islogged, userCurrent }}
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
