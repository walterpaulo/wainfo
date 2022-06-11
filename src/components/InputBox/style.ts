import styled, { css } from "styled-components";

interface ICantainerProps{
  isErrored: boolean;
  isFocused: boolean;
  width: string;
}

export const Container = styled.div<ICantainerProps | any>`
  border: 1px solid var(--text-color-secondary);
  width: ${prop => prop.width ? prop.width : "294px"};
  height: 42px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 7px 20px;
  margin-top: 10px;
  position: relative;

  ${props =>
    props.isErrored &&
    css`
      /* border-color var(--text-color-primary); */
    `}
    
  ${props =>
  props.isFocused &&
  css`
    border-color var(--text-color-primary);
  `}
`

export const LabelBox = styled.label`
  font-weight: 400;
  margin-bottom: 5px;

`

export const Input = styled.input`
  border-style: none;
  padding: 6px 10px 0px 27px;
  font-size: 16px;
  color: var(--text-color-secondary);

  &:focus {
    /* box-shadow: 0 0 0 0; */
    outline: 0;
  }
`
export const Error = styled.div`
  /* position: absolute;
  right: 10px; */
  cursor: pointer;
  svg{
    position: absolute;
    right: 10px;
    top: 10px;
  }
`
export const P = styled.p`
  position: absolute;
  top: -20px;
  color: var(--text-color-primary);
  font-weight: 400;
`