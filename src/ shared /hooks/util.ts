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

  if (!tokenJson || !expJson) {
    return null;
  }

  const token = JSON.parse(tokenJson);
  const exp = JSON.parse(expJson);

  return { token, exp };
}

export function setUserLocalStorage(obj: { token: string; exp: string }) {
  localStorage.setItem("@u:token", JSON.stringify(obj.token));
  localStorage.setItem("@u:exp", JSON.stringify(obj.exp));
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
