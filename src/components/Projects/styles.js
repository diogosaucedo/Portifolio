import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // Box-model
  margin-top: 12rem;
  // Change the components in this context
  h2 {
    margin: 0 0 3rem 0;
  }
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: ${theme.colors.white};
`;

export const LastProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const Project = styled.div`
  // Box-model
  margin-bottom: 3.2rem;
  padding: 2rem 2.5rem;

  // Display
  background: ${theme.colors.gray400};

  // Responsive
  @media (max-width: 886px) {
    width: 100%;
  }
`;

export const ProjectName = styled.h3`
  // Box-model
  margin: 2.3rem 0 0 0;
  max-width: 30rem;

  // Display
  font-size: 1.8rem;
  font-weight: 500;
  color: ${theme.colors.white};
  word-wrap: break-word;
`;

export const ProjectTechnologies = styled.p`
  // Box-model
  margin: 0.6rem 0 0 0;

  // Display
  font-size: 1.4rem;
  color: ${theme.colors.white};
  font-weight: 400;
`;

export const Cover = styled.div`
  // Box-model
  width: 30rem;
  height: 13rem;
  margin: 0;

  // Display
  background: ${theme.colors.greenLinearGradient};

  // Responsive
  @media (max-width: 886px) {
    width: 100%;
  }
`;
