import styled from "styled-components";

type TProp = {
  color: string;
};

export const Container = styled.div<TProp>`
  padding: 1em 0.8em;
  position: relative;
  display: flex;

  background-color: rgb(253, 237, 237);
  border-radius: 4px;
  color: ${(prop) => (prop.color ? prop.color : "rgb(99, 39, 38)")};
  svg:nth-child(1) {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 99;
    cursor: pointer;
  }
  svg {
    margin-right: 0.2em;
  }
  p {
    letter-spacing: 1px;
    word-spacing: 4px;
  }
`;
