import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button/inde";
import { InputBox } from "../../components/InputBox";
import { Text4 } from "../../components/Text4";
import { Container } from "./style";

export const NewUser = () => {
  const [active, setActive] = useState("formUser")

  const formUser = ()=>{
    return <>
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
          <Button onClick={()=>{setActive("formAddress")}}>
            Próxima etapa
          </Button>
        </Box>
    </>
  }
  const formAddress = () =>{
    return <>
      <Text4 color="var(--text-color-primary)" width="100%">
          Agora, vamos seu endereço?
      </Text4>
      <InputBox width="100%" type="text" htmlFor="femailrepeat">
        CEP *
      </InputBox>
      <InputBox width="100%" type="text" htmlFor="femailrepeat">
        Rua *
      </InputBox>
      <InputBox width="100%" type="text" htmlFor="femailrepeat">
        Complemento *
      </InputBox>
      <InputBox width="253px" type="text" htmlFor="ffistName">
        Cidade *
      </InputBox>
      <InputBox width="253px" type="text" htmlFor="flastName">
        Estado *
      </InputBox>
      <Box>
        <Button backgroundColor="var(--text-color-secondary)" onClick={()=>{setActive("formFinish")}}>
          Pular
        </Button>
        <Button onClick={()=>{setActive("formFinish")}}>
          Pronto
        </Button>
      </Box>
    </>
  }
  const formFinish = () =>{
    return <>
      <Text4 color="var(--text-color-primary)" width="100%">
          Cadastrado efetuado com sucesso!
      </Text4>
          <Link to="/">Home</Link>
    </>
  }
  return(
    <Container>
      {active === "formUser" && formUser()}
      {active === "formAddress" && formAddress()}
      {active === "formFinish" && formFinish()}
    </Container>
    
  )
}