import { Meta, Story } from '@storybook/react'
import AlertList from './alert_list'
import { AlertListTypes } from './alert_list.types'

export default {
    title: "Generic/Alert List",
    component: AlertList
} as Meta<typeof AlertList>

const Template: Story<AlertListTypes> = (args) => <AlertList {...args} />

export const Primary = Template.bind({})
Primary.args = {
    alerts: [
        {
            id: '1',
            text: 'Error',
            type: 'error'
        },
        {
            id: '2',
            text: 'Info',
            type: 'info'
        },
        {
            id: '3',
            text: 'Message',
            type: 'success'
        }
    ],
    setAlerts: () => { },
    removeAlert: (arg) => { }
}