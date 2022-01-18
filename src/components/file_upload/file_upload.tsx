import React, { FC, useCallback } from "react";
import { useDropzone } from 'react-dropzone'
import { DNDMessage, FileUploadContainer } from "./file_upload.style";
import { FileUploadProps } from "./file_upload.types";
import { IoMdCloudUpload } from 'react-icons/io'
import { useField, useFormikContext } from "formik";

const FileUpload: FC<FileUploadProps> = ({ name }) => {
    const { setFieldValue } = useFormikContext()
    const [field] = useField(name)

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        setFieldValue(name, acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <FileUploadContainer {...field} {...getRootProps()}>
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
    )
}

export default FileUpload