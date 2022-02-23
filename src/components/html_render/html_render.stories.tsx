import { Meta, Story } from '@storybook/react'
import { HtmlRenderProps } from './html_render.types'
import HtmlRender from './html_render'

export default {
    title: 'Generic/HtmlRender',
    component: HtmlRender
} as Meta<typeof HtmlRender>

const Template: Story<HtmlRenderProps> = (args) => <HtmlRender {...args} />

export const Primary = Template.bind({})
Primary.args = {
    html: '<h1>Hello world</h1><br/><p>Hello there</p>'
}