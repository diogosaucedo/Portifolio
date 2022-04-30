import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height:80px ;
    color: ${theme.colors.white};

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
`

export const MenuItem = styled.li`
    padding: 2rem;
`

export const LinkItem = styled.a`
    text-decoration: none;
    :visited{
        color: ${theme.colors.white};
    }
    :hover{
        cursor: pointer;
    }
`