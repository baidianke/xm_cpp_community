import { createContext } from 'react';

export type UserInfo = XM_SSO.XM_SSO_USER;

export interface UserContextType {
  userInfo: UserInfo | null;
  logout: () => void;
  login: () => void;
  registet: () => void;
}

const UserContext = createContext<UserContextType>({
  userInfo: null,
  logout: () => {},
  login: () => {},
  registet: () => {},
});

export default UserContext;
