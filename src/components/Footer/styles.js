import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  // Layout
  display: flex;
  align-items: center;
  justify-content: center;

  // Box-model
  width: 100%;
  height: 6rem;
  margin-top: 18.5rem;

  // Display
  background: ${theme.colors.gray400};
`;

export const Phrase = styled.p`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Highlight = styled.span`
  color: ${theme.colors.greenLight};
`;
