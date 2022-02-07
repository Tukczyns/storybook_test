import React, { FC, useCallback, useEffect, useState } from "react";
import { useDropzone } from 'react-dropzone'
import { DeleteUploadedFiles, DNDMessage, FileUploadContainer, MaxFileSizeContainer, UploadedFiles, UploadedFilesCount } from "./file_upload.style";
import { FileUploadProps } from "./file_upload.types";
import { IoMdCloudUpload } from 'react-icons/io'
import { MdCheck, MdOutlineDeleteOutline } from 'react-icons/md'
import { useField, useFormikContext } from "formik";
import ErrorMessage from "../error_message/error_message";

const FileUpload: FC<FileUploadProps> = ({ text = 'Przeciągnij i upuść plik lub kliknij tutaj', name, formats, max_size = 8, accept = 'image/jpeg, image/png, application/pdf' }) => {
    const [file, setFile] = useState<File[]>([])

    const { setFieldValue } = useFormikContext()
    const [field] = useField(name)

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        const MAX_SIZE = max_size * 1048576
        const accepted: File[] = []
        const rejectedCounter = 0
        acceptedFiles.forEach((file: File) => {
            console.log(file)
            if (file.size <= MAX_SIZE) accepted.push(file)
        })
        console.log(accepted)
        setFile(accepted)
        setFieldValue(name, accepted)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: accept })

    const deleteFiles = () => {
        setFile([])
        setFieldValue(name, null)
    }

    return (
        <div>
            {!file.length ?
                <React.Fragment>
                    <FileUploadContainer {...field} {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ?
                            <DNDMessage>
                                <p>Upuść plik</p>
                                <IoMdCloudUpload />
                            </DNDMessage>
                            :
                            <DNDMessage>
                                <p>{text}</p>
                                {formats && formats.length > 0 && <p>Akceptowane formaty: {formats?.map(f => `${f}; `)}</p>}
                                <IoMdCloudUpload />
                                <MaxFileSizeContainer>
                                    Maksymalny rozmiar pliku: {max_size}mb
                                </MaxFileSizeContainer>
                            </DNDMessage>
                        }
                    </FileUploadContainer>
                </React.Fragment>
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