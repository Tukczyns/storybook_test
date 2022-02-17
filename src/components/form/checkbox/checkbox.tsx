import React, { FC } from "react";
import { CheckboxProps } from "./checkbox.types";
import { Field } from 'formik'
import { CheckboxContainer, CheckboxRequired, CheckboxStyled, CheckboxText } from "./checkbox.styles";
import { BsCheckLg } from 'react-icons/bs'
import ErrorMessage from "../../error_message/error_message";

const Checkbox: FC<CheckboxProps> = ({ name, content, required = false }) => {
    return (
        <div>
            <CheckboxContainer>
                <CheckboxStyled type="checkbox" name={name} id={name} />
                <label htmlFor={name}>
                    <div>
                        <BsCheckLg />
                    </div>
                </label>
                <CheckboxText dangerouslySetInnerHTML={{ __html: content }}></CheckboxText>
                {required && <CheckboxRequired>*</CheckboxRequired>}
            </CheckboxContainer>
            <ErrorMessage name={name} />
        </div>
    )
}

export default Checkbox