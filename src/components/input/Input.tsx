import React, {FC, useState} from 'react';
import './Input.scss';
import {InputProps} from '../../types/Input';

export const Input: FC<InputProps> = ({
                   value,
                   label,
                   onChange,
                   type = 'text',
                   dateSeparator = '/',
                   name,
                   labelClassName,
                   showError = 'always',
                   error,
                   icon,
                   iconPosition = 'right',
                   onClickIcon,
                   placeholder,
                   floatingLabel,
                   ...props}) => {

    const [focus, setFocus] = useState(false)

    const numbersOnly = (value: string) => {
        return value.replaceAll(/[^0-9]+/g, '');
    }

    const dateFormat = (value: string) => {
        const temp = numbersOnly(value)
        switch (temp.length) {
            case 0:
            case 1:
                return temp;
            case 2:
                return temp + dateSeparator;
            case 3:
            case 4:
                return temp.substring(0, 2) +
                    dateSeparator +
                    temp.substring(2, 4);
            case 5:
            case 6:
            case 7:
            case 8:
                return temp.substring(0, 2) +
                    dateSeparator +
                    temp.substring(2, 4) +
                    dateSeparator +
                    temp.substring(4, 8);
            default:
                return value.substring(0, 10);
        }
    }

    const showErrorMessage = () => {
        switch (showError) {
            case 'always': return true;
            case 'onFocus': return focus;
            case 'onValue': return !!value;
        }
    }

    const handleChange = (val: string) => {
        switch (type) {
            case 'date':
                (val.length < value.length) ? onChange(val) : onChange(dateFormat(val));
                break;
            case 'numeric':
                onChange(numbersOnly(val));
                break;
            case 'password':
            case 'text':
                onChange(val);
                break;
        }
    }

    return (
        <div className={'input-container'}>
            {
                !!label &&
                <div className={`
                        label
                        ${labelClassName}
                        ${floatingLabel ? ((focus || value) ? 'top-label' : 'center-label') : ''}
                        ${iconPosition === 'left' ? 'icon-left-label' : ''}
                     `}
                >
                    {label}
                </div>
            }
            {iconPosition === 'left' && <div onClick={onClickIcon} className={'icon-container left'}>{icon}</div>}
            <input
                className={`
                    input
                    ${error && showErrorMessage() ? ' input-error' : ''}
                    ${icon && iconPosition === 'left' ? 'icon-left' : ''}
                    ${icon && iconPosition === 'right' ? 'icon-right' : ''}
                `}
                onChange={ (e) => handleChange(e.target.value)}
                value={value}
                type={type !== 'date' ? type : 'text'}
                name={name}
                placeholder={placeholder}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                {...props}
            />
            {iconPosition === 'right' && <div onClick={onClickIcon} className={'icon-container right'}>{icon}</div>}
            {
                error && showErrorMessage() &&
                <div className='error-label'>
                    {error}
                </div>
            }
        </div>
    )
}
