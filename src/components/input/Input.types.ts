import { FormikErrors } from "formik";

export interface InputProps {
    name: string,
    label?: string,
    pattern?: string,
    max?: number,
    min?: number,
    type?: 'text' | 'password' | 'number' | 'email',
    value?: string,
    readonly?: boolean
}