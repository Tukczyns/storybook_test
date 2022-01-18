import { Formik, Form as FormInner } from "formik";
import React, { FC } from "react";
import { FormProps } from "./form.types";

const Form: FC<FormProps> = ({ children, initialValues, onSubmit }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <FormInner>
                {children}
            </FormInner>
        </Formik>
    )
}

export default Form