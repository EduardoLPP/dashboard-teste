import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.div`
    display: flex;
    height: 60vh;
    width: 80vw;
    padding-top: ${pixelToRem(30)};
    padding-left: ${pixelToRem(70)};
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: ${pixelToRem(50)};
`;

export const ContainerOrders = styled.div`

`;

export const CardTotalValueOrder = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: ${pixelToRem(5)};
    min-height: ${pixelToRem(150)};
    max-height: ${pixelToRem(150)};;
    max-width: ${pixelToRem(325)};
    min-width: ${pixelToRem(325)};
    background: var(--white);
    margin-bottom: ${pixelToRem(20)};
`;

export const ContainerTopCard = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: ${pixelToRem(50)};
    padding: ${pixelToRem(8)};
    background: var(--purple);
    border-top-left-radius: ${pixelToRem(5)};
    border-top-right-radius: ${pixelToRem(5)};
`;

export const TitleCard = styled.p`
    display: flex;
    flex: row;
    color: var(--white);
`;

export const ContainerTotalValue = styled.div`
    display: flex;
    flex: row;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const TotalValue = styled.div`
    color: var(--dark-purple);
    font-size: ${pixelToRem(50)};
`;

export const ContainerChartStatus = styled.div`
    display: flex;
    margin-top: -80px;
    margin-bottom: 110px;
`;

