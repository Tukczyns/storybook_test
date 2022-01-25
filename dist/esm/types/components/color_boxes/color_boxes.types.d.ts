export declare enum ColorBoxType {
    PRIMARY = "PRIMARY",
    WARNING = "WARNING",
    DANGER = "DANGER",
    SUCCESS = "SUCCESS"
}
export interface ColorBoxesProps {
    text?: string;
    type?: ColorBoxType;
}
