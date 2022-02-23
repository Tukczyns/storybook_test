import React, { FC, useEffect, useState } from "react";
import { AlertItemTypes } from "../alert_list.types";
import { ErrorItemContainer } from "./alert_item.styles";

interface IProps extends AlertItemTypes {
    removeAlert: (arg: string) => void
}

const AlertItem: FC<IProps> = ({ text, type = 'error', id, removeAlert }) => {
    const [time, setTime] = useState(5)
    useEffect(() => {
        if (time <= 0) {
            removeAlert(id)
            return
        }
        setTimeout(() => {
            setTime(time - 1)
        }, 1000)
    }, [time])
    return (
        <ErrorItemContainer type={type}>
            <span></span>
            <div>
                {text}
            </div>
        </ErrorItemContainer>
    )
}

export default AlertItem