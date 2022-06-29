import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  // Layout
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  // Box-model
  margin-top: 8.5rem;
`;

export const Item = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: center;

  // Responsive
  @media (max-width: 700px) {
    margin: 1rem;
  }

  // Change the components in this context.
  h3 {
    margin: 1.9rem 0 0 0;
  }
  p {
    margin: 0.5rem 0 0 0;
  }
  div {
    width: 6.2rem;
    height: 6.2rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.white};
`;

export const Value = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${theme.colors.gray};
`;

export const ContainerIcon = styled.div`
  // Layout
  display: flex;
  justify-content: center;
  align-items: center;

  // Box-model
  border-radius: 50%;

  // Display
  background-color: ${theme.colors.gray400};
`;

export const Icon = styled.img``;
