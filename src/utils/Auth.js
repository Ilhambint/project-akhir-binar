import Cookies from "js-cookie";

export const login = (token) => {
  Cookies.set("SeconhandToken", token);
  return true;
};

export const logout = () => {
  Cookies.remove("SeconhandToken");
};

export const isLogin = () => {
  if (Cookies.get("SeconhandToken")) {
    return true
  }
  return false
};