import React from "react";
import { H4 } from "./style";

export interface ITextProps {
    color?: string;
    children: string;
    size?: string;
    width?: string;
}

export const Text4:React.FC<ITextProps>= (props) => {
    return(
        <H4 color={props.color} size={props.size} width={props.width}>
            {props.children}
        </H4>
    )
}