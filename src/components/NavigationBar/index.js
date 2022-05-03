import { Container, Menu, MenuItems, MenuItem, Portifolio, Exit, HamburgerMenu, LineMenu } from './styles'
import { Link } from '../Link/styles'
import { useState } from 'react'

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        // Applies changes only on screen smaller than 852px
        if (window.innerWidth <= 852) {
            setIsOpen(!isOpen)
            changeScroll()
        }
    }

    const changeScroll = () => document.body.style.overflow = isOpen ? 'auto' : 'hidden'

    return (
        <Container>
            <Link href='/'>
                <Portifolio>Portifólio</Portifolio>
            </Link>
            <Menu>
                <HamburgerMenu className={!isOpen ? 'visible' : 'invisible'} onClick={toggleMenu}>
                    <LineMenu></LineMenu>
                    <LineMenu></LineMenu>
                    <LineMenu></LineMenu>
                </HamburgerMenu>
                <Exit className={isOpen ? 'visible' : 'invisible'} onClick={toggleMenu}>[Fechar]</Exit>
                <MenuItems className={isOpen ? 'visible' : 'invisible'}>
                    <Link onClick={toggleMenu} href='#sobre-mim'><MenuItem>Sobre Mim</MenuItem></Link>
                    <Link onClick={toggleMenu} href='#projetos'><MenuItem>Projetos</MenuItem></Link>
                    <Link onClick={toggleMenu} href='#servicos'><MenuItem>Serviços</MenuItem></Link>
                    <Link onClick={toggleMenu} href='#minhas-skills'><MenuItem>Minhas Skills</MenuItem></Link>
                </MenuItems>
            </Menu>
        </Container>
    )
}