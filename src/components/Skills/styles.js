import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12rem;
`

export const Title = styled.h2`
    color: ${theme.colors.white};
    font-size: 3.2rem;
    font-weight: 700;
    margin: 0 0 3rem 0;
`

export const Items = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
        justify-content: space-around;
    }

`

export const Item = styled.div`
    width: 15rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray400};

    @media (max-width: 1200px) {
        margin: 0.5rem;
    }
    @media (max-width: 406px) {
        margin: 0.15rem;
    }
    @media (max-width: 387px) {
        margin: 0.5rem;
    }

`

export const ItemImg = styled.img`
    width: 8rem;
`