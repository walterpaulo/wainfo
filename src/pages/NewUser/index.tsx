import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "../../ shared /Box";
import { Form } from "@unform/web";
import { Button } from "../../ shared /components/Button/inde";
import { InputBox } from "../../ shared /components/InputBox";
import { Text4 } from "../../ shared /components/Text4";
import { Container } from "./style";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from "../../util/getValidationErrors";
import { LayoutProtect } from "../../ shared /components/LayoutProtect";

interface IUserInFormData {
  ffirtName: string;
  flastName: string;
  femail: string;
  femailRepeat: string;
  fpassword: string;
  fpasswordRepeat: string;
}
interface IAddressFormData {
  fcep: number;
  flogradouro: string;
  fcomplement: string;
  fcity: string;
  fuf: string;
}

export const NewUser = () => {
  const [active, setActive] = useState("formUser");
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: IUserInFormData) {
    try {
      const schema = Yup.object().shape({
        ffirtName: Yup.string().required("Informe o nome"),
        flastName: Yup.string().required("Informe o sobrenome"),
        femail: Yup.string().email().required("Informe E-mail"),
        femailRepeat: Yup.string()
          .min(6)
          .oneOf([Yup.ref("femail"), null], "O email inserido não corresponde")
          .required("Confirmar email é necessário"),
        fpassword: Yup.string().min(6).required("no mínimo 6 carecteres"),
        fpasswordRepeat: Yup.string()
          .min(6)
          .oneOf([Yup.ref("fpassword"), null], "As senhas não correspondem")
          .required("Confirmar senha é necessária"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      setActive("formAddress");
      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
    }
  }
  async function handleAddressSubmit(data: IAddressFormData) {
    try {
      const schema = Yup.object().shape({
        fcep: Yup.string()
          .min(9, "O cep deve ter no mínimo 8 caracteres")
          .max(9, "O cep deve ter no máximo 8 caracteres")
          .required("Informe o CEP"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      setActive("formFinish");
      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        setActive("formAddress");
        return;
      }
    }
  }
  const listFields = [
    { name: "ffirtName", width: "253px", type: "text", value: "Nome *" },
    { name: "flastName", width: "253px", type: "text", value: "Sobrenome *" },
    { name: "femail", width: "100%", type: "email", value: "Email *" },
    {
      name: "femailRepeat",
      width: "100%",
      type: "email",
      value: "Repita o email *",
    },
    { name: "fpassword", width: "100%", type: "password", value: "Senha *" },
    {
      name: "fpasswordRepeat",
      width: "100%",
      type: "password",
      value: "Repita a senha *",
    },
  ];
  const formUser = () => {
    return (
      <>
        <Text4 color="var(--text-color-primary)" width="100%">
          Olá, vamos iniciar o cadastro?
        </Text4>
        <Form ref={formRef} onSubmit={handleSubmit}>
          {listFields.map((field, i) => (
            <InputBox
              key={i}
              name={field.name}
              width={field.width}
              type={field.type}
            >
              {field.value}
            </InputBox>
          ))}
          <Box>
            <Button
              onClick={() => {
                handleSubmit;
              }}
            >
              Próxima etapa
            </Button>
          </Box>
        </Form>
      </>
    );
  };
  const listfieldsAddress = [
    {
      name: "fcep",
      handle: true,
      max: 9,
      width: "100%",
      type: "text",
      value: "CEP *",
    },
    { name: "flogradouro", width: "100%", type: "text", value: "Rua" },
    { name: "fcomplement", width: "100%", type: "text", value: "Complemento" },
    { name: "fcity", width: "253px", type: "text", value: "Cidade" },
    { name: "fuf", width: "253px", type: "text", value: "Estado" },
  ];
  const formAddress = () => {
    return (
      <>
        <Text4 color="var(--text-color-primary)" width="100%">
          Agora, vamos seu endereço?
        </Text4>
        <Form ref={formRef} onSubmit={handleAddressSubmit}>
          {listfieldsAddress.map((field, i) => (
            <InputBox
              key={i}
              handle={field.handle}
              max={field.max}
              width={field.width}
              type={field.type}
              name={field.name}
            >
              {field.value}
            </InputBox>
          ))}
          <Box>
            <Button
              backgroundColor="var(--text-color-secondary)"
              onClick={() => {
                setActive("formFinish");
              }}
            >
              Pular
            </Button>
            <Button
              onClick={() => {
                () => {
                  handleAddressSubmit;
                };
              }}
            >
              Pronto
            </Button>
          </Box>
        </Form>
      </>
    );
  };
  const formFinish = () => {
    return (
      <>
        <Text4 color="var(--text-color-primary)" width="100%">
          Cadastrado efetuado com sucesso!
        </Text4>
        <Link to="/">Home</Link>
      </>
    );
  };
  return (
    <LayoutProtect>
      <Container>
        {active === "formUser" && formUser()}
        {active === "formAddress" && formAddress()}
        {active === "formFinish" && formFinish()}
      </Container>
    </LayoutProtect>
  );
};
