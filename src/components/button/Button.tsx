import React, { FC } from "react";
import Spinner from "./spinner/spinner";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ text = 'Button', type = 'button', size = 'medium', primary = true, onClick, disabled = false, loading = false }) => {
    return (
        <StyledButton type={type} disabled={disabled} primary={primary} onClick={onClick} size={size}>
            {loading ? <Spinner /> : text}
        </StyledButton>
    )
}

export default Button