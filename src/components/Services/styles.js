import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: space-between;

  // Box-model
  margin-top: 9rem;
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
`;

export const Item = styled.div`
  // Box-models
  width: 29rem;
  padding: 4rem 3rem 2.5rem 3rem;

  // Display
  background-color: ${theme.colors.gray400};
  border-bottom: 0.5rem solid ${theme.colors.greenLight};

  // Responsive
  @media (max-width: 1330px) {
    margin: 0.5rem;
  }
  @media (max-width: 912px) {
    width: 100%;
  }
`;

export const ItemName = styled.h3`
  // Box-model
  margin: 3rem 0 0 0;

  // Display
  font-size: 3.2rem;
  font-weight: 500;
  color: ${theme.colors.gray};
`;

export const ItemImg = styled.img`
  width: 5.6rem;
`;
