import React from "react";
import { Header } from "../Header";
import { Container, Main } from "./style";
import GlobalStyle from '../../../styles/global'

type LayoutProps = {
    children:JSX.Element
}

export const Layout = ({children}:LayoutProps) => {
    return(
        <Container>
            <GlobalStyle />
            <Header />
            <Main>
                {children}
            </Main>
        </Container>
    )
}