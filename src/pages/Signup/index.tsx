import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useRef, useState } from "react";
import { Button } from "../../ shared /components/Button/inde";
import { InputBox } from "../../ shared /components/InputBox";
import { Text4 } from "../../ shared /components/Text4";
import { Container, InfoLogin } from "./style";
import * as Yup from "yup";
import getValidationErrors from "../../util/getValidationErrors";
import { Link } from "react-router-dom";
import { api } from "../../services/api/api";
import Message from "../../ shared /components/Message";

interface SignUnFormData {
  name: string;
  email: string;
  password: string;
}

function Signup() {
  const formRef = useRef<FormHandles>(null);
  const [errors, setErros] = useState("");

  async function postUser(user: object) {
    const response = await fetch(`${api}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
    const status = response.status;

    return { data, status };
  }

  async function handleSubmit(data: SignUnFormData) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string().email().required("Email obrigatório"),
        password: Yup.string()
          .min(6)
          .required("Senha inserir mínimo caractéres"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      const res = postUser(data);
      setErros("");
      // res.then((res) => {
      //   if (res.status === 401) {

      //     // `Email de usuários ou Senha incorreta. Tente novamente!`
      //     return setErros(
      //       res.data.errors
      //     );
      //   }
      //   res.status === 500 && setErros("Ops! Tenta mais tarde!")
      // }).catch((e)=>{

      // });
      formRef.current?.reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }
  return (
    <Container>
      <Text4>Criar nova conta</Text4>
      <Message text={errors} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputBox name="name" type="text" placeholder="Nome" />
        <InputBox name="email" type="text" placeholder="Email" />
        <InputBox name="password" type="password" placeholder="Senha" />
        <Button>Criar</Button>
      </Form>
      <InfoLogin>
        <Text4>Já tenho conta!</Text4>
        <Link to="/login">&nbsp;Login</Link>
      </InfoLogin>
    </Container>
  );
}

export default Signup;
