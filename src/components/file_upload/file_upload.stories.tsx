import { Meta, Story } from '@storybook/react'
import { Formik } from 'formik'
import FileUpload from './file_upload'
import { FileUploadProps } from './file_upload.types'

export default {
    title: "Formik/File Upload",
    component: FileUpload
} as Meta<typeof FileUpload>

const Template: Story<FileUploadProps> = (args) => <Formik initialValues={{}} onSubmit={() => { }}><FileUpload {...args} /></Formik>

export const Primary = Template.bind({})
Primary.args = {
    name: 'file',
    formats: ['.jpg', '.png', '.pdf'],
    accept: 'image/jpeg, image/png',
    max_size: 4
}