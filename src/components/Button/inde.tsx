import React from "react";
import { ButtonFull, IButtonProps } from "./style";

export const Button:React.FC<IButtonProps> = (props) => {
	return(
		<ButtonFull backgroundColor={props.backgroundColor}>
			{props.children}
		</ButtonFull>
	)
}