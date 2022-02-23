import styled from "styled-components";

export const SessionRefreshContainer = styled.div<{ open: boolean }>`
    max-height: ${(props) => props.open ? '2.5rem' : '0'};
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.red};
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 51;
    width: 100%;
    padding: ${(props) => props.open ? '.5rem 3rem' : '0 3rem'};
`