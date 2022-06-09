import React from "react";
import { Container, LabelBox } from "./style";

export interface IInputBProps {
  lfor: string;
  lname: string;
  type: string;
  id: string;
  widht: string;
}

export const InputBox:React.FC<IInputBProps> = (props) => {
  return(
    <Container>
      <LabelBox htmlFor="fname">Nome</LabelBox>
      <InputBox type="text" id="fname" name="name"/>
    </Container>
  )
}