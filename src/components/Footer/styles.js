import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
    width: 100%;
    height: 6rem;
    background: ${theme.colors.gray400};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18.5rem;

`

export const Phrase = styled.p`
    color: ${theme.colors.white};
    font-size: 1.6rem;
    font-weight: 400;
`

export const Highlight = styled.span`
    color: ${theme.colors.greenLight};
`