import styled from "styled-components";

export const DatepickerButton = styled.button`
    background: white;
    font-weight: 900;
    padding: 12px 25px;
    border: none;
    font-size: 19px;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    min-width: 200px;
    width: 100%;
    margin: 5px 0;

    & svg{
        font-size: 26px;
    }
`

export const DatepickerLabel = styled.div<{ open: boolean }>`
    position: absolute;
    left: 20px;
    transition: all .2s;
    font-size: ${(props) => props.open ? '14px' : '19px'};
    top: ${(props) => props.open ? '0%' : '50%'};
    transform: translateY(-50%);
    pointer-events: none;
    padding: 2px 5px;;
    background-color: white;
`

export const DatepickerIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    margin-left: 10px;
    box-sizing: border-box;
`