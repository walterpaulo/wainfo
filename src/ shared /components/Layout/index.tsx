import React from "react";
import { Header } from "../Header";
import { Container, Main } from "./style";
import GlobalStyle from "../../../styles/global";
import { useAuth } from "../../hooks/Auth";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  const auth = useAuth();
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};
