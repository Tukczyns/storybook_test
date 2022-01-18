import { MouseEventHandler } from "react";

export interface ButtonProps {
    text?: string,
    type?: 'button' | 'submit',
    primary?: boolean,
    disabled?: boolean,
    size?: 'small' | 'medium' | 'large',
    onClick?: MouseEventHandler<HTMLButtonElement>
}