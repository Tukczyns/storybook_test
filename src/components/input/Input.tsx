import React, { FC } from "react"
import { StyledInput, StyledInputContainer, StyledLabel } from "./Input.styles"
import { InputProps } from "./Input.types"

const Input: FC<InputProps> = ({ label, value, setValue, placeholderOnly }) => {
    return (
        <React.Fragment>
            {placeholderOnly ?
                <StyledInputContainer>
                    <StyledInput id="test" placeholder={label} value={value} onBlur={e => setValue && setValue(e.target.value)} />
                </StyledInputContainer>
                :
                <StyledInputContainer>
                    <StyledInput id="test" placeholder="&nbsp;" value={value} onBlur={e => setValue && setValue(e.target.value)} />
                    <StyledLabel htmlFor="test">{label}</StyledLabel>
                </StyledInputContainer>
            }
        </React.Fragment>
    )
}

export default Input