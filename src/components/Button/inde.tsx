import React from "react";
import { ButtonFull, IButtonProps } from "./style";

export const Button:React.FC<IButtonProps> = (props) => {
	return(
		<ButtonFull onClick={props.onClick} backgroundColor={props.backgroundColor}>
			{props.children}
		</ButtonFull>
	)
}