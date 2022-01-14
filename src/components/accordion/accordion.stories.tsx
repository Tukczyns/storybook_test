import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react'
import Accordion from './accordion'
import AccordionItem from './accordion_item/accordion_item'

export default {
    title: 'Komunikuje/Accordion',
    component: Accordion,
    // subcomponents: { AccordionItem },
    argTypes: {
        allowMultiple: {
            control: {
                type: 'boolean'
            }
        },
    },
} as ComponentMeta<typeof Accordion>

export const AccordionWithItems: ComponentStory<typeof Accordion> = (args) => (
    <Accordion {...args}>
        <AccordionItem headline='Headline' content='Content' />
        <AccordionItem headline='Headline 2' content='Content 2' />
        <AccordionItem headline='Headline 2' content='Content 2' />
        <AccordionItem headline='Headline 2' content='Content 2' />
    </Accordion>
)

export const AccordionMultiple = AccordionWithItems.bind({})
AccordionMultiple.args = {
    allowMultiple: true
}