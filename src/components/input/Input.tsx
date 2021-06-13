import React, {FC, useState} from 'react';
import './Input.scss';
import {InputProps} from '../../types/Input';

export const Input: FC<InputProps> = ({
                   value,
                   label,
                   onChange,
                   type = 'text',
                   dateSeparator = '/',
                   dateFormat = 'yearLast',
                   name,
                   labelClassName,
                   showError = 'always',
                   error,
                   icon,
                   iconPosition = 'right',
                   onClickIcon,
                   placeholder,
                   floatingLabel,
                   onBlur,
                   onFocus,
                   ...props}) => {

    const [focus, setFocus] = useState(false);

    const numbersOnly = (value: string) => {
        return value.replaceAll(/[^0-9]+/g, '');
    }

    const yearLast = (value: string) => {
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

    const yearFirst = (value: string) => {
        const temp = numbersOnly(value)
        switch (temp.length) {
            case 0:
            case 1:
            case 2:
            case 3:
                return temp;
            case 4:
                return temp + dateSeparator;
            case 5:
            case 6:
                return temp.substring(0, 4) +
                    dateSeparator +
                    temp.substring(4, 6);
            case 7:
            case 8:
                return temp.substring(0, 4) +
                    dateSeparator +
                    temp.substring(4, 6) +
                    dateSeparator +
                    temp.substring(6, 8);
            default:
                return value.substring(0, 10);
        }
    }

    const parseDate = (value: string) => {
        if(dateFormat === 'yearFirst') return yearFirst(value)
        return yearLast(value)
    }

    const showErrorMessage = () => {
        switch (showError) {
            case 'always': return true;
            case 'onFocus': return focus || !!value;
            case 'onValue': return !!value;
        }
    }

    const handleChange = (val: string) => {
        switch (type) {
            case 'date':
                (val.length < value.length) ? onChange(val) : onChange(parseDate(val));
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
        <div className={'bisk-input-container'} style={{marginTop: floatingLabel ? 15 : 0}}>
            {
                !!label &&
                <div className={`
                        bisk-label
                        ${labelClassName}
                        ${floatingLabel ? ((focus || value) ? 'bisk-top-label' : 'bisk-center-label') : ''}
                        ${iconPosition === 'left' ? 'bisk-icon-left-label' : ''}
                     `}
                >
                    {label}
                </div>
            }
            {iconPosition === 'left' && icon && <div onClick={onClickIcon} className={'bisk-icon-container bisk-left'}>{icon}</div>}
            <input
                className={`
                    bisk-input
                    ${error && showErrorMessage() ? ' bisk-input-error' : ''}
                    ${icon && iconPosition === 'left' ? 'bisk-icon-left' : ''}
                    ${icon && iconPosition === 'right' ? 'bisk-icon-right' : ''}
                `}
                onChange={ (e) => handleChange(e.target.value)}
                value={value}
                type={type !== 'date' ? type : 'text'}
                name={name}
                placeholder={placeholder}
                onFocus={(e) => {
                    onFocus && onFocus(e)
                    setFocus(true)
                }}
                onBlur={(e) => {
                    onBlur && onBlur(e)
                    setFocus(false)
                }}
                {...props}
            />
            {iconPosition === 'right' && icon && <div onClick={onClickIcon} className={'bisk-icon-container bisk-right'}>{icon}</div>}
            {
                error && showErrorMessage() &&
                <div className='bisk-error-label'>
                    {error}
                </div>
            }
        </div>
    )
}
