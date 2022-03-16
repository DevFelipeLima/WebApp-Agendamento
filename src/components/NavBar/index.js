import React from 'react'
import {
     Nav, NavBarContainer, NavLogo,
     MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink
} from './NavBarTools'
import { FaBars } from 'react-icons/fa'


const NavBar = ({ openMenu }) => {
     return (
          <>
               <Nav>
                    <NavBarContainer>
                         <NavLogo to='/' >Logo </NavLogo>
                         <MobileIcon onClick={openMenu}>
                              <FaBars></FaBars>
                         </MobileIcon>
                         <NavMenu>
                              <NavItem>
                                   <NavLinks to='about'>Sobre</NavLinks>
                              </NavItem>
                              <NavItem>
                                   <NavLinks to='agenda'>Agenda</NavLinks>
                              </NavItem>
                              <NavItem>
                                   <NavLinks to='contact'>Contatos</NavLinks>
                              </NavItem>
                              <NavItem>
                                   <NavLinks to='signup'>Sign up</NavLinks>
                              </NavItem>
                         </NavMenu>
                         <NavBtn>
                              <NavBtnLink to='singin'>Sing in</NavBtnLink>
                         </NavBtn>
                    </NavBarContainer>
               </Nav>
          </>
     );
}

export default NavBar;