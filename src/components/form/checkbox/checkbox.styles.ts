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
        font-size: 16px;
        transition: all .2s;
        cursor: pointer;
        padding: 2px;
        background: ${({ theme }) => theme.colors.gradient};

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
        }
    }

    &:checked + label{
        & svg{
            opacity: 1;
        }
        
        & div{
            background: ${({ theme }) => theme.colors.gradient};
        }
    }
`

export const CheckboxText = styled.span`
    font-size: 15px;
    margin-top: 4px;

    & a{
        color: ${({ theme }) => theme.colors.light};
        text-decoration: none;
        font-weight: 700;
    }
`