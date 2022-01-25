import { Field } from "formik";
import React, { FC } from "react";
import ErrorMessage from "../error_message/error_message";
import { StyledTextareaLabel, TextareaContainer, TextareaStyled } from "./textarea.styles";
import { TextAreaProps } from "./textarea.types";

const Textarea: FC<TextAreaProps> = ({ name, readonly = false, value, label }) => {
    return (
        <Field name={name} id="answer" as={(props: any) => (
            <TextareaContainer>
                <TextareaStyled cols="30" id={name} readOnly={readonly} defaultValue={value} placeholder="&nbsp;" {...props} rows="4"></TextareaStyled>
                <StyledTextareaLabel htmlFor={name}>{label}</StyledTextareaLabel>
                <ErrorMessage name={name} />
            </TextareaContainer >
        )} />
    )
}

export default Textarea