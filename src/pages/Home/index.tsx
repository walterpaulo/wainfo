import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ shared /components/Button/inde";
import { LayoutProtect } from "../../ shared /components/LayoutProtect";
import { useAuth } from "../../ shared /hooks/Auth";
import { Container } from "./style";

export const Home = () => {
  const auth = useAuth();

  return (
    <LayoutProtect>
      <Container>home</Container>
    </LayoutProtect>
  );
};
