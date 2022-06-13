import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  form{
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 612px){
    font-size: 12px;
    width: 100vw;
    form{
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 0 20px;
      flex-wrap: nowrap;
      width: 94vw;
      font-size: 12px;
      width: 100vw;
    }
  }
`