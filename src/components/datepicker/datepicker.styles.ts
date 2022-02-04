import styled from "styled-components";

export const DatepickerButton = styled.button<{ open: boolean }>`
    background: ${(props) => props.open ? '#fff' : '#e2e2e2'};
    border: 1px solid #e2e2e2;
    padding: 12px 20px;
    font-size: 18px;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    min-width: 200px;
    width: 100%;
    margin: 5px 0;

    & span{
        min-height: 22px;
    }

    & svg{
        font-size: 26px;
    }
`

export const DatepickerLabel = styled.label<{ open: boolean }>`
    position: absolute;
    transition: all .2s;
    font-size: ${(props) => props.open ? '14px' : '18px'};
    top: ${(props) => props.open ? '0%' : '50%'};
    transform: translateY(-50%);
    pointer-events: none;
    left: 18px;
    padding: 0 3px;
    background: ${(props) => props.open ? 'white' : 'transparent'};
`

export const DatepickerIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    margin-left: 10px;
    box-sizing: border-box;
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
`