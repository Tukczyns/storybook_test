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
    border-radius: ${({ theme }) => theme.utils.border_radius};
    display: inline-block;
    min-width: 170px;
    padding: 15px 40px 14px;
    color: ${props => props.primary ? "#fff" : ({ theme }) => theme.colors.light};
    background: ${(props) => props.primary ? ({ theme }) => theme.colors.light : '#f6f6f6'};
    opacity: ${props => props.disabled ? 0.5 : 1};
    transition: all .2s;
    &:hover {
      background: ${({ theme }) => theme.colors.dark};
    }
`