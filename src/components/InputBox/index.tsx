import { useField } from "@unform/core";
import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { Container, LabelBox, Input } from "./style";

export interface IInputBProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  type?: string;
  width?: string;
  children?: string;
}

export const InputBox:React.FC<IInputBProps> = ({name, type, width, children, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name)
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return(
    <Container width={width}>
      <LabelBox htmlFor={name}>{children}</LabelBox>
      <Input 
      name={name}
      ref={inputRef}
      type={type? type : "text"}
      {...rest}
      />
      { error && <span className="error">{error}</span> }
    </Container>
  )
}