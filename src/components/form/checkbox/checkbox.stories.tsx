import React from 'react'
import { Meta, Story } from '@storybook/react'
import Checkbox from './checkbox'
import { CheckboxProps } from './checkbox.types'
import { Form, Formik } from 'formik'

export default {
    title: 'Formik/Checkbox',
    component: Checkbox,
} as Meta<typeof Checkbox>

const Template: Story<CheckboxProps> = (args) => <Formik initialValues={{}} onSubmit={() => { }}><Checkbox {...args} /></Formik>

export const Primary = Template.bind({})
Primary.args = {
    name: 'test',
    content: "Wyrażam zgodę"
}
export const Required = Template.bind({})
Required.args = {
    name: 'test',
    content: "Wyrażam zgodę",
    required: true
}