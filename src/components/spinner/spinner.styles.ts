import styled, { keyframes } from "styled-components"

const spin = keyframes`
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export const SpinnerContainer = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.light};
  background: linear-gradient(to right, ${({ theme }) => theme.colors.light} 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: ${spin} 1.4s infinite linear;
  transform: translateZ(0);

    &::before {
        width: 0%;
        height: 50%;
        background: #ffffff;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }
    &::after {
        background: #fff;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`