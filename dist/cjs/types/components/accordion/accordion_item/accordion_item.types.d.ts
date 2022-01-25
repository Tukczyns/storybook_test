export interface AccordionItemProps {
    headline?: string;
    content?: string;
    disabled?: boolean;
    allowMultiple?: boolean;
    activeIndex?: number;
    setActiveIndex?: (arg: number) => void;
    index?: number;
}
