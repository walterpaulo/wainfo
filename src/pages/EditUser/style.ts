import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  padding: 2em 1em;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);

  table,
  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
  }
  th,
  td {
    padding: .4em 1em;
  }
`;
