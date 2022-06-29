import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  // Layout
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  // Box-model
  height: 80px;

  // Display
  color: ${theme.colors.white};

  // className={!isOpen ? 'visible' : 'invisible'}
  .invisible {
    // Hide menu only if the screen is smaller than 852px
    @media (max-width: 852px) {
      display: none;
    }
  }
  .visible {
    // Show menu only if the screen is smaller than 852px
    @media (max-width: 852px) {
      display: flex;
    }
  }
`;

export const Portifolio = styled.span`
  font-size: 2.6rem;
  font-weight: 700;
`;

export const Menu = styled.nav``;

export const MenuItems = styled.ul`
  // Layout
  display: flex;
  flex-direction: row;
  align-items: center;

  // Layout
  list-style: none;
  font-size: 1.8rem;

  // Responsive
  @media (max-width: 852px) {
    // Position
    position: absolute;
    top: 80px;
    left: 0;

    // Layout
    display: none;
    flex-direction: column;

    // Box-model
    margin: 0;
    width: 100%;
    height: 100vh;

    // Display
    background-color: ${theme.colors.dark};
  }
`;

export const MenuItem = styled.li`
  padding: 2rem;
`;

export const Exit = styled.span`
  display: none;
  padding: 2rem 0 2rem 2rem;
  font-size: 1.8rem;
  color: ${theme.colors.greenLight};
  cursor: pointer;
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 852px) {
    // Layout
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    // Box-model
    width: 3.5rem;
    height: 3.5rem;

    // Display
    cursor: pointer;

    // Change the components in this context
    div {
      width: 100%;
      height: 0.3rem;
    }
  }
`;

export const LineMenu = styled.div`
  background-color: ${theme.colors.white};
`;
