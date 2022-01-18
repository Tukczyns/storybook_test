import styled from "styled-components";

export const TextareaContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 5px 0;
`

export const TextareaStyled = styled.textarea`
    resize: none;
    padding: 10px;
    width: 100%;
    height: 100%;
    padding: 12px 20px;
    font-size: 18px;
    outline: none;
    border: none;
    background: #e2e2e2;
    border: 1px solid #e2e2e2;
    transition: all .2s;

    &:focus, &:not(:placeholder-shown){
        background: #fff;
    }

    &:focus + label, &:not(:placeholder-shown) + label{
        transform: translateY(-200%);
        font-size: 14px;
        background: #fff;
    }
`

export const StyledTextareaLabel = styled.label`
    position: absolute;
    top: 24px;
    left: 18px;
    padding: 0 3px;
    font-size: 18px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: all .2s;
`