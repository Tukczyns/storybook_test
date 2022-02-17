import { Field } from "formik";
import styled from "styled-components";

export const CheckboxContainer = styled.div`
    display: flex;
    margin: 5px 0;
    border-radius: 5px;
`

export const CheckboxStyled = styled(Field)`
    display: none;

    & + label{
        width: 27px;
        height: 27px;
        display: block;
        flex-shrink: 0;
        margin-right: 1rem;
        color: white;
        font-size: 16px;
        transition: all .2s;
        cursor: pointer;
        padding: 2px;
        background: ${({ theme }) => theme.colors.light};
        border-radius: 5px;

        & svg{
            opacity: 0;
            transition: all .2s;
        }

        & div{
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
        }
    }

    &:checked + label{
        & svg{
            opacity: 1;
        }
        
        & div{
            background: ${({ theme }) => theme.colors.light};
        }
    }
`

export const CheckboxText = styled.span`
    font-size: 16px;
    margin-top: 1px;

    & a{
        color: ${({ theme }) => theme.colors.light};
        text-decoration: none;
        font-weight: 700;
    }
`

export const CheckboxRequired = styled.span`
    color: ${({ theme }) => theme.colors.red};
`