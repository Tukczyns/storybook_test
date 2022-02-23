import { FC } from "react";
import { AlertItemTypes } from "../alert_list.types";
interface IProps extends AlertItemTypes {
    removeAlert: (arg: string) => void;
}
declare const AlertItem: FC<IProps>;
export default AlertItem;
