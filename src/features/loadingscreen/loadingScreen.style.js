import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from{
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to{
        transform:translate(-50%, -50%) rotate(360deg);
    }
`
export const LoadingDiv = styled.div`
    height:300px;
    width:300px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    border: 16px solid #dfdede;
    border-top: 16px solid #8ba3e7;
    border-radius:50%;
    animation: ${spin} 1s ease infinite;
`
