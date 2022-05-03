import { Container, Item, Title, Value, ContainerIcon, Icon } from './styles'
import { Link } from '../Link/styles'

export default function Contacts() {
    return (
        <Container>
            <Link href="https://www.linkedin.com/in/diogo-ferreira-saucedo/" target='_blank'>
                <Item>
                    <ContainerIcon>
                        <Icon src="./images/smile.svg" />
                    </ContainerIcon>
                    <Title>Meu nome</Title>
                    <Value>Diogo Saucedo</Value>
                </Item>
            </Link>

            <Link href="mailto:diogoferreiradfs@hotmail.com">
                <Item>
                    <ContainerIcon>
                        <Icon src="./images/mail.svg" />
                    </ContainerIcon>
                    <Title>E-mail</Title>
                    <Value>diogoferreiradfs<br />@hotmail.com</Value>
                </Item>
            </Link>

            <Link href='https://www.instagram.com/' target='_blank'>
                <Item>
                    <ContainerIcon>
                        <Icon src="./images/instagram.svg" />
                    </ContainerIcon>
                    <Title>Instagram</Title>
                    <Value>@saucedo</Value>
                </Item>
            </Link>

            <Link href='tel:65984790509'>
                <Item>
                    <ContainerIcon>
                        <Icon src="./images/phone.svg" />
                    </ContainerIcon>
                    <Title>Telefone</Title>
                    <Value>(65)98479-0509</Value>
                </Item>
            </Link>
        </Container>
    )
}

