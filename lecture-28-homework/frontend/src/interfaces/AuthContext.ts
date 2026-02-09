import type { IUser } from "./User";

export interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setToken: (token: string) => void;
  removeAuth: () => void;
}
