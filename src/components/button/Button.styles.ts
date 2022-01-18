import styled from 'styled-components'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<ButtonProps>`
    border: 0;
    line-height: 1;
    margin: 5px 0;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 100px;
    display: inline-block;
    padding: ${props => props.size === "small" ? "7px 25px 7px" : (props.size === "medium" ? "9px 30px 9px" : "14px 30px 14px")};
    color: ${props => props.primary ? "#fff" : ({ theme }) => theme.colors.light};
    background: ${(props) => props.primary ? ({ theme }) => theme.colors.gradient : '#f6f6f6'};
    opacity: ${props => props.disabled ? 0.5 : 1};
    /* &:hover {
      background-color: ${props => props.primary ? "#55bd90" : "#6bedb5"};
    } */
    &:active {
        border: solid 2px #1b116e;
        padding: ${props => props.size === "small" ? "5px 23px 6px" : (props.size === "medium" ? "7px 28px 9px" : "12px 28px 14px")};
    }
`