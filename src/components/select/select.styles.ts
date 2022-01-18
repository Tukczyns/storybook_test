import styled from "styled-components";

export const SelectContainer = styled.div`
    max-width: 500px;
    height: 50px;
    position: relative;
    z-index: 1;
    margin: 5px 0;
`

export const SelectActiveItem = styled.div<{ isOpen: boolean }>`
    width: 100%;
    height: 100%;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.gradient};
    color: white;
    font-weight: 900;
    cursor: pointer;

    & svg{
        font-size: 22px;
        transition: all .3s;
        transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    }
`

export const SelectItemList = styled.div<{ isOpen: boolean, count: number }>`
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
    background-color: white;
    left: 0;
    top: 100%;
    z-index: 20;
    transition: max-height .2s;
    max-height: ${props => props.isOpen ? 'calc(' + (props.count <= 5 ? props.count : 5) + ' * 43px)' : '0'};
`

export const SelectItem = styled.div`
    width: 100%;
    height: 40px;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: .8;
    color: white;
    font-weight: 900;
    padding: 0 8px;
    display: flex;
    align-items: center;
    margin-bottom: 1px;
    cursor: pointer;
`