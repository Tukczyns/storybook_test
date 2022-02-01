import React from 'react';
import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Spinner = () => (
    <StyledSpinner >
        <AiOutlineLoading3Quarters />
    </StyledSpinner>
);

const StyledSpinner = styled.div`
  animation: rotate 2s linear infinite;
  width: 18px;
  font-size: 18px;
  height: 18px;
  margin: auto;
transform-origin: center center;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;