export interface AlertItemTypes {
    id: string;
    text: string;
    type: 'error' | 'info' | 'success';
}
export interface AlertListTypes {
    alerts: AlertItemTypes[];
    setAlerts: () => void;
    removeAlert: (arg: string) => void;
}
