import { Container, Title, Items, Item, ItemImg } from "./styles";

export default function Skills() {
  return (
    <Container>
      <Title id="minhas-skills">Minhas Skills</Title>
      <Items>
        <Item>
          <ItemImg src="./images/html.svg" alt="html" />
        </Item>
        <Item>
          <ItemImg src="./images/css3.svg" alt="css" />
        </Item>
        <Item>
          <ItemImg src="./images/javascript.svg" alt="js" />
        </Item>
        <Item>
          <ItemImg src="./images/tailwind.svg" alt="tailwind" />
        </Item>
        <Item>
          <ItemImg src="./images/react.svg" alt="react" />
        </Item>
        <Item>
          <ItemImg src="./images/nextjs.svg" alt="Next.JS" />
        </Item>
      </Items>
    </Container>
  );
}
