import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

interface StatusProps {
    statusId: number;
}

const statusColors: { [key: number]: string } = {
    1: 'blue',
    2: 'red',
    3: 'green',
    4: 'yellow',
};

const getStatusColor = (status?: number) => {
    if (status !== undefined && statusColors.hasOwnProperty(status)) {
        return statusColors[status];
    }
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${pixelToRem(1)} ;
`;

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding:  ${pixelToRem(10)};
    padding-left: ${pixelToRem(20)};
    width: 100%;
    justify-content: space-between;
    background: var(--gray);
`;

export const ContainerStatus = styled.div<StatusProps>`
    display: flex;
    height: 100%;
    background: ${props => getStatusColor(props.statusId)};
    min-width: ${pixelToRem(20)};
    border-radius: ${pixelToRem(10)};
`;

export const Cell = styled.div`
    display: flex;
    flex-direction: row;
    width: 33%;
    padding-top: ${pixelToRem(5)};
    justify-content: space-between;
`;

export const Bar = styled.div`
    display: flex;
`;

export const TitleHeader = styled.div`
    color: var(--dark-purple);
    margin-left: ${pixelToRem(10)};
`;

export const ContainerProducts = styled.div`
    display: flex;
    flex-direction: column;
    padding:  ${pixelToRem(5)};
    padding-left: ${pixelToRem(50)};
    width: 100%;
    justify-content: space-between;
`;

export const ContainerProd = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${pixelToRem(5)};
    padding-left: ${pixelToRem(20)};
    width: 100%;
    justify-content: space-between;
`;
