import {ReactChild} from "react";

export interface InputProps {
    value: string;
    label?: string;
    onChange: (value: string) => any;
    type?: 'numeric' | 'date' | 'text' | 'password';
    dateSeparator?: '/' | '-' | '.';
    dateFormat?: 'yearFirst' | 'yearLast';
    showError?: 'always' | 'onFocus' | 'onValue';
    name?: string;
    labelClassName?: string;
    error?: string;
    icon?: ReactChild;
    iconPosition?: 'left' | 'right';
    onClickIcon?: () => any;
    floatingLabel?: boolean;
    maxLength?: number;
    placeholder?: string;

    // InputHTMLAttributes
    accept?: string;
    alt?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    capture?: boolean | string;
    checked?: boolean;
    crossOrigin?: string;
    disabled?: boolean;
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    height?: number | string;
    list?: string;
    max?: number | string;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    pattern?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number | string;
    width?: number | string;
}