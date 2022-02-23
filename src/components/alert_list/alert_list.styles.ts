import styled from "styled-components";

export const ErrorListContainer = styled.div`
    position: fixed;
    right: 1rem;
    bottom: 0;
    height: 100vh;
    width: 20rem;
    z-index: 40;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    pointer-events: none;
`

export const ClearAllButton = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: ${({ theme }) => theme.utils.border_radius};
    font-size: 2rem;
    box-shadow: 0 5px 1rem rgba(0,0,0,.5);
    margin-top: 1rem;
    pointer-events: all;
`