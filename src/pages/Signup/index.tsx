import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useRef } from "react";
import { Button } from "../../ shared /components/Button/inde";
import { InputBox } from "../../ shared /components/InputBox";
import { Text4 } from "../../ shared /components/Text4";
import { Container } from "./style";
import * as Yup from "yup";
import getValidationErrors from "../../util/getValidationErrors";
import { Link } from "react-router-dom";
import { api } from "../../services/api/api";

interface SignUnFormData {
  email: string;
  password: string;
}

function Signup() {
  const formRef = useRef<FormHandles>(null);

  async function postUser(data: any) {
    const response = await fetch(api+"/users", {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
      },
    });
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
      // Validation passed
      const obj = data
      console.log(data)
      const res = postUser(obj)
      console.log(res);


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
      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputBox name="name" type="text" placeholder="Nome" />
        <InputBox name="email" type="text" placeholder="Email" />
        <InputBox name="password" type="password" placeholder="Senha" />
        <Button>Criar</Button>
      </Form>
      <div>
        <Text4>Já tenho conta!</Text4>
        <Link to="/login">&nbsp;Login</Link>
      </div>
    </Container>
  );
}

export default Signup;
