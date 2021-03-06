import React, { FC } from "react";
import Theme from "../theme/theme";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ text = 'Button', size = 'medium', primary = true, onClick, disabled = false }) => {
    return (
        <StyledButton type="button" disabled={disabled} primary={primary} onClick={onClick} size={size}>
            {text}
        </StyledButton>
    )
}

export default Button