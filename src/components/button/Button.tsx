import React, {FC} from 'react';
import './Button.scss';
import {IButtonProps} from '../../types/Button';
import Loader from '../../assets/loading.svg';

export const Button: FC<IButtonProps> = ({
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