import React, { FC, useCallback, useEffect, useState } from "react";
import { useDropzone } from 'react-dropzone'
import { DeleteUploadedFiles, DNDMessage, FileUploadContainer, UploadedFiles, UploadedFilesCount } from "./file_upload.style";
import { FileUploadProps } from "./file_upload.types";
import { IoMdCloudUpload } from 'react-icons/io'
import { MdCheck, MdOutlineDeleteOutline } from 'react-icons/md'
import { useField, useFormikContext } from "formik";
import ErrorMessage from "../error_message/error_message";

const FileUpload: FC<FileUploadProps> = ({ name }) => {
    const [file, setFile] = useState([])

    const { setFieldValue } = useFormikContext()
    const [field] = useField(name)

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        setFile(acceptedFiles)
        setFieldValue(name, acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const deleteFiles = () => {
        setFile([])
        setFieldValue(name, null)
    }

    return (
        <div>
            {!file.length ? <FileUploadContainer {...field} {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ?
                    <DNDMessage>
                        <p>Upuść plik</p>
                        <IoMdCloudUpload />
                    </DNDMessage>
                    :
                    <DNDMessage>
                        <p>Przeciągnij i upuść plik lub kliknij tutaj</p>
                        <IoMdCloudUpload />
                    </DNDMessage>
                }
            </FileUploadContainer>
                :
                <UploadedFiles>
                    <UploadedFilesCount>
                        <MdCheck />
                        Dodano {file.length} plików
                    </UploadedFilesCount>
                    <DeleteUploadedFiles onClick={deleteFiles}>
                        Usuń
                        <MdOutlineDeleteOutline />
                    </DeleteUploadedFiles>
                </UploadedFiles>
            }
            <ErrorMessage name={name} />
        </div>
    )
}

export default FileUpload