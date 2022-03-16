import React, { useState } from 'react'
import FristSec from '../components/FristSection/FS'
import NavBar from '../components/NavBar/index'
import SideBar from '../components/SideBar/Index'

function Home() {
    const [Open, setOpen] = useState(false)
    const openMenu = () => {
        setOpen(!Open)
    }

    return (
        <>
            <SideBar Open={Open} openMenu={openMenu} />
            <NavBar openMenu={openMenu} />
            <FristSec />
        </>
    )
}

export default Home