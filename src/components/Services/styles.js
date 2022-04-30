import styled from 'styled-components'
import theme from '../../styles/theme'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: space-between;
`

export const Title = styled.h2`
    color: ${theme.colors.white};
    font-size: 3.2rem;
    font-weight: 700;
`

export const Items = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Item = styled.div`
    width: 29rem;
    background-color: ${theme.colors.gray400};
    border-bottom: 0.5rem solid ${theme.colors.greenLight};
    padding: 3rem;

`

export const ItemName = styled.h3`
    font-size: 3.2rem;
    font-weight: 500;
    color: ${theme.colors.gray};
    margin: 4rem 0 0 0;
`

export const ItemImg = styled.img`
    width: 5.6rem;
`