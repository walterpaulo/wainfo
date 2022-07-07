import { ITextProps } from './index';
import styled from "styled-components";

export const H4 = styled.h4<ITextProps>`
    color: ${prop => prop.color ? prop.color : ''};
    font-weight: 400;
    font-size: ${prop => prop.size ? prop.size : ''} ;
    width: ${prop => prop.width ? prop.width : ''};
    text-align: center;
`