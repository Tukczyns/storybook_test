import { Meta, Story } from '@storybook/react'
import { Formik } from 'formik'
import Select from './select'
import { SelectProps } from './select.types'

export default {
    title: "Formik/Select",
    component: Select
} as Meta<typeof Select>

const Template: Story<SelectProps> = (args) => <Formik initialValues={{ select: '' }} onSubmit={() => { }}>
    <div>
        <Select {...args} />
    </div>
</Formik>

export const Primary = Template.bind({})
Primary.args = {
    name: 'select',
    label: "Placeholder",
    options: [
        {
            key: 'value_1',
            value: 'Wartość 1'
        },
        {
            key: 'value_2',
            value: 'Wartość 2'
        },
    ]
}

export const SelectedValue = Template.bind({})
SelectedValue.args = {
    name: 'select',
    label: "Placeholder",
    options: [
        {
            key: 'value_1',
            value: 'Wartość 1'
        },
        {
            key: 'value_2',
            value: 'Wartość 2'
        },
        {
            key: 'value_3',
            value: 'Wartość 3'
        },
    ],
}
export const Required = Template.bind({})
Required.args = {
    name: 'select',
    label: "Placeholder",
    options: [
        {
            key: 'value_1',
            value: 'Wartość 1'
        },
        {
            key: 'value_2',
            value: 'Wartość 2'
        },
        {
            key: 'value_3',
            value: 'Wartość 3'
        },
    ],
    required: true,
    initialValue: ''
}