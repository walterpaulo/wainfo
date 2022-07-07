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
