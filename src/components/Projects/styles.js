import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;
`

export const Title = styled.h2`
    font-size: 3.2rem;
    font-weight: 700;
    color: ${theme.colors.white};
    margin: 0 0 3rem 0;
`

export const LastProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`

export const Project = styled.div`
    padding: 2rem 2.5rem;
    background: ${theme.colors.gray400};
    margin-bottom:3.2rem ;

`

export const ProjectName = styled.h3`
    font-size: 1.8rem;
    font-weight: 500;
    color: ${theme.colors.white};
    margin: 2.3rem 0 0 0;
`

export const ProjectTechnologies = styled.p`
    font-size: 1.4rem;
    color: ${theme.colors.gray};
    font-weight: 400;
    margin: 0.6rem 0 0 0;
`

export const Cover = styled.div`
    width: 30rem;
    height: 13rem;
    background: ${theme.colors.dark}; 
    margin: 0;
`
