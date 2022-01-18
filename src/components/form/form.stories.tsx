import { ComponentMeta, ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import Form from './form'
import Checkbox from './checkbox/checkbox'
import Button from '../button/Button'
import Input from '../input/Input'
import Select from '../select/select'
import FileUpload from '../file_upload/file_upload'
import Textarea from '../textarea/textarea'
import Datepicker from '../datepicker/datepicker'
export default {
    title: "Formik/Form",
    component: Form
} as ComponentMeta<typeof Form>

export const FormExample: ComponentStory<typeof Form> = (args) => (
    <Form
        initialValues={{
            text: 'Example text',
            select: 'test',
            textarea: '',
            date: '',
            file: null
        }}
        onSubmit={async (values) => console.log(values)}
    >
        <Input name="text" label='Text' />
        <Textarea name="textarea" />
        <Select name='select' options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} />
        <FileUpload name="file" />
        <Datepicker name="date" />
        <Checkbox name="agreement" content='Wyrażam zgodę na <a href="#">zgodę</a>' />
        <Button type='submit' text='Wyślij'></Button>
    </Form>
)

