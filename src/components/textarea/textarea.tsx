import { Field } from "formik";
import React, { FC } from "react";
import ErrorMessage from "../error_message/error_message";
import { MaxLength, StyledTextareaLabel, TextareaContainer, TextareaStyled } from "./textarea.styles";
import { TextAreaProps } from "./textarea.types";

const Textarea: FC<TextAreaProps> = ({ name, readonly = false, value, label, rows = 4, required = false, max = 1000 }) => {
    return (
        <Field name={name} id="answer" as={(props: any) => (
            <TextareaContainer>
                <TextareaStyled cols="30" id={name} readOnly={readonly} defaultValue={value} placeholder="&nbsp;" {...props} rows={rows} maxLength={max}></TextareaStyled>
                <StyledTextareaLabel htmlFor={name}>{label}{required && <span>*</span>}</StyledTextareaLabel>
                <MaxLength>max.: {max} znaków</MaxLength>
                <ErrorMessage name={name} />
            </TextareaContainer >
        )} />
    )
}

export default Textarea