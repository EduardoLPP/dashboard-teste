import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.button`
    display: flex;
    flex-direction: row;
    background: var(--gray);
    align-items: center;
    padding: ${pixelToRem(15)};

    &:hover {
        background: var(--dark-purple);
        cursor: pointer;

        p {
            color: var(--white);
        }

        .icon {
            color: var(--white);
        }
    }
`;

export const Title = styled.p`
    color: var(--dark-purple);
    margin-left: ${pixelToRem(10)};
`;