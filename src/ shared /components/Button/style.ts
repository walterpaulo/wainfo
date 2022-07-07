import React from "react";
import styled from "styled-components";

export interface IButtonProps {
  backgroundColor?: string;
  children: string;
  onClick?: any;
}
export const ButtonFull = styled.button<IButtonProps>`
  background-color: ${(prop) =>
    prop.backgroundColor ? prop.backgroundColor : "var(--text-color-primary)"};
  border-style: none;
  /* width: 212px; */
  height: 59px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  color: var(--border-color-white-clear);
  border-radius: 6px;
  display: block;
  padding: 15px 45px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #fff;
    box-shadow: 0 0 5px var(--text-color-secondary);
  }
  @media (max-width: 612px) {
    /* width: 98vw; */
    /* margin: 0 10px; */
  }
`;
