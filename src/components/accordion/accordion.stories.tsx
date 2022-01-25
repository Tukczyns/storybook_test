import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react'
import Accordion from './accordion'
import AccordionItem from './accordion_item/accordion_item'

export default {
    title: 'Generic/Accordion',
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
        <AccordionItem headline='Headline 2'>
            <div>
                <p style={{ fontSize: 24, fontWeight: 900, margin: 0 }}>Test z childrenami</p>
                <div style={{ fontSize: 18, background: 'rgba(0,0,0,.5)', maxWidth: 20 }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi accusamus numquam impedit pariatur aliquam eum amet quibusdam cupiditate, debitis repudiandae perspiciatis explicabo voluptate expedita iusto, ex, dolorum beatae? Ea, quo.
                </div>
            </div>
        </AccordionItem>
        <AccordionItem headline='Headline 2' content='Content 2' />
        <AccordionItem headline='Headline 2' content='Content 2' />
    </Accordion>
)

export const AccordionMultiple = AccordionWithItems.bind({})
AccordionMultiple.args = {
    allowMultiple: true
}