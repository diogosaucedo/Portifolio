import { Container, Title, Items, Item, ItemName, ItemImg } from "./styles";

export default function Services() {
  return (
    <Container>
      <Title id="servicos">Serviços</Title>
      <Items>
        <Item>
          <ItemImg src="./images/code.svg" alt="Desenvolvimento de sites" />
          <ItemName>
            Criação
            <br />
            de sites
          </ItemName>
        </Item>
        <Item>
          <ItemImg src="./images/figma.svg" alt="UI Designer" />
          <ItemName>
            UI
            <br />
            Designer
          </ItemName>
        </Item>
        <Item>
          <ItemImg src="./images/smartphone.svg" alt="Sites Responsivos" />
          <ItemName>
            Sites
            <br />
            Responsivos
          </ItemName>
        </Item>
      </Items>
    </Container>
  );
}
