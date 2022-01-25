import { MouseEventHandler, FC } from 'react';
import { FormikValues, FormikHelpers } from 'formik';

interface ButtonProps {
    text?: string;
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
    type?: 'text' | 'password' | 'number';
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
    options?: string[];
}

declare const Select: FC<SelectProps>;

interface TextAreaProps {
    name: string;
}

declare const Textarea: FC<TextAreaProps>;

declare enum ColorBoxType {
    PRIMARY = "PRIMARY",
    WARNING = "WARNING",
    DANGER = "DANGER",
    SUCCESS = "SUCCESS"
}
interface ColorBoxesProps {
    text?: string;
    type?: ColorBoxType;
}

declare const ColorBoxes: FC<ColorBoxesProps>;

interface DatepickerProps {
    name: string;
}

declare const Datepicker: FC<DatepickerProps>;

interface FileUploadProps {
    name: string;
}

declare const FileUpload: FC<FileUploadProps>;

interface FormProps {
    initialValues: Object;
    onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>;
}

declare const Form: FC<FormProps>;

interface CheckboxProps {
    name: string;
    content: string;
}

declare const Checkbox: FC<CheckboxProps>;

export { Accordion, AccordionItem, Button, Checkbox, ColorBoxes, Datepicker, FileUpload, Form, Input, Select, Textarea };
