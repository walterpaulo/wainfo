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

  if (!tokenJson || !expJson || !islgggJson) {
    return null;
  }

  const token = JSON.parse(tokenJson);
  const exp = JSON.parse(expJson);
  const islggg = JSON.parse(islgggJson);

  return { token, exp, islggg };
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