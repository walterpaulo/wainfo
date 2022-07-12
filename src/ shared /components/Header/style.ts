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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
export const PerfilUser = styled.div`
  background-color: var(--text-color-secondary);
  position: absolute;
  top: 60px;
  right: 12px;
  color: var(--bg-color);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding: 1em 0;

  ul {
    list-style-type: none;
    li {
      text-decoration: none;
      width: 100%;
      text-align: center;
      a {
        text-decoration: none;
        color: var(--bg-color);
        font-weight: 400;
        width: 100%;
        :hover {
          color: var(--text-color-secondary);
        }
      }
      :hover {
        background-color: var(--bg-color);
        color: var(--text-color-secondary);
      }
      button {
        padding: 1px 40px;
        font-weight: 400;
        width: 100%;
        :hover {
          color: var(--text-color-secondary);
        }
      }
    }
  }
`;
