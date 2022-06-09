import React from "react";
import { InputBox } from "../../components/InputBox";
import { Text4 } from "../../components/Text4";
import { Container } from "./style";

export const NewUser = () => {
    return(
        
        <Container>
            <Text4 color="var(--text-color-primary)">
                Olá, vamos iniciar o cadastro?
            </Text4>
            <InputBox type="text" htmlFor="fname" id="fname" >
                Nome
            </InputBox>
        </Container>
    )
}