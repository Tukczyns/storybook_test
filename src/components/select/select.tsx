import { Field, useField, useFormikContext } from "formik";
import React, { FC, useEffect, useState } from "react";
import { SelectActiveItem, SelectContainer, SelectItem, SelectItemList, SelectLabel } from "./select.styles";
import { SelectProps } from "./select.types";
import { IoIosArrowDown } from 'react-icons/io'

const Select: FC<SelectProps> = ({ name, options, label, required = false }) => {
    const [openSelect, toggleSelect] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')

    const { setFieldValue } = useFormikContext()
    const [field] = useField(name)

    useEffect(() => {
        if (options && field.value) {
            options.forEach(o => {
                if (o.key === field.value) setSelectedValue(o.value)
            })
        }
    }, [])

    const changeValue = (val: string, key: string) => {
        toggleSelect(false)
        setFieldValue(name, key)
        setSelectedValue(val)
    }

    return (
        <SelectContainer {...field}>
            {/* active item */}
            <SelectLabel floating={selectedValue !== ''}>{label}{required && <span>*</span>}</SelectLabel>
            <SelectActiveItem isOpen={openSelect} onClick={() => toggleSelect(!openSelect)} floating={selectedValue !== ''}>
                <span>{selectedValue}</span>
                <IoIosArrowDown />
            </SelectActiveItem>
            {/* item list */}
            <SelectItemList isOpen={openSelect} count={options?.length || 0}>
                {options?.map(o => (
                    <SelectItem onClick={() => changeValue(o.value, o.key)}>{o.value}</SelectItem>
                ))}
            </SelectItemList>
        </SelectContainer >
    )
}

export default Select