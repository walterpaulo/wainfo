import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useRef, useState } from "react";
import { Button } from "../../ shared /components/Button/inde";
import { InputBox } from "../../ shared /components/InputBox";
import { Container } from "./style";
import * as Yup from "yup";
import getValidationErrors from "../../util/getValidationErrors";
import { Text4 } from "../../ shared /components/Text4";
import { Link } from "react-router-dom";
import Message from "../../ shared /components/Message";
import { loginRequest } from "../../ shared /hooks/util";
import { useAuth } from "../../ shared /hooks/Auth";

interface SignInFormData {
  name: string;
  email: string;
  password: string;
}
const schema = Yup.object().shape({
  email: Yup.string().email().required("Email obrigatório"),
  password: Yup.string().min(6).required("Senha inserir mínimo caractéres"),
});

function Signin() {
  const formRef = useRef<FormHandles>(null);
  const [errors, setErros] = useState("");
  const auth = useAuth()

  async function handleSubmit(data: SignInFormData) {
    setErros("")
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      const res = auth.signInLogin(data)
      
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }
    formRef.current?.reset();
  }
  return (
    <Container>
      <Text4>Login de acesso</Text4>
      <Message text={errors} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputBox name="email" type="text" placeholder="Email" />
        <InputBox name="password" type="password" placeholder="Senha" />
        <Button>Entrar</Button>
      </Form>
      <div>
        <Text4>Não tem conta?</Text4>
        <Link to="/signup">&nbsp;Registre-se</Link>
      </div>
    </Container>
  );
}

export default Signin;
