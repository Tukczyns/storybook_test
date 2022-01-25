import React, { FC } from "react";
import { StyledErrorMessage } from "./error_message.styles";
import { ErrorMessageProps } from './error_message.types'
import { ErrorMessage as FormikErrorMessage } from "formik";

const ErrorMessage: FC<ErrorMessageProps> = ({ name }) => {
    return (
        <FormikErrorMessage name={name}>
            {msg => (
                <StyledErrorMessage>
                    {msg}
                </StyledErrorMessage>
            )}
        </FormikErrorMessage>
    )
}

export default ErrorMessage