import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height:80px ;
    color: ${theme.colors.white};

    // className={!isOpen ? 'visible' : 'invisible'}
    .invisible {
        // Hide menu only if the screen is smaller than 852px
        @media (max-width: 852px) {
            display: none;
        }
    }
    .visible{
        // Show menu only if the screen is smaller than 852px
        @media (max-width: 852px) {
            display:flex;
        }
    }

`

export const Portifolio = styled.span`
    font-size: 2.6rem;
    font-weight: 700;
`

export const Menu = styled.nav``

export const MenuItems = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    font-size: 1.8rem ;
    @media (max-width: 852px) {
        display: none;
        position: absolute;
        top: 80px;
        left: 0;
        margin: 0;
        flex-direction: column;
        background-color: ${theme.colors.dark};
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding: 0;
    }
`

export const MenuItem = styled.li`
    padding: 2rem;
`

export const Exit = styled.span`
    display: none;
    padding: 2rem 0 2rem 2rem;
    font-size: 1.8rem;
    color: ${theme.colors.greenLight};
`

export const HamburgerMenu = styled.div`
    display: none; 
    @media (max-width: 852px) {
        display: flex;
        width: 3.5rem;
        height: 3.5rem;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }
    `
export const LineMenu = styled.div`
    width: 100%;
    height: 0.3rem;
    background-color: ${theme.colors.white};
`