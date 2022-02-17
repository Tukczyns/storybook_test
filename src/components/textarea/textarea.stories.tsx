import { Meta, Story } from '@storybook/react'
import { Formik } from 'formik'

import { TextAreaProps } from './textarea.types'
import Textarea from './textarea'

export default {
    title: 'Formik/Textarea',
    component: Textarea
} as Meta<typeof Textarea>

const Template: Story<TextAreaProps> = (args) => <Formik initialValues={{}} onSubmit={() => { }}><Textarea {...args} /></Formik>

export const Primary = Template.bind({})
Primary.args = {
    name: 'test',
    label: 'Label'
}

export const DefaultValue = Template.bind({})
DefaultValue.args = {
    name: 'test',
    label: 'Default value',
    value: 'Default value'
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
    name: 'test',
    label: 'Read only',
    value: 'Some text here',
    readonly: true
}
export const Required = Template.bind({})
Required.args = {
    name: 'test',
    label: 'Read only',
    value: 'Some text here',
    required: true
}