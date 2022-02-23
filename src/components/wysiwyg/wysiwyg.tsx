import React, { FC } from "react";
import { Editor } from '@tinymce/tinymce-react'
import { WysiwygProps } from './wysiwyg.types'

const Wysiwyg: FC<WysiwygProps> = ({ initialValue, placeholder, setValue }) => {
    return (
        <Editor
            apiKey="dl89xx51debwtfx7zagsw1jx3gku1ndvqwxp9jfe8lsh575n"
            initialValue={initialValue}
            init={{
                skin: "snow",
                icons: "thin",
                placeholder: placeholder,
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image',
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                ],
                textcolor_rows: "4",

                toolbar:
                    "undo redo | styleselect | fontsizeselect| code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent "
            }}
            onEditorChange={setValue}
            outputFormat="html"
        />
    )
}

export default Wysiwyg