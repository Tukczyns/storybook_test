import { Meta, Story } from '@storybook/react'
import ConfirmPopup from './confirm_popup'
import { ConfirmPopupTypes } from './confirm_popup.types'

export default {
    title: 'Generic/Confirm Popup',
    component: ConfirmPopup
} as Meta<typeof ConfirmPopup>

const Template: Story<ConfirmPopupTypes> = (args) => <ConfirmPopup {...args} />

export const Primary = Template.bind({})
Primary.args = {
    visible: true,
    message: "Czy na pewno chcesz na pewno?",
    cancel: () => console.log("Anuluj"),
    accept: () => console.log("Zatwierdź")
}