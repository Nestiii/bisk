import React from "react";
import {Button} from "../src";
import CustomLoader from './assets/custom-loading.svg';

export default {
    title: "Button",
    component: Button,
    args: {},
};

const Template = (args) => (
    <div style={{width: 200}}>
        <Button {...args} label={'Bisk'} />
    </div>
);

export const Base = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
}

export const Loading = Template.bind({});
Loading.args = {
    loading: true
}

export const CustomLoadingComponent = Template.bind({});
CustomLoadingComponent.args = {
    loading: true,
    loadingComponent: <CustomLoader />
}
