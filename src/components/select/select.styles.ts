import styled from "styled-components";

export const SelectContainer = styled.div`
    max-width: 100%;
    height: 50px;
    position: relative;
    margin: 5px 0;
`

export const SelectActiveItem = styled.div<{ isOpen: boolean, floating: boolean }>`
    width: 100%;
    height: 100%;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background: ${(props) => props.floating ? '#fff' : '#e2e2e2'};
    border: 1px solid #e2e2e2;
    color: ${({ theme }) => theme.colors.dark};
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
    background: #e2e2e2;
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 900;
    padding: 0 8px;
    display: flex;
    align-items: center;
    margin-bottom: 1px;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        background: #f2f2f2;
    }

    &:last-of-type{
        margin-bottom: 0;
    }
`

export const SelectLabel = styled.div<{ floating: boolean }>`
    position: absolute;
    left: 5px;
    padding: 2px 5px;
    transition: all .2s;
    top: ${(props) => props.floating ? '0' : '50%'};
    background: ${(props) => props.floating ? '#fff' : '#e2e2e2'};
    transform: translateY(-50%);
`