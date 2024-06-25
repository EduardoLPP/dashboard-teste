import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${pixelToRem(0, 0, 0, 0 )};
    padding-left: ${pixelToRem(20)};
    justify-content: space-between;
    background: var(--purple);
`;

export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 18%;
`;

export const Logo = styled.div`

`;

export const Name = styled.p`
    margin-left: ${pixelToRem(20)};
    font: var(--heading);
    color: var(--white);
`;

export const ContainerXp = styled.div`
    display: flex;
    flex-direction: row;
`;