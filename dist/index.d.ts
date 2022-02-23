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
    required?: boolean;
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
    required?: boolean;
}

declare const Select: FC<SelectProps>;

interface TextAreaProps {
    name: string;
    label?: string;
    value?: string;
    readonly?: boolean;
    rows?: string;
    required?: boolean;
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
    required?: boolean;
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
    required?: boolean;
}

declare const Checkbox: FC<CheckboxProps>;

interface WysiwygProps {
    initialValue: string;
    setValue: (arg: string) => void;
    placeholder: string;
}

declare const Wysiwyg: FC<WysiwygProps>;

interface SwitchTypes {
    active: boolean;
    setActive?: (arg: boolean) => void;
    readonly?: boolean;
}

declare const SwitchToggle: FC<SwitchTypes>;

declare const Spinner: FC;

interface SessionBarProps {
    action: () => void;
    duration?: number;
}

declare const SessionRefresh: FC<SessionBarProps>;

interface HtmlRenderProps {
    html: string;
}

declare const HtmlRender: FC<HtmlRenderProps>;

interface ConfirmPopupTypes {
    visible: boolean;
    message: string;
    cancel?: Function;
    accept?: Function;
}

declare const ConfirmPopup: FC<ConfirmPopupTypes>;

interface AlertItemTypes {
    id: string;
    text: string;
    type: 'error' | 'info' | 'success';
}
interface AlertListTypes {
    alerts: AlertItemTypes[];
    setAlerts: () => void;
    removeAlert: (arg: string) => void;
}

declare const AlertList: FC<AlertListTypes>;

export { Accordion, AccordionItem, AlertList, Button, Checkbox, ColorBoxes, ConfirmPopup, Datepicker, FileUpload, Form, HtmlRender, Input, Select, SessionRefresh as SessionBar, Spinner, SwitchToggle as Switch, Textarea, Wysiwyg };
