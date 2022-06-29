import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: center;
  // Box-model
  margin-top: 12rem;
`;

export const Title = styled.h2`
  // Box-model
  margin: 0 0 3rem 0;

  // Display
  color: ${theme.colors.white};
  font-size: 3.2rem;
  font-weight: 700;
`;

export const Items = styled.div`
  // Layout
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  // Box-model
  width: 100%;

  // Responsive
  @media (max-width: 1200px) {
    justify-content: space-around;
  }
`;

export const Item = styled.div`
  // Layout
  display: flex;
  align-items: center;
  justify-content: center;

  // Box-model
  height: 15rem;
  width: 15rem;

  // Display
  background-color: ${theme.colors.gray400};

  // Responsive
  @media (max-width: 1200px) {
    margin: 0.5rem;
  }
  @media (max-width: 406px) {
    margin: 0.15rem;
  }
  @media (max-width: 387px) {
    margin: 0.5rem;
  }
`;

export const ItemImg = styled.img`
  width: 8rem;
`;
