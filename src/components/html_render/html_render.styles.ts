import { lighten } from "polished";
import styled from "styled-components";

export const HtmlRenderContainer = styled.div`
    padding: 1rem;
    overflow: auto;
    height: 100%;
    & ul{
        list-style-type: disc;
        padding-left: 1.5rem;
    }
    & a{
        color: ${({ theme }) => theme.colors.light};
        font-weight: 900;
        transition: all .2s;
        &:hover{
            color: ${({ theme }) => lighten(.15, theme.colors.light)};
        }
    }
`