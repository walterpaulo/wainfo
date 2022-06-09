import React from "react";
import { Container, LabelBox, Input } from "./style";

export interface IInputBProps {
  htmlFor?: string;
  type?: string;
  width?: string;
  children?: string;
}

export const InputBox:React.FC<IInputBProps> = (props) => {
  return(
    <Container width={props.width}>
      <LabelBox htmlFor={props.htmlFor}>{props.children}</LabelBox>
      <Input type={props.type} id={props.htmlFor} name={props.htmlFor} />
    </Container>
  )
}