import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${pixelToRem(10)};
    background: var(--purple);
    border-top-left-radius: ${pixelToRem(5)};
    border-top-right-radius: ${pixelToRem(5)};
`;

export const TitleOrderList = styled.p`
    font-size: ${pixelToRem(22)};
    color: var(--white);
`;

export const ContainerOrders = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--white);
    min-height: 68vh;
    overflow-y: scroll;
`;