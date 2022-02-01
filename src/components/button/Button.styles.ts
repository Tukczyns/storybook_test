import styled from 'styled-components'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<ButtonProps>`
    border: 0;
    line-height: 1;
    margin: 5px 0;
    font-size: 18px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 10px;
    display: inline-block;
    min-width: 170px;
    padding: 15px 40px 14px;
    color: ${props => props.primary ? "#fff" : ({ theme }) => theme.colors.light};
    background: ${(props) => props.primary ? ({ theme }) => theme.colors.light : '#f6f6f6'};
    opacity: ${props => props.disabled ? 0.5 : 1};
    /* &:hover {
      background-color: ${props => props.primary ? "#55bd90" : "#6bedb5"};
    } */
    &:active {
        border: solid 2px #1b116e;
        padding: ${props => props.size === "small" ? "5px 23px 6px" : (props.size === "medium" ? "7px 28px 9px" : "12px 28px 14px")};
    }
`