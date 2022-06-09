import React from "react";
import { InputBox } from "../../components/InputBox";
import { Text4 } from "../../components/Text4";
import { Container } from "./style";

export const NewUser = () => {
    return(
        
        <Container>
            <Text4 color="var(--text-color-primary)" width="100%">
                Olá, vamos iniciar o cadastro?
            </Text4>
            <InputBox width="253px" type="text" htmlFor="ffistName">
                Nome
            </InputBox>
            <InputBox width="253px" type="text" htmlFor="flastName">
                Sobrenome
            </InputBox>
        </Container>
    )
}