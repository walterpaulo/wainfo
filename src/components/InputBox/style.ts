import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid var(--text-color-secondary);
    width: 294px;
    height: 42px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 7px 20px;

    label{
        font-weight: 400;
        margin-bottom: 5px;
    }

    input{
        border-style: none;
        border-bottom: 1px solid var(--text-color-secondary);
        padding: 6px 10px 0px 27px;
        font-size: 16px;

        &:focus {
           /* box-shadow: 0 0 0 0; */
           outline: 0;
        }
    }
`

export const LabelBox = styled.label`

`

export const InputBox = styled.input`

`