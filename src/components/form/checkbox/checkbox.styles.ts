import { Field } from "formik";
import styled from "styled-components";

export const CheckboxContainer = styled.div`
    display: flex;
    margin: 5px 0;
`

export const CheckboxStyled = styled(Field)`
    display: none;

    & + label{
        width: 25px;
        height: 25px;
        display: block;
        flex-shrink: 0;
        margin-right: 1rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        transition: all .2s;
        cursor: pointer;
        border: 2px solid #ff512f;

        & svg{
            opacity: 0;
            transition: all .2s;
        }
    }

    &:checked + label{
        background: linear-gradient(to right, #ff512f, #DD2476);

        & svg{
            opacity: 1;
        }
    }
`

export const CheckboxText = styled.span`
    font-size: 15px;
    margin-top: 4px;

    & a{
        color: #ff512f;
        text-decoration: none;
        font-weight: 700;
    }
`