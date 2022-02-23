import styled from "styled-components";

export const PopupBackground = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopupContainer = styled.div`
    background-color: white;
    min-width: 14rem;
    max-width: 30rem;
    min-height: 14rem;
    padding: 1.6rem;
    border-radius: ${({ theme }) => theme.utils.border_radius};
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PopupLine = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: .7rem;
    background-color: ${({ theme }) => theme.colors.red};
`

export const PopupMessage = styled.div`
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & div{
        margin-left: 1rem;
    }
`