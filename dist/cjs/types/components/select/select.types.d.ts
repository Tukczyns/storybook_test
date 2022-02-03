export interface SelectProps {
    name: string;
    options?: {
        key: string;
        value: string;
    }[];
    label?: string;
}
