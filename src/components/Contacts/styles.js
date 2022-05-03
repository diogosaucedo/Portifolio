import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 8.5rem;
    flex-wrap: wrap;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 700px) { 
        margin: 1rem;
    }
`

export const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${theme.colors.white};
    margin: 1.9rem 0 0 0;
`

export const Value = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${theme.colors.gray};
    margin: 0.5rem 0 0 0;
`

export const ContainerIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6.2rem;
    height: 6.2rem;
    border-radius: 50%;
    background-color: ${theme.colors.gray400};
`

export const Icon = styled.img``
