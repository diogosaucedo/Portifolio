import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: center;

  // Box-model
  margin-top: 16rem;

  // Change the components in this context
  h2 {
    margin: 0 0 3rem 0;
  }
  p {
    max-width: 74.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: ${theme.colors.white};
`;

export const Description = styled.p`
  text-align: center;
  color: ${theme.colors.gray};
  font-size: 1.8rem;
  font-weight: 400;
`;
