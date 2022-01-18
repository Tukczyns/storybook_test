import { Meta, Story } from '@storybook/react'
import { Formik } from 'formik'
import Select from './select'
import { SelectProps } from './select.types'

export default {
    title: "Formik/Select",
    component: Select
} as Meta<typeof Select>

const Template: Story<SelectProps> = (args) => <Formik initialValues={{}} onSubmit={() => { }}><Select {...args} /></Formik>

export const Primary = Template.bind({})
Primary.args = {
    name: 'select',
    options: [
        'Option 1',
        'Option 2'
    ]
}