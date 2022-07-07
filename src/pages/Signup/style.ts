import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  div:nth-child(0) {
    background-color: red;
  }
  h4 {
    margin-bottom: 1em;
  }
  div:nth-child(3) {
    margin-top: 0.3em;
    display: flex;
  }

  form {
    display: flex;
    flex-direction: column;
    div {
      margin-bottom: 0.6em;
      width: calc(100% - 42px);
    }
    button {
      width: 100%;
    }
  }
`;

export const InfoLogin = styled.div`
  font-size: 1em;
  display: flex;
  width: 100%;
  a {
    text-decoration: none;
    color: var(--secondary-bg-color);
  }
`;
