import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useRef, useState } from "react";
import { Button } from "../../ shared /components/Button/inde";
import { InputBox } from "../../ shared /components/InputBox";
import { Text4 } from "../../ shared /components/Text4";
import { Container, InfoLogin } from "./style";
import * as Yup from "yup";
import getValidationErrors from "../../util/getValidationErrors";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../ shared /components/Message";
import { createUser } from "../../ shared /hooks/util";

interface SignUnFormData {
  name: string;
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email().required("Email obrigatório"),
  password: Yup.string()
    .min(6)
    .required("Senha inserir mínimo caractéres"),
});

function Signup() {
  const formRef = useRef<FormHandles>(null);
  const [errors, setErros] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(data: SignUnFormData) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      const res = createUser(data);
      setErros("");
      res
        .then((res) => {
          if (res.status === 401) {
            // `Email de usuários ou Senha incorreta. Tente novamente!`
            return setErros(res.data.errors);
          }
          console.log(res.data.email[0]);
          res.status === 422 && setErros(res.data.email[0]);
          res.status === 201 && setErros("Cadastro com sucesso!");
        })
        .catch((e) => {});
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
