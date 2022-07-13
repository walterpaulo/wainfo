import { api } from "../../services/api/api";

export const createUser = async (user: object) => {
  const response = await fetch(`${api}/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  const status = response.status;

  return { data, status };
};

export function getUserLocalStorage() {
  const tokenJson = localStorage.getItem("@u:token");
  const expJson = localStorage.getItem("@u:exp");
  const islgggJson = localStorage.getItem("@u:islggg");
  const userJson = localStorage.getItem("@u:ub");

  if (!tokenJson || !expJson || !islgggJson || !userJson) {
    return null;
  }

  const token = JSON.parse(tokenJson);
  const exp = JSON.parse(expJson);
  const islggg = JSON.parse(islgggJson);
  const userObject = JSON.parse(userJson);

  return { token, exp, islggg, userObject };
}

export function setUserCurrentStorage(obj: object) {
  localStorage.setItem("@u:ub", JSON.stringify(obj));
}

export function setUserLocalStorage(obj: {
  token: string;
  exp: string;
  islggg: boolean;
}) {
  localStorage.setItem("@u:token", JSON.stringify(obj.token));
  localStorage.setItem("@u:exp", JSON.stringify(obj.exp));
  localStorage.setItem("@u:islggg", JSON.stringify(obj.islggg));
}

export const loginRequest = async (user: object) => {
  const response = await fetch(`${api}/auth/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  const status = response.status;

  return { data, status };
};

export const userAuthorized = async (token?: string) => {
  const getLocal = getUserLocalStorage();
  const response = await fetch(`${api}/user`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + (getLocal?.token || token),
    },
  });
  const data = await response.json();
  const status = response.status;

  return { data, status };
};
