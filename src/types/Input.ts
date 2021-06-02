import {ReactChild} from "react";

export interface InputProps {
    value: string;
    label?: string;
    onChange: (value: string) => any;
    type?: 'numeric' | 'date' | 'text' | 'password';
    dateSeparator?: '/' | '-' | '.';
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
}