import styled from "styled-components";

export const AccordionContainer = styled.div`
    width: 100%;
`

export const AccordionHeadline = styled.div<{ isOpen: boolean }>`
    width: 100%;
    padding: 14px 20px;
    background: linear-gradient(to right, #ff512f, #DD2476);
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;

    & img{
        margin-right: 1rem;
        margin-top: -4px;
        transition: all .3s;
        transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    }
`

export const AccordionContent = styled.div<{ isOpen: boolean }>`
    width: 100%;
    overflow: hidden;
    max-height: ${props => props.isOpen ? '20rem' : '0'};
    padding: ${props => props.isOpen ? '20px 20px' : '0 20px'};
    transition: all .3s ease-in-out;
`