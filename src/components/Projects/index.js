import { Container, Title, LastProjects, Project, ProjectName, ProjectTechnologies, Cover } from './styles'


export default function Projects() {
    return (
        <Container>
            <Title id='projetos'>Projetos</Title>
            <LastProjects>
                <Project>
                    <Cover></Cover>
                    <ProjectName>Projeto 1</ProjectName>
                    <ProjectTechnologies>html, js, css</ProjectTechnologies>
                </Project>
                <Project>
                    <Cover></Cover>
                    <ProjectName>Projeto 2</ProjectName>
                    <ProjectTechnologies>html, js, css</ProjectTechnologies>
                </Project>
                <Project>
                    <Cover></Cover>
                    <ProjectName>Projeto 3</ProjectName>
                    <ProjectTechnologies>html, js, css</ProjectTechnologies>
                </Project>
                <Project>
                    <Cover></Cover>
                    <ProjectName>Projeto 4</ProjectName>
                    <ProjectTechnologies>html, js, css</ProjectTechnologies>
                </Project>
                <Project>
                    <Cover></Cover>
                    <ProjectName>Projeto 5</ProjectName>
                    <ProjectTechnologies>html, js, css</ProjectTechnologies>
                </Project>
                <Project>
                    <Cover></Cover>
                    <ProjectName>Projeto 6</ProjectName>
                    <ProjectTechnologies>html, js, css</ProjectTechnologies>
                </Project>

            </LastProjects>
        </Container>


    )

}