import { Meta, Story } from '@storybook/react'
import { Formik } from 'formik'
import Datepicker from './datepicker'
import { DatepickerProps } from './datepicker.types'

export default {
    title: 'Formik/Datepicker',
    component: Datepicker
} as Meta<typeof Datepicker>

const Template: Story<DatepickerProps> = (args) => <Formik initialValues={{ 'date': new Date() }} onSubmit={() => { }}><Datepicker {...args} /></Formik>

export const Primary = Template.bind({})
Primary.args = {
    name: 'date',
    label: "Data",
}

export const Disabled = Template.bind({})
Disabled.args = {
    name: 'date',
    label: "Data",
    disabled: true
}