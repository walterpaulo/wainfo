import styled from "styled-components";

export const Container = styled.div`
  h4{
    margin-bottom: 1em;
  }
  div:nth-child(3){
    margin-top: .3em;
    /* background-color: red; */
    display: flex;
    h4{
      font-size: 1em;
    }
    a{
      text-decoration: none;
      color: var(--secondary-bg-color);
    }
  }
  form{
    display: flex;
    flex-direction: column;
    div{
      margin-bottom: .6em;
    }
    button{
      width: 100%;
    }
  }
`