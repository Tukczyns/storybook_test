export interface FileUploadProps {
    name: string;
    text?: string;
    formats?: string[];
    max_size?: number;
    accept?: string;
}
