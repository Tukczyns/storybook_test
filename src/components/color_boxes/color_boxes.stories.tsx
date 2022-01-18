import { Meta, Story } from '@storybook/react'
import ColorBoxes from './color_boxes'
import { ColorBoxesProps, ColorBoxType } from './color_boxes.types'

export default {
    title: 'Generic/Color boxes',
    component: ColorBoxes,
    argTypes: {
        type: {
            options: ColorBoxType,
            control: {
                type: 'select'
            }
        }
    }
} as Meta<typeof ColorBoxes>

const Template: Story<ColorBoxesProps> = (args) => <ColorBoxes {...args} />

export const Primary = Template.bind({})
Primary.args = {
    text: "Color button",
    type: ColorBoxType.PRIMARY
}