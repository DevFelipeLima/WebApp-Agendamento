import React from 'react'
import BottonsPrevPass from '../Buttons/Buttonpass'
import { GaleryContainer, GContent, GH1, GContentAll } from './GaleryStyles'

const Galery = () => {


    return (
        <>

            <GaleryContainer>
                <GContentAll>
                    <GH1> Fotos de algumas de nossas clientes.</GH1>
                    <GContent>

                    </GContent>
                    <BottonsPrevPass />

                </GContentAll>

            </GaleryContainer>

        </>
    )
}

export default Galery