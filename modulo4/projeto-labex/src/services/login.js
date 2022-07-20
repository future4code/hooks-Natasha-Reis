const LOGIN_KEY_STORAGE = "login-token";

export const setUserLooged = (token) => {
  return localStorage.setItem(LOGIN_KEY_STORAGE, token);
};

export const getLoggedUserToken = () => {
  return localStorage.getItem(LOGIN_KEY_STORAGE);
};

export const logoutUser = () => {
  return localStorage.removeItem(LOGIN_KEY_STORAGE);
};
