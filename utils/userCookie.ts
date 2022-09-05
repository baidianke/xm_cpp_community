import jsCookie from 'js-cookie';

const COOKIE_CONFIG = { path: '/', domain: '.xiaomawang.com', expires: 7 };
const USER_TOKEN_KEY = 'user_token';
const USER_INFO_KEY = 'user_info';
const USER_ID_KEY = 'user_id';

export const setUserToken = (token: string) => {
  jsCookie.set(USER_TOKEN_KEY, token, COOKIE_CONFIG);
};
export const getUserToken = () => {
  return jsCookie.get(USER_TOKEN_KEY) || '';
};
export function removeUserToken() {
  return jsCookie.remove(USER_TOKEN_KEY);
}

export const setUserInfo = (data: XM_SSO.XM_SSO_USER) => {
  if (!data) return;

  localStorage.setItem(USER_INFO_KEY, JSON.stringify(data));
};
export const getUserInfo = () => {
  const data = localStorage.getItem(USER_INFO_KEY);
  if (data) {
    return JSON.parse(data);
  }
  return {};
};
export const removeUserInfo = () => {
  localStorage.removeItem(USER_INFO_KEY);
};

export const setUserId = (id: number) => {
  jsCookie.set(USER_ID_KEY, '' + id, COOKIE_CONFIG);
};
export const getUserId = () => {
  return jsCookie.get(USER_ID_KEY) || '';
};
export const removeUserId = () => {
  jsCookie.remove(USER_ID_KEY);
};
