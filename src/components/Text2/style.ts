import { ITextProps } from './index';
import styled from "styled-components";

export const H2 = styled.h2<ITextProps>`
    color: ${prop => prop.color ? prop.color : ''};
    font-weight: 700;
    font-size: ${prop => prop.size ? prop.size : ''} ;
`