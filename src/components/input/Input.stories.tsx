import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input from './Input'
import { InputProps } from './Input.types';
import { Formik } from 'formik';

export default {
    title: "Formik/Input",
    component: Input,
    argTypes: {
        type: {
            options: ['text', 'password', 'number'],
            control: {
                type: 'select'
            }
        }
    }
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Formik initialValues={{}} onSubmit={() => { }}><Input {...args} /></Formik>

export const FloatingLabel = Template.bind({})
FloatingLabel.args = {
    label: "Placeholder",
    name: 'Placeholder',
}
export const MaxLength = Template.bind({})
MaxLength.args = {
    label: "Placeholder",
    name: 'Placeholder',
    max: 100
}

export const DefaultValue = Template.bind({})
DefaultValue.args = {
    label: "Placeholder",
    name: 'Placeholder',
    value: 'Default value'
}

export const Required = Template.bind({})
Required.args = {
    label: "Placeholder",
    name: 'Placeholder',
    required: true
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
    label: "Placeholder",
    name: 'Placeholder',
    value: 'Default value',
    readonly: true
}