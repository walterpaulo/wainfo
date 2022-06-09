import React from "react";
import { H4 } from "./style";

export interface ITextProps {
    color?: string;
    children: string;
    size?: string;
}

export const Text4:React.FC<ITextProps>= (props) => {
    return(
        <H4 color={props.color} size={props.size}>
            {props.children}
        </H4>
    )
}