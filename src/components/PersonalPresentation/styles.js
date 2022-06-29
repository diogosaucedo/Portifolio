import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  // Layout
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  // Box-model
  width: 100%;
  margin-top: 10rem;

  // Display
  color: ${theme.colors.white};

  // Responsive
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
  }

  // Change the components in this context
  p {
    margin: 1.8rem 0 3.5rem 0;
  }
`;

export const BasicInfo = styled.div`
  max-width: 40rem;
`;

export const Salutation = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
`;

export const Profession = styled.p`
  font-size: 1.8rem;
  color: ${theme.colors.gray};
`;

// need refactoring (DRY)
export const DownloadButton = styled.button`
  // Box-model
  min-width: 14.7rem;
  height: 4.2rem;
  margin-right: 0.75rem;

  // Display
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${theme.colors.dark};
  background-color: ${theme.colors.greenLight};
  border: none;
  cursor: pointer;

  // Responsive
  @media (max-width: 391px) {
    margin: 0 1.5rem 2rem 0;
  }
`;

// need refactoring (DRY)
export const ContactButton = styled.button`
  // Box-model
  min-width: 14.7rem;
  height: 4.2rem;
  margin-left: 0.75rem;

  // Display
  border: 0.1rem solid ${theme.colors.gray200};
  background-color: ${theme.colors.dark};
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${theme.colors.white};
  cursor: pointer;

  // Responsive
  @media (max-width: 391px) {
    margin: 0;
  }
`;

export const Character = styled.img`
  max-width: 30rem;
  @media (max-width: 820px) {
    display: none;
  }
`;
