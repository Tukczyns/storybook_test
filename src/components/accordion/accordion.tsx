import React, { FC, ReactNode, useState } from "react";
import { AccordionProps } from "./accordion.types";
import AccordionItem from "./accordion_item/accordion_item";

const Accordion: FC<AccordionProps> = ({ allowMultiple = false, children }) => {
    const [activeIndex, setActiveIndex] = useState(-1)
    return (
        <div>
            {
                React.Children.map<ReactNode, ReactNode>(children, (child, index) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { allowMultiple, activeIndex, setActiveIndex, index }
                        )
                    }
                })
            }
        </div>
    )
}

export default Accordion