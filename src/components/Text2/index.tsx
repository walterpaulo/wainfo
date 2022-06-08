import React from "react";
import { H2 } from "./style";

export interface ITextProps {
    color?: string;
    children: string;
    size?: string;
}

export const Text2:React.FC<ITextProps>= (props) => {
    return(
        <H2 color={props.color} size={props.size}>
            {props.children}
        </H2>
    )
}