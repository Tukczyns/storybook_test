import React, { FC } from "react";
import { MdClose } from "react-icons/md";
import { ClearAllButton, ErrorListContainer } from "./alert_list.styles";
import { AlertListTypes } from "./alert_list.types";
import AlertItem from './alert_item/alert_item'

const AlertList: FC<AlertListTypes> = ({ alerts, setAlerts, removeAlert }) => {
    return (
        <div>
            <ErrorListContainer>
                {alerts.length > 0 && <ClearAllButton onClick={setAlerts}>
                    <MdClose />
                </ClearAllButton>}
                {alerts && alerts.map(e => {
                    return <AlertItem key={e.id} {...e} removeAlert={removeAlert} />
                })}
            </ErrorListContainer>
        </div>
    )
}

export default AlertList