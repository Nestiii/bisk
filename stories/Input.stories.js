import React, {useState} from "react";
import {Input} from "../src";
import Hide from "./assets/hide.svg"
import Show from "./assets/show.svg"

export default {
    title: "Input",
    component: Input,
    args: {},
};

const InputWrapper = (props) => {

    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    return <Input
        {...props}
        value={value}
        onChange={setValue}
        onClickIcon={() => setShow(!show)}
        type={props.icon ? (show ? 'text' : 'password') : props.type}
        error={props.label === 'Email' ? (!emailRegex.test(value) ? 'Invalid email' : '') : ''}
        icon={props.icon ? (show ? props.icon : <Show />) : null}
    />
}

const Template = (args) => (
    <div style={{width: 400}}>
        <InputWrapper {...args} />
    </div>
);

export const Base = Template.bind({});

export const Numeric = Template.bind({});
Numeric.args = {
    label: 'Numbers',
    type: 'numeric'
}

export const DateYearLast = Template.bind({});
DateYearLast.args = {
    label: 'Date',
    type: 'date'
}

export const DateYearFirst = Template.bind({});
DateYearFirst.args = {
    label: 'Date',
    type: 'date',
    dateFormat: 'yearFirst'
}

export const CustomDateSeparator = Template.bind({});
CustomDateSeparator.args = {
    label: 'Date',
    type: 'date',
    dateSeparator: '-'
}

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
    label: 'Floating',
    floatingLabel: true,
}

export const Icon = Template.bind({});
Icon.args = {
    label: 'Password',
    icon: <Hide />
}

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
    label: 'Email'
}

export const ErrorOnFocus = Template.bind({});
ErrorOnFocus.args = {
    label: 'Email',
    showError: 'onFocus'
}

export const ErrorOnValue = Template.bind({});
ErrorOnValue.args = {
    label: 'Email',
    showError: 'onValue'
}