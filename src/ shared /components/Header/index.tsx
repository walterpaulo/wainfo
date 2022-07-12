import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { Text2 } from "../Text2";
import { H2 } from "../Text2/style";
import { Avatar, Container, HeaderBox, PerfilUser } from "./style";

export const Header = () => {
  const auth = useAuth();

  return (
    <Container>
      <HeaderBox>
        <Link to="/home">
          <Text2 size="40px" color="var(--bg-color)">
            wainfo
          </Text2>
        </Link>
        <div>
          {auth.islogged && (
            <Avatar>
              wp
              <PerfilUser>
                <ul>
                  <li>
                    <Link to="/newUser">Editar</Link>
                  </li>
                  <li>
                    <button onClick={auth.signOut}>Sair</button>
                  </li>
                </ul>
              </PerfilUser>
            </Avatar>
          )}
        </div>
      </HeaderBox>
    </Container>
  );
};
