import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    width: 80vw;
    padding-top: ${pixelToRem(50)};
    padding-left: ${pixelToRem(50)};
`;

export const NotFoundTitle = styled.p`
    color: var(--white);
    font: var(--warning);
    margin-bottom: ${pixelToRem(50)};
`;