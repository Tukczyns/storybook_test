import { Field, useField, useFormikContext } from "formik";
import React, { FC, useState } from "react";
import { SelectActiveItem, SelectContainer, SelectItem, SelectItemList } from "./select.styles";
import { SelectProps } from "./select.types";
import { IoIosArrowDown } from 'react-icons/io'

const Select: FC<SelectProps> = ({ name, options }) => {
    const [openSelect, toggleSelect] = useState(false)
    const [selectedValue, setSelectedValue] = useState('test1')

    const { setFieldValue } = useFormikContext()
    const [field] = useField(name)

    const changeValue = (val: string) => {
        toggleSelect(false)
        setFieldValue(name, val)
        setSelectedValue(val)
    }

    return (
        <SelectContainer {...field}>
            {/* active item */}
            <SelectActiveItem isOpen={openSelect} onClick={() => toggleSelect(!openSelect)}>
                {selectedValue}
                <IoIosArrowDown />
            </SelectActiveItem>
            {/* item list */}
            <SelectItemList isOpen={openSelect} count={options?.length || 0}>
                {options?.map(o => (
                    <SelectItem onClick={() => changeValue(o)}>{o}</SelectItem>
                ))}
            </SelectItemList>
        </SelectContainer >
    )
}

export default Select