import React, {FC} from 'react';
import './Button.scss';
import {ButtonProps} from '../../types/Button';
import Loader from '../../assets/loading.svg';

export const Button: FC<ButtonProps> = ({
                                            disabled,
                                            disabledClassName,
                                            loading,
                                            loadingClassName,
                                            loadingComponent,
                                            className,
                                            backgroundColor,
                                            color,
                                            border,
                                            borderRadius,
                                            width,
                                            height,
                                            label,
                                            onClick,
                                            ...props}) => {

    return (
        <button
            disabled={disabled || loading}
            style={{backgroundColor, color, border, borderRadius, width, height}}
            className={`
                ${className}
                ${disabled ? (disabledClassName || 'disabled') : ''}
                ${loading ? (loadingClassName || 'loading') : ''}
            `}
            onClick={onClick}
            {...props}
        >
            {
                loading ?
                    (loadingComponent || <Loader />) :
                    label
            }
        </button>
    )
}