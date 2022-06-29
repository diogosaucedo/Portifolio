import {
  Container,
  BasicInfo,
  Salutation,
  Profession,
  DownloadButton,
  ContactButton,
  Character,
} from "./styles";
import { Link } from "../Link/styles";

export default function PersonalPresentation({ userData }) {
  return (
    <Container>
      <BasicInfo>
        <Salutation>Olá, meu nome é {userData.name} :)</Salutation>
        <Profession>{userData.bio}</Profession>
        <Link href="./pdf/cv-saucedo.pdf" download>
          <DownloadButton>Download CV</DownloadButton>
        </Link>
        <Link href="mailto:diogoferreiradfs@hotmail.com">
          <ContactButton>Entrar em contato</ContactButton>
        </Link>
      </BasicInfo>
      <Character
        src="./images/character.svg"
        alt="Ilustração de um homem segurando um celular"
      />
    </Container>
  );
}
