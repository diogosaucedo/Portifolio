import { Container, Menu, MenuItems, MenuItem, Portifolio } from './styles'

export default function NavigationBar() {
    return (
        <Container>
            <Portifolio>Portifolio</Portifolio>
            <Menu>
                <MenuItems>
                    <MenuItem>Sobre Mim</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                    <MenuItem>Serviços</MenuItem>
                    <MenuItem>Minhas Skills</MenuItem>
                </MenuItems>
            </Menu>
        </Container>
    )
}