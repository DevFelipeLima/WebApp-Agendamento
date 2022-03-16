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
                    <SideBarLink to='Agenda' onClick={openMenu}>Agenda</SideBarLink>
                    <SideBarLink to='Contact' onClick={openMenu}>Contato</SideBarLink>
                    <SideBarLink to='signin' onClick={openMenu}>Signin</SideBarLink>
                </SideBarMenu>
                <SideBtn>
                    <SideBarRoutes to='/signin'>Sign In</SideBarRoutes>
                </SideBtn>
            </SideBarWrapper>
        </SideBarCont>
    )
}

export default SideBar