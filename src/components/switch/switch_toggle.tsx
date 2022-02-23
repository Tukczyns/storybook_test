import React, { FC } from "react";
import { SwitchContainer } from "./switch.styles";
import { SwitchTypes } from "./switch.types";

const SwitchToggle: FC<SwitchTypes> = ({ active, setActive, readonly }) => {
    return (
        <SwitchContainer open={!active} onClick={() => (setActive && !readonly) ? setActive(!active) : {}}>
            <span></span>
        </SwitchContainer>
    )
}

export default SwitchToggle