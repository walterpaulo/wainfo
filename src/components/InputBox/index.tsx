import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { Container, LabelBox, Input, Error, P } from "./style";

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from "@unform/core";

interface IInputBProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  type?: string;
  width?: string;
  handle?: boolean;
  max?: number;
  icon?: React.ComponentType<IconBaseProps>;
}

export const InputBox:React.FC<IInputBProps> = ({name, type, width, children, handle, max, icon: Icon, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name)
  const [isFocused, setIsFocused] = useState(false);
  const [capture, setCapture] = useState(false);
  
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    handle && setCapture(true)
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleMaskCEP:any = (e: any) =>{
    const value = e.target.value
    const object = e.target || e.srcElement;
    const cepInput:any = document.querySelector("#"+object.id);
    
    if(capture && value.length == 8){
      const CEP = value.replace(/[^\d]/g, "").replace(/(\d{5})(\d{3})/, "$1-$2")
      console.log(CEP, value +' '+ '#'+object.id)
      cepInput.value = CEP
    } 
  }

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
  }, [fieldName, registerField, error])

  return(
    <Container isErrored={!!error} isFocused={isFocused} width={width}>
      {error && (
        <Error title={error}>
          <P>{error}</P>
          <FiAlertCircle color="var(--text-color-primary)" size={20} />
        </Error>
      )}
      <LabelBox htmlFor={name}>{children}</LabelBox>
      <Input
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onChange={handleMaskCEP}
      name={name}
      ref={inputRef}
      id={"i"+name}
      maxLength={max}
      type={type? type : "text"}
      {...rest}
      />
    </Container>
  )
}