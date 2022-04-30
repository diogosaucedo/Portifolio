import { Container, BasicInfo, Salutation, Profession, DownloadButton, ContactButton, Character } from './styles';

export default function PersonalPresentation() {
    return (
        <Container>
            <BasicInfo>
                <Salutation>Olá, meu nome é Diogo Saucedo :)</Salutation>
                <Profession>Eu sou um desenvolvedor</Profession>
                <DownloadButton>Download CV</DownloadButton>
                <ContactButton>Entrar em contato</ContactButton>
            </BasicInfo>
            <Character src="./images/character.svg" alt="Ilustração de um homem segurando um celular" />
        </Container >
    );
}