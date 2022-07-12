import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--secondary-bg-color);
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 616px) {
    height: 80px;
  }
`;

export const HeaderBox = styled.div`
  width: 600px;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;

  div {
    button {
      border-style: none;
      background-color: transparent;
      cursor: pointer;
      color: var(--bg-color);
      font-size: 14px;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: var(--secondary-bg-color);
  font-weight: bold;
  background-color: var(--bg-color);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  :hover {
    div {
      display: flex;
    }
  }
`;
export const PerfilUser = styled.div`
  display: none;
  background-color: var(--text-color-secondary);
  position: absolute;
  top: 28px;
  right: 4px;
  color: var(--bg-color);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  justify-content: center;
  max-width: 128px;
  
  ul {
    margin: 1em 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: .5em;
    li {
      display: flex;
      justify-content: space-around;
      text-decoration: none;
      text-align: center;
      a {
        text-decoration: none;
        color: var(--bg-color);
        font-weight: 400;
        padding: 0 1.9em;
        display: flex;
        gap: 4px;
        svg{
          size: 20px;
          width: 20px;
          height: 20px;
        }

        :hover {
          color: var(--text-color-secondary);
        }
      }
      :hover {
        background-color: var(--bg-color);
        color: var(--text-color-secondary);
      }
      button {
        padding: 0px 40px;
        font-weight: 400;
        display: flex;
        gap: 4px;
        :hover{
          color: var(--text-color-secondary);
        }
        svg{
          width: 20px;
          height: 20px;
        }
        }
      }
    }
  }
`;
