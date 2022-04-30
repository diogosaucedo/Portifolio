import { Container, Item, Title, Value, ContainerIcon, Icon } from './styles'

export default function Contacts() {
    return (
        <Container>
            <Item>
                <ContainerIcon>
                    <Icon src="./images/smile.svg" />
                </ContainerIcon>
                <Title>Meu nome</Title>
                <Value>Diogo Saucedo</Value>
            </Item>
            <Item>
                <ContainerIcon>
                    <Icon src="./images/mail.svg" />
                </ContainerIcon>
                <Title>E-mail</Title>
                <Value>diogosaucedo@hotmail.com</Value>
            </Item>
            <Item>
                <ContainerIcon>
                    <Icon src="./images/instagram.svg" />
                </ContainerIcon>
                <Title>Instagram</Title>
                <Value>@sauceded</Value>
            </Item>
            <Item>
                <ContainerIcon>
                    <Icon src="./images/phone.svg" />
                </ContainerIcon>
                <Title>Telefone</Title>
                <Value>(65) 98479-0509</Value>
            </Item>
        </Container>
    )
}

