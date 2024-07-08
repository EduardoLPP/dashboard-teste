import styled, { keyframes } from "styled-components";
import { pixelToRem } from "../../utils/functions";

interface AnimationProps {
    isDropdowm : boolean;
}

interface StatusProps {
    statusId: number;
}

const statusColors: { [key: number]: string } = {
    1: '#5470C6',
    2: '#EE6666',
    3: '#9BDB7D',
    4: '#FAC858',
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
    min-width: ${pixelToRem(50)};
    border-radius: ${pixelToRem(3)};
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
    font: var(--base-font);
`;

export const ContainerProducts = styled.div<AnimationProps>`
  display: flex;
  flex-direction: column;
  padding: ${pixelToRem(5)};
  padding-left: ${pixelToRem(50)};
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
  max-height: ${(isDropdown ) => (isDropdown ? '500px' : '0')};
  opacity: ${(isDropdown ) => (isDropdown ? '1' : '0')};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  animation: ${( isDropdown ) => (isDropdown ? dropdownAnimation : dropdownCloseAnimation)} 0.5s forwards;
`;

const dropdownAnimation = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
`;

const dropdownCloseAnimation = keyframes`
  from {
    max-height: 500px; 
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

export const ContainerProd = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${pixelToRem(5)};
    padding-left: ${pixelToRem(20)};
    width: 100%;
    justify-content: space-between;
`;
