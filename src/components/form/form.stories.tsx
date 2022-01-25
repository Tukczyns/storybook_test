import { ComponentMeta, ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import * as Yup from 'yup'

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

const schema = Yup.object().shape({
    text: Yup.string().required('Pole wymagane').min(12, 'Text musi mieć co najmniej 12 znaków'),
    textarea: Yup.string().required('Pole wymagane'),
    file: Yup.mixed().test('fileSize', "Plik zbyt duży", (value) => {
        if (!value) return true
        // tu sprawdza tylko pierwszy plik, potrezbny loop
        return value[0].size <= 20000000
    }),
    agreement: Yup.bool().oneOf([true], "Zaakceptuj zgodę"),
})

export const FormExample: ComponentStory<typeof Form> = (args) => (
    <Form
        initialValues={{
            text: '',
            select: 'test',
            textarea: '',
            date: new Date(),
            file: null
        }}
        validationSchema={schema}
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

