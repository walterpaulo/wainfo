import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { Container, LabelBox, Input } from "./style";

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from "@unform/core";

interface IInputBProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  type?: string;
  width?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export const InputBox:React.FC<IInputBProps> = ({name, type, width, children, icon: Icon, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name)
  const [isFocused, setIsFocused] = useState(false);
  
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

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
      <LabelBox htmlFor={name}>{children}</LabelBox>
      <Input
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      name={name}
      ref={inputRef}
      type={type? type : "text"}
      {...rest}
      />
      { error && <span className="error">{error}</span> }
    </Container>
  )
}