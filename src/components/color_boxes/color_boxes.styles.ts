import styled from "styled-components";
import { ColorBoxesProps, ColorBoxType } from "./color_boxes.types";

export const ColorBoxContainer = styled.div<ColorBoxesProps>`
    color: white;
    font-weight: 900;
    padding: 12px 10px;
    text-align: center;
    box-sizing: border-box;
    max-width: 200px;
    font-size: 16px;
    text-transform: uppercase;
    background: 
    ${props =>
        props.type === ColorBoxType.PRIMARY 
        ? 'linear-gradient(to right, #00d2ff, #3a7bd5 )' 
        : props.type === ColorBoxType.WARNING ? 'linear-gradient(to right, #eea849, #f46b45 )' 
        : props.type === ColorBoxType.SUCCESS ? 'linear-gradient(to right, #38ef7d, #11998e )' 
        : 'linear-gradient(to right, #ef473a, #cb2d3e )'};
    box-shadow: 0 3px 6px 
    ${props =>
        props.type === ColorBoxType.PRIMARY 
        ? '#00d2ff60' 
        : props.type === ColorBoxType.WARNING ? '#f46b4560' 
        : props.type === ColorBoxType.SUCCESS ? '#11998e60' 
        : '#ef473a60'};
`