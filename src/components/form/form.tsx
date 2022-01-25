import { Formik, Form as FormInner } from "formik";
import React, { FC, ReactNode } from "react";
import { FormProps } from "./form.types";

const Form: FC<FormProps> = ({ children, initialValues, onSubmit, validationSchema }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ errors, touched }) => (
                <FormInner>
                    {
                        React.Children.map<ReactNode, ReactNode>(children, (child, index) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child, { errors, touched, index }
                                )
                            }
                        })
                    }
                </FormInner>
            )}
        </Formik>
    )
}

export default Form