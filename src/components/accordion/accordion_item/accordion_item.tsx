import React, { FC, useEffect, useState } from "react";
import { AccordionContainer, AccordionContent, AccordionHeadline } from "./accordion_item.styles";
import { AccordionItemProps } from "./accordion_item.types";
import { IoIosArrowDown } from 'react-icons/io'

const AccordionItem: FC<AccordionItemProps> = ({ headline, content, allowMultiple, activeIndex, setActiveIndex, index }) => {
    const [isOpen, setIsOpen] = useState(false)

    const accordionClicked = () => {
        setIsOpen(!isOpen)
        if (!allowMultiple && setActiveIndex && index !== undefined) setActiveIndex(index)
    }

    useEffect(() => {
        if (!allowMultiple) {
            if (activeIndex !== index) setIsOpen(false)
        }
    }, [activeIndex])

    return (
        <AccordionContainer>
            <AccordionHeadline isOpen={isOpen} onClick={accordionClicked}>
                <IoIosArrowDown /> {headline}
            </AccordionHeadline>
            <AccordionContent isOpen={isOpen}>
                {content}
            </AccordionContent>
        </AccordionContainer>
    )
}

export default AccordionItem