import React, { FC, forwardRef, useState } from "react";
import { DatepickerProps } from "./datepicker.types";
import DatePicker from 'react-datepicker'
import { DatepickerButton, DatepickerIcon, DatepickerLabel } from "./datepicker.styles";
import { IoIosCalendar } from "react-icons/io";
import { useField, useFormikContext } from "formik";

import "react-datepicker/dist/react-datepicker.css";

const Datepicker: FC<DatepickerProps> = ({ name, label, disabled }) => {
    const { setFieldValue } = useFormikContext()
    const [field] = useField(name)

    const [startDate, setStartDate] = useState<Date | null>(null)

    const setValue = (date: Date | null) => {
        setStartDate(date)
        setFieldValue(name, date)
    }

    const ExampleCustomInput = forwardRef<any, any>(({ value, onClick }, ref) => (
        <DatepickerButton type="button" onClick={!disabled && onClick} ref={ref}>
            {value}
            <DatepickerLabel open={startDate !== null}>{label}</DatepickerLabel>
            <DatepickerIcon >
                <IoIosCalendar />
            </DatepickerIcon>
        </DatepickerButton>
    ));

    return (
        <DatePicker {...field} selected={startDate} onChange={(date) => setValue(date)} customInput={<ExampleCustomInput />} />
    )
}

export default Datepicker