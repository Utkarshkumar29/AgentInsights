import styled from "styled-components";

export const HoveredImage=styled.img`
    transition: transform 0.3s ease-in-out;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`