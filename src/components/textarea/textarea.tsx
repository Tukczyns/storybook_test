import { Field } from "formik";
import React, { FC } from "react";
import { StyledTextareaLabel, TextareaContainer, TextareaStyled } from "./textarea.styles";
import { TextAreaProps } from "./textarea.types";

const Textarea: FC<TextAreaProps> = ({ name }) => {
    return (
        <Field name={name} id="answer" as={(props: any) => (
            <TextareaContainer>
                <TextareaStyled cols="30" id={name} placeholder="&nbsp;" {...props} rows="4"></TextareaStyled>
                <StyledTextareaLabel htmlFor={name}>Label</StyledTextareaLabel>
            </TextareaContainer>
        )} />
    )
}

export default Textarea