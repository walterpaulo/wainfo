import React from "react";
import { useAuth } from "../../hooks/Auth";
import { Header } from "../Header";
import { Container, Main } from "./style";
import GlobalStyle from "../../../styles/global";

type LayoutProps = {
  children: JSX.Element;
};

export const LayoutProtect = ({ children }: LayoutProps) => {
  const auth = useAuth();

  if (!auth.user) {
    return <h1>Você não tem acesso</h1>;
  } else {
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <Main>{children}</Main>
      </Container>
    );
  }
};
