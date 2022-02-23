import { Meta, Story } from '@storybook/react'
import Spinner from './spinner'

export default {
    title: 'Generic/Spinner',
    component: Spinner
} as Meta<typeof Spinner>

const Template: Story = (args) => <Spinner {...args} />

export const Primary = Template.bind({})
Primary.args = {

}