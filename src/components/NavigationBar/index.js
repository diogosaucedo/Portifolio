import { Container, Menu, MenuItems, MenuItem, Portifolio } from './styles'
import { Link } from '../Link/styles'

export default function NavigationBar() {
    return (
        <Container>
            <Link href='/'>
                <Portifolio>Portifólio</Portifolio>
            </Link>
            <Menu>
                <MenuItems>
                    <Link href='#sobre-mim'><MenuItem>Sobre Mim</MenuItem></Link>
                    <Link href='#projetos'><MenuItem>Projetos</MenuItem></Link>
                    <Link href='#servicos'><MenuItem>Serviços</MenuItem></Link>
                    <Link href='#minhas-skills'><MenuItem>Minhas Skills</MenuItem></Link>
                </MenuItems>
            </Menu>
        </Container>
    )
}