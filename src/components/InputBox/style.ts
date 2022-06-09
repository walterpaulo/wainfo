import { IInputBProps } from './index';
import styled from "styled-components";

export const Container = styled.div<IInputBProps | any>`
  border: 1px solid var(--text-color-secondary);
  width: ${prop => prop.width ? prop.width : "294px"};
  height: 42px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 7px 20px;
  margin-top: 10px;
`

export const LabelBox = styled.label`
  font-weight: 400;
  margin-bottom: 5px;

`

export const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid var(--text-color-secondary);
  padding: 6px 10px 0px 27px;
  font-size: 16px;

  &:focus {
    /* box-shadow: 0 0 0 0; */
    outline: 0;
  }
`