import React, { FC } from "react";
import { HtmlRenderContainer } from "./html_render.styles";
import { HtmlRenderProps } from "./html_render.types";

const HtmlRender: FC<HtmlRenderProps> = ({ html }) => {
    return (
        <HtmlRenderContainer dangerouslySetInnerHTML={{ __html: html }}></HtmlRenderContainer>
    )
}

export default HtmlRender