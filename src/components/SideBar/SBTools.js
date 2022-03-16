import styled from 'styled-components'

import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'


export const SideBarCont = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #f53d71;
    display: grid;
    align-items: center;
    top:0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity:${({ Open }) => (Open ? '100%' : '0')};
    top: ${({ Open }) => (Open ? '0' : '-100%')};
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    `;
export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    
    @media screen and (max-width: 400px){
        grid-template-rows: repeat(6, 60px)
    }
    `
export const SideBtn = styled.div`
    display: flex ;
    justify-content: center;
  
`

export const SideBarWrapper = styled.div`
    color: #000
    `
export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out ;
    text-decoration: none;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    
    &:hover{
        color: #fff;
        transition: 0.2s ease-in-out;
    }
    `

export const SideBarRoutes = styled(LinkR)`
    white-space: 0;
    border-radious: 50px;
    padding: 16px 64px;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background: #fff;
    border-radius:50px;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #fff;
    }
    `
export const CloseIcon = styled(FaTimes)`
        color: #000
    `



