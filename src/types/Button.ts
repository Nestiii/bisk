import {ReactChild} from "react";

export interface ButtonProps {
    disabled?: boolean;
    disabledClassName?: string;
    loading?: boolean;
    loadingClassName?: string;
    loadingComponent?: ReactChild;
    className?: string;
    backgroundColor?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    label?: string;
    onClick: () => any;

    // ButtonHTMLAttributes
    autoFocus?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string | ReadonlyArray<string> | number;
}