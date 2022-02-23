import { lighten } from "polished";
import styled from "styled-components";

export const SwitchContainer = styled.div<{ open: boolean }>`
    width: 36px;
    margin: auto;
    border-radius: ${({ theme }) => theme.utils.border_radius};
    height: 19px;
    padding: 1px;
    background: #e2e2e2;
    cursor: pointer;

    & span{
        display: block;
        width: 17px;
        height: 17px;
        transition: all .3s;
        transform: ${(props) => props.open ? 'translateX(17px)' : 'translateX(0)'};
        border-radius: 20rem;
        background: ${(props) => !props.open ? ({ theme }) => theme.colors.light : ({ theme }) => lighten(.4, theme.colors.light)};
    }
`