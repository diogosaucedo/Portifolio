import { Container, Title, LastProjects, Project, ProjectName, ProjectTechnologies, Cover } from './styles'
import { Link } from '../Link/styles'



export default function Projects({ projectsData }) {
    function formatString(arr) {
        const techs = arr.map(item => item.node.name).toString();  // ["string", "string 2"]
        return techs.replace(/,/g, ', ') + '.'
    }

    return (
        <Container>
            <Title id='projetos'>Projetos</Title>
            <LastProjects>
                {projectsData.edges.map((project) => (
                    <Project>
                        <Cover></Cover>
                        <Link href={project.node.url} target='_blank'>
                            <ProjectName>{project.node.name.replace(/-/g, ' ')}</ProjectName>
                        </Link>
                        {project.node.languages.edges.length > 0 && (
                            <ProjectTechnologies>
                                Tecnologias:&nbsp;
                                {formatString(project.node.languages.edges)}
                            </ProjectTechnologies>
                        )}
                    </Project>
                ))}
            </LastProjects>
        </Container>
    )
}
