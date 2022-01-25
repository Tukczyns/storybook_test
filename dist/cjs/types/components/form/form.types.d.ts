import { FormikHelpers, FormikValues } from "formik";
export interface FormProps {
    initialValues: Object;
    onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>;
}
