import React, { FC, forwardRef, useState } from "react";
import { DatepickerProps } from "./datepicker.types";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { DatepickerButton, DatepickerIcon } from "./datepicker.styles";
import { IoIosCalendar } from "react-icons/io";
import { useField, useFormikContext } from "formik";

const Datepicker: FC<DatepickerProps> = ({ name }) => {
    const { setFieldValue } = useFormikContext()
    const [field] = useField(name)

    const [startDate, setStartDate] = useState<Date | null>(new Date(Date.now()))

    const setValue = (date: Date | null) => {
        setStartDate(date)
        setFieldValue(name, date)
    }

    const ExampleCustomInput = forwardRef<any, any>(({ value, onClick }, ref) => (
        <DatepickerButton onClick={onClick} ref={ref}>
            {value}
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