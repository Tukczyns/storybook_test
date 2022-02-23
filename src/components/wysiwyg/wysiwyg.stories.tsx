import { Meta, Story } from '@storybook/react'
import Wysiwyg from "./wysiwyg";
import { WysiwygProps } from './wysiwyg.types';

export default {
    title: 'Generic/Wysiwyg',
    component: Wysiwyg
} as Meta<typeof Wysiwyg>

const Template: Story<WysiwygProps> = (args) => <Wysiwyg {...args} />

export const Primary = Template.bind({})
Primary.args = {
    placeholder: 'Wysiwyg editor',
    initialValue: '',
    setValue: () => { }
}
export const InitialValue = Template.bind({})
InitialValue.args = {
    placeholder: 'Wysiwyg editor',
    initialValue: 'Domyślna wartość',
    setValue: () => { }
}