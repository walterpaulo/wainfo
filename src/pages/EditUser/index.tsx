import React from "react";
import { LayoutProtect } from "../../ shared /components/LayoutProtect";
import { Text2 } from "../../ shared /components/Text2";
import { Text4 } from "../../ shared /components/Text4";
import { useAuth } from "../../ shared /hooks/Auth";
import { Container } from "./style";

function EditUser() {
  const auth = useAuth();
  const userCurrent = auth.userCurrent;
  return (
    <LayoutProtect>
      <Container>
        Olá {userCurrent.name},
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userCurrent.name}</td>
              <td>{userCurrent.email}</td>
              <td>{userCurrent.status}</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </LayoutProtect>
  );
}

export default EditUser;
