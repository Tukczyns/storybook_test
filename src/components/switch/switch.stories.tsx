import { Meta, Story } from '@storybook/react'
import SwitchToggle from "./switch_toggle";
import { SwitchTypes } from './switch.types';

export default {
    title: 'Generic/Switch',
    component: SwitchToggle
} as Meta<typeof SwitchToggle>

const Template: Story<SwitchTypes> = (args) => <SwitchToggle {...args} />

export const Primary = Template.bind({})
Primary.args = {
    active: true
}