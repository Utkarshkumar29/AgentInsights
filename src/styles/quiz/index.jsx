import styled from "styled-components";

export const Fall=styled.div`
    @keyframes fall {
    0% {
        transform: translateY(-100vh);
    }
    100% {
        transform: translateY(0);
    }
    }

    animation: fall 1s ease-out;
`