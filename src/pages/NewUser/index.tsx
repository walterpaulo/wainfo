import React from "react";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button/inde";
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
                Nome *
            </InputBox>
            <InputBox width="253px" type="text" htmlFor="flastName">
                Sobrenome *
            </InputBox>
            <InputBox width="100%" type="email" htmlFor="femail">
                Email *
            </InputBox>
            <InputBox width="100%" type="email" htmlFor="femailrepeat">
                Repita-Email *
            </InputBox>
            <InputBox width="100%" type="password" htmlFor="fpassword">
                Senha *
            </InputBox>
            <InputBox width="100%" type="text" htmlFor="fpasswordrepeat">
                Repita-Password *
            </InputBox>
            <Box>
                <Button>
                    Próxima etapa
                </Button>
            </Box>
        </Container>
    )
}