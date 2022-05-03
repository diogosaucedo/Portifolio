import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10rem ;
    align-items: center;
    color: ${theme.colors.white};
    width: 100%;
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const BasicInfo = styled.div`
    max-width: 40rem;
`

export const Salutation = styled.h1`
    font-size: 3.6rem;
    font-weight: 700;
    
`

export const Profession = styled.p`
    font-size: 1.8rem;
    color: ${theme.colors.gray};
    margin: 1.8rem 0 3.5rem 0;
`

export const DownloadButton = styled.button`
    min-width: 14.7rem;
    height:4.2rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${theme.colors.dark};
    background-color: ${theme.colors.greenLight};
    border: none;
    margin-right: 0.75rem;
    cursor: pointer;
    @media (max-width: 391px) {
        margin: 0 1.5rem 2rem 0;
    }

`

export const ContactButton = styled.button`
    min-width: 14.7rem;
    height:4.2rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${theme.colors.white};
    background-color: ${theme.colors.dark};
    border: 0.1rem solid ${theme.colors.gray200};
    margin-left: 0.75rem;
    cursor: pointer;
    @media (max-width: 391px) {
        margin: 0 ;
    }
`

export const Character = styled.img`
    max-width: 30rem ;
    @media (max-width: 820px) {
        display: none;
    }
`
