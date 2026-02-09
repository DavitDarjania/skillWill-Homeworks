import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { IUser } from "../../interfaces/User";
import type { IAuthContext } from "../../interfaces/AuthContext";
import { $axios } from "../../axios/axios";

const Context = createContext<IAuthContext>({} as IAuthContext);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const setToken = (token: string) => {
    localStorage.setItem("accessToken", `Bearer ${token}`);
  };
  const removeAuth = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    $axios.get("/refresh").then((res) => {
      setUser(res.data.user);
      setToken(res.data.accessToken);
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      setToken,
      removeAuth,
    }),
    [user, setUser, setToken, removeAuth],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useUserContext = () => {
  const contextValue = useContext<IAuthContext>(Context);
  if (!contextValue) {
    throw new Error("Accessing outside the provider");
  }
  return contextValue;
};
