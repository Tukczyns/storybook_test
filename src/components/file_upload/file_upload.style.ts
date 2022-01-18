import styled from "styled-components";

export const FileUploadContainer = styled.div`
    background: white;
    width: 350px;
    border: 3px dashed ${({ theme }) => theme.colors.light};
    padding: 10px 20px;
    cursor: pointer;
    box-sizing: border-box;
    margin: 5px 0;
`

export const DNDMessage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p{
        margin-bottom: 0;
        text-align: center;
        font-size: 20px;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.dark};
    }

    & svg{
        font-size: 35px;
        color: ${({ theme }) => theme.colors.light};
    }
`