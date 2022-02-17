import React, { FC } from "react"
import ErrorMessage from "../error_message/error_message"
import { StyledInput, StyledInputContainer, StyledLabel } from "./Input.styles"
import { InputProps } from "./Input.types"

const Input: FC<InputProps> = ({ label, name, type = 'text', min, max, pattern, value, readonly, required = false }) => {
    return (
        <div>
            <StyledInputContainer>
                <StyledInput id={name} name={name} placeholder="&nbsp;" type={type} pattern={pattern} min={min} max={max} readOnly={readonly} defaultValue={value} />
                <StyledLabel htmlFor={name}>{label}{required && <span>*</span>}</StyledLabel>
            </StyledInputContainer>
            <ErrorMessage name={name} />
        </div>
    )
}

export default Input