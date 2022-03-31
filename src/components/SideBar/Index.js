import React from 'react'
import {
    SideBarCont, Icon, SideBtn, SideBarMenu,
    SideBarWrapper, SideBarLink,
    SideBarRoutes, CloseIcon
} from './SBTools'

function SideBar({ Open, openMenu }) {
    return (
        <SideBarCont Open={Open} onClick={openMenu}>
            <Icon onClick={openMenu}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about' onClick={openMenu}>Sobre</SideBarLink>
                    <SideBarLink to='agenda' onClick={openMenu}>Agenda</SideBarLink>
                    <SideBarLink to='galery' onClick={openMenu}>Galeria</SideBarLink>
                    <SideBarLink to='contact' onClick={openMenu}>Contato</SideBarLink>
                    <SideBarLink to='signup' onClick={openMenu}>Cadastre-se</SideBarLink>
                </SideBarMenu>
                <SideBtn>
                    <SideBarRoutes to='/signin'>Login</SideBarRoutes>
                </SideBtn>
            </SideBarWrapper>
        </SideBarCont>
    )
}

export default SideBar