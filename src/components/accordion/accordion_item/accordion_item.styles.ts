import styled from "styled-components";

export const AccordionContainer = styled.div`
    width: 100%;
`

export const AccordionHeadline = styled.div<{ isOpen: boolean }>`
    width: 100%;
    padding: 14px 20px;
    background: ${({theme}) => theme.colors.light};
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;

    & svg{
        font-size: 22px;
        margin-right: 1rem;
        transition: all .3s;
        transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    }
`

export const AccordionContent = styled.div<{ isOpen: boolean }>`
    width: 100%;
    overflow: hidden;
    max-height: ${props => props.isOpen ? '140rem' : '0'};
    padding: ${props => props.isOpen ? '20px 20px' : '0 20px'};
    transition: all .3s ease-in-out;
    background-color: white;
`