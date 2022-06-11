import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "../../components/Box";
import { Form } from '@unform/web'
import { Button } from "../../components/Button/inde";
import { InputBox } from "../../components/InputBox";
import { Text4 } from "../../components/Text4";
import { Container } from "./style";
import { FormHandles } from "@unform/core";
import * as Yup from 'yup';
import getValidationErrors from "../../util/getValidationErrors";


interface SignInFormData {
  ffirtName: string;
  flastName: string;
  femail: string;
  femailRepeat: string;
  fpassword: string;
  fpasswordRepeat: string;
}

export const NewUser = () => {
  const [active, setActive] = useState("formUser")

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: SignInFormData) {
    try {
      const schema = Yup.object().shape({
        ffirtName: Yup.string().required("Informe o nome"),
        flastName: Yup.string().required("Informe o sobrenome"),
        femail: Yup.string().email().required("Informe E-mail"),
        femailRepeat: Yup.string().min(6)
          .oneOf([Yup.ref('femail'), null], "O email inserido não corresponde")
          .required('Confirmar email é necessário'),
        // femailRepeat: Yup.string().email().required("Informe E-mail"),
        fpassword: Yup.string().min(6).required("no mínimo 6 carecteres"),
        fpasswordRepeat: Yup.string().min(6)
          .oneOf([Yup.ref('fpassword'), null], "As senhas não correspondem")
          .required('Confirmar senha é necessária'),
        // fpasswordRepeat: Yup.string().min(6).required("no mínimo 6 carecteres"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      setActive("formAddress")
      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }
  const formUser = ()=>{
    return <>
        <Text4 color="var(--text-color-primary)" width="100%">
          Olá, vamos iniciar o cadastro?
        </Text4>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputBox name="ffirtName" width="253px">
            Nome *
          </InputBox>
          <InputBox name="flastName" width="253px">
            Sobrenome *
          </InputBox>
          <InputBox name="femail" width="100%" type="email" >
            Email *
          </InputBox>
          <InputBox name="femailRepeat" width="100%" type="email" >
            Repita-Email *
          </InputBox>
          <InputBox name="fpassword" width="100%" type="password" >
            Senha *
          </InputBox>
          <InputBox name="fpasswordRepeat" width="100%" type="password">
            Repita-Password *
          </InputBox>
          <Box>
            <Button onClick={()=>{handleSubmit}}>
              Próxima etapa
            </Button>
          </Box>
        </Form>
        
    </>
  }
  const formAddress = () =>{
    return <>
      <Text4 color="var(--text-color-primary)" width="100%">
          Agora, vamos seu endereço?
      </Text4>
      {/* <InputBox width="100%" type="text" name="femailrepeat">
        CEP *
      </InputBox>
      <InputBox width="100%" type="text" name="femailrepeat">
        Rua *
      </InputBox>
      <InputBox width="100%" type="text" name="femailrepeat">
        Complemento *
      </InputBox>
      <InputBox width="253px" type="text" name="ffistName">
        Cidade *
      </InputBox>
      <InputBox width="253px" type="text" name="flastName">
        Estado *
      </InputBox> */}
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