import { FormikHelpers, FormikValues } from "formik";
import React, { FormEvent } from "react";

export interface FormProps {
    initialValues: Object,
    onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>
}