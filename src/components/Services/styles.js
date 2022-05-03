import styled from 'styled-components'
import theme from '../../styles/theme'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: space-between;
    margin-top: 9rem;
`

export const Title = styled.h2`
    color: ${theme.colors.white};
    font-size: 3.2rem;
    font-weight: 700;
    margin: 0 0 3rem 0;
`

export const Items = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Item = styled.div`
    width: 29rem;
    background-color: ${theme.colors.gray400};
    border-bottom: 0.5rem solid ${theme.colors.greenLight};
    padding: 4rem 3rem 2.5rem 3rem;
    @media (max-width: 1330px) {
        margin: 0.5rem;
    }
    @media (max-width: 912px) {
        width: 100%;
    }
`

export const ItemName = styled.h3`
    font-size: 3.2rem;
    font-weight: 500;
    color: ${theme.colors.gray};
    margin: 3rem 0 0 0;
`

export const ItemImg = styled.img`
    width: 5.6rem;
`