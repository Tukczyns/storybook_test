import styled from "styled-components";

export const FileUploadContainer = styled.div`
    background: white;
    width: 100%;
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
        margin-top: 0;
        color: ${({ theme }) => theme.colors.dark};

        &:nth-of-type(2){
            font-size: 14px;
            color: #777;
            margin-bottom: 5px;
        }
    }

    & svg{
        font-size: 35px;
        color: ${({ theme }) => theme.colors.light};
    }
`

export const UploadedFiles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UploadedFilesCount = styled.div`
    display: flex;
    align-items: center;

    & svg{
        font-size: 25px;
        color: ${({ theme }) => theme.colors.light};
        margin-right: 10px;
    }
`

export const DeleteUploadedFiles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
    & svg{
        font-size: 22px;
        margin-left: 5px;
    }
`

export const MaxFileSizeContainer = styled.div`
    font-size: 14px;
    color: #777;
    margin-top: 5px;
`