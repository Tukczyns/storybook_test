import styled from "styled-components";

export const SelectContainer = styled.div`
    max-width: 500px;
    height: 50px;
    position: relative;
    z-index: 1;
    margin: 5px 0;
`

export const SelectActiveItem = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background: linear-gradient(to right, #ff512f, #DD2476);
    color: white;
    font-weight: 900;
    cursor: pointer;
`

export const SelectItemList = styled.div<{ isOpen: boolean, count: number }>`
    width: 100%;
    overflow: hidden;
    position: absolute;
    background-color: white;
    left: 0;
    top: 100%;
    z-index: 20;
    transition: all .2s;
    max-height: ${props => props.isOpen ? 'calc(' + props.count + ' * 50px)' : '0'};
`

export const SelectItem = styled.div`
    width: 100%;
    height: 40px;
    background: linear-gradient(to right, #ff512f90, #DD247690);
    color: white;
    font-weight: 900;
    padding: 0 8px;
    display: flex;
    align-items: center;
    margin-bottom: 1px;
    cursor: pointer;
`