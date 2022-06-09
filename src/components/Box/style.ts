import styled from "styled-components";

export interface IBoxProps{
  children: any;
}

export const Container = styled.div<IBoxProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
`