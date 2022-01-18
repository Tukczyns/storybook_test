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
    name: 'test'
}