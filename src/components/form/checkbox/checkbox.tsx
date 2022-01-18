import React, { FC } from "react";
import { CheckboxProps } from "./checkbox.types";
import { Field } from 'formik'
import { CheckboxContainer, CheckboxStyled, CheckboxText } from "./checkbox.styles";
import { BsCheckLg } from 'react-icons/bs'

const Checkbox: FC<CheckboxProps> = ({ name, content }) => {
    return (
        <CheckboxContainer>
            <CheckboxStyled type="checkbox" name={name} id={name} />
            <label htmlFor={name}>
                <BsCheckLg />
            </label>
            <CheckboxText dangerouslySetInnerHTML={{ __html: content }}></CheckboxText>
        </CheckboxContainer>
    )
}

export default Checkbox