import React from "react";
import { Container, IBoxProps } from "./style";



export const Box:React.FC<IBoxProps> = (props) => {
    return(
        <Container>
            {props.children}
        </Container>
    )
}