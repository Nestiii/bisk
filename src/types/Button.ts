import {ReactChild} from "react";

export interface IButtonProps {
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
}