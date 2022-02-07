import { MouseEventHandler, FC } from 'react';
import { FormikValues, FormikHelpers } from 'formik';

interface ButtonProps {
    text?: string;
    loading?: boolean;
    type?: 'button' | 'submit';
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps>;

interface InputProps {
    name: string;
    label?: string;
    pattern?: string;
    max?: number;
    min?: number;
    type?: 'text' | 'password' | 'number' | 'email';
    value?: string;
    readonly?: boolean;
}

declare const Input: FC<InputProps>;

interface AccordionProps {
    allowMultiple?: boolean;
}

declare const Accordion: FC<AccordionProps>;

interface AccordionItemProps {
    headline?: string;
    content?: string;
    disabled?: boolean;
    allowMultiple?: boolean;
    activeIndex?: number;
    setActiveIndex?: (arg: number) => void;
    index?: number;
}

declare const AccordionItem: FC<AccordionItemProps>;

interface SelectProps {
    name: string;
    options?: {
        key: string;
        value: string;
    }[];
    label?: string;
}

declare const Select: FC<SelectProps>;

interface TextAreaProps {
    name: string;
    label?: string;
    value?: string;
    readonly?: boolean;
    rows?: string;
}

declare const Textarea: FC<TextAreaProps>;

interface ColorBoxesProps {
    text?: string;
    type?: 'PRIMARY' | 'WARNING' | 'DANGER' | 'SUCCESS';
}

declare const ColorBoxes: FC<ColorBoxesProps>;

interface DatepickerProps {
    name: string;
    disabled?: boolean;
    label?: string;
}

declare const Datepicker: FC<DatepickerProps>;

interface FileUploadProps {
    name: string;
    text?: string;
    formats?: string[];
    max_size?: number;
    accept?: string;
}

declare const FileUpload: FC<FileUploadProps>;

interface FormProps {
    initialValues: Object;
    onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>;
    validationSchema?: any | (() => any);
}

declare const Form: FC<FormProps>;

interface CheckboxProps {
    name: string;
    content: string;
}

declare const Checkbox: FC<CheckboxProps>;

export { Accordion, AccordionItem, Button, Checkbox, ColorBoxes, Datepicker, FileUpload, Form, Input, Select, Textarea };
