import React, { FC } from "react";
import { ColorBoxContainer } from "./color_boxes.styles";
import { ColorBoxesProps, ColorBoxType } from "./color_boxes.types";

const ColorBoxes: FC<ColorBoxesProps> = ({ text, type = ColorBoxType.PRIMARY }) => {
    return (
        <ColorBoxContainer type={type}>
            {text}
        </ColorBoxContainer>
    )
}

export default ColorBoxes