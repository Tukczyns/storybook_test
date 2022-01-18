import { Field, useField, useFormikContext } from "formik";
import React, { FC, useState } from "react";
import { SelectActiveItem, SelectContainer, SelectItem, SelectItemList } from "./select.styles";
import { SelectProps } from "./select.types";
import arrow_down from '../../images/arrow-down.svg'

const Select: FC<SelectProps> = ({ name }) => {
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
            <SelectActiveItem onClick={() => toggleSelect(!openSelect)}>
                {selectedValue}
                <img src={arrow_down} />
            </SelectActiveItem>
            {/* item list */}
            <SelectItemList isOpen={openSelect} count={3}>
                <SelectItem onClick={() => changeValue('test1')}>test1</SelectItem>
                <SelectItem onClick={() => changeValue('test2')}>test2</SelectItem>
                <SelectItem onClick={() => changeValue('test3')}>test3</SelectItem>
            </SelectItemList>
        </SelectContainer >
    )
}

export default Select