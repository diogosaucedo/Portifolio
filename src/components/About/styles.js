import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16rem ;
`

export const Title = styled.h2`
    font-size: 3.2rem;
    font-weight: 700;
    color: ${theme.colors.white};
    margin: 0 0 3rem 0;
`

export const Description = styled.p`
    max-width: 74.5rem;
    text-align: center;
    color: ${theme.colors.gray};
    font-size: 1.8rem;
    font-weight: 400;
    margin:0;
`