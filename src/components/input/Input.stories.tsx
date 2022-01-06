import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input from './Input'
import { InputProps } from './Input.types';

export default {
    title: "Komunikuje/Input",
    component: Input,
    argTypes: {
        placeholderOnly: {
            control: {
                type: 'boolean'
            }
        }
    }
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />

export const FloatingLabel = Template.bind({})
FloatingLabel.args = {
    label: "Placeholder",
    value: ''
}

