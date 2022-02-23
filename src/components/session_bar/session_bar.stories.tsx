import { Meta, Story } from '@storybook/react'
import SessionBar from './session_bar'
import { SessionBarProps } from './session_bar.types'

export default {
    title: 'Generic/Session Bar',
    component: SessionBar
} as Meta<typeof SessionBar>

const Template: Story<SessionBarProps> = (args) => <SessionBar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    duration: 10,
    action: () => alert('time passed')
}