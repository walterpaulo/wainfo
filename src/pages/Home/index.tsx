import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

export const Home = () => {
    return(
        <Container>
            <Link to="/newUser">Novo Usuário</Link>
        </Container>
    )
}