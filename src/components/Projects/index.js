import {
  Container,
  Title,
  LastProjects,
  Project,
  ProjectName,
  ProjectTechnologies,
  Cover,
} from "./styles";
import { Link } from "../Link/styles";

export default function Projects({ projectsData }) {
  function arrayToString(arr) {
    const techs = arr.map((item) => item.node.name).toString(); // "string, string 2"
    return techs.replace(/,/g, ", ") + "."; // "string, string 2."
  }

  return (
    <Container>
      <Title id="projetos">Projetos</Title>
      <LastProjects>
        {projectsData.edges.map((project) => (
          <Project key={project.node.id}>
            <Link href={project.node.url} target="_blank">
              <Cover></Cover>
              <ProjectName>{project.node.name.replace(/-/g, " ")}</ProjectName>
              {project.node.languages.edges.length > 0 && (
                <ProjectTechnologies>
                  Tecnologias:&nbsp;
                  {arrayToString(project.node.languages.edges)}
                </ProjectTechnologies>
              )}
            </Link>
          </Project>
        ))}
      </LastProjects>
    </Container>
  );
}
