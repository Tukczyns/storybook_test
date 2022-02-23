import styled from "styled-components";

export const ErrorItemContainer = styled.div<{ type: 'error' | 'success' | 'info' }>`
    width: 100%;
    position: relative;
    padding: 1.5rem 2rem;
    border-radius: ${({ theme }) => theme.utils.border_radius};
    overflow: hidden;
    background-color: white;
    margin: 5px 0;
    box-shadow: 0 5px 1rem rgba(0,0,0,.2);

    & > span {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: .8rem;
        background-color: ${(props) => props.type === 'error' ? ({ theme }) => theme.colors.red : props.type === 'success' ? ({ theme }) => theme.colors.green : ({ theme }) => theme.colors.light};
    }
`