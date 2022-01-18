import React, { FC } from "react"
import { StyledInput, StyledInputContainer, StyledLabel } from "./Input.styles"
import { InputProps } from "./Input.types"

const Input: FC<InputProps> = ({ label, name, type = 'text' }) => {
    return (
        <StyledInputContainer>
            <StyledInput id={name} name={name} placeholder="&nbsp;" type={type} />
            <StyledLabel htmlFor={name}>{label}</StyledLabel>
        </StyledInputContainer>
    )
}

export default Input