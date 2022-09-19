import tw from 'tailwind-styled-components';

import Saly from '../../../imgs/Saly-14.png';
import HeroBG from '../../../imgs/HeroBG.jpg';

export default function Hero() {

    const Main = tw.div`
    block
    m-0
    p-0
    w-full
    pt-32
    `
    const DMSFYB = tw.h1`
    font-quick
    font-light
    text-white
    text-5xl
    md:text-6xl
    text-center
    px-24
    `
    const BTNS = tw.div`
        flex
        flex-row
        justify-center
        gap-12
        z-0
    `
    const BTNMain = tw.button`
        w-32
        h-10
        rounded-md

        mt-8

        transition
        ease-out
        duration-300
        hover:scale-110

        active:scale-100

    `

    return(
        <>
            <Main>
                {/* eslint-disable-next-line jsx-a11y/alt-text
                <img 
                className=""
                src={HeroBG}/> */}
                <DMSFYB className="pt-0 md:pt-12">
                Digital Marketing Solution for
                <br/>
                </DMSFYB>
                
                <DMSFYB 
                className="font-bold p-0 text-amber-400">
                your BUSINESS
                </DMSFYB>
                
                <BTNS>
                    <BTNMain 
                    className="bg-white text-sky-900">
                    Cadastre-se
                    </BTNMain>
                    <BTNMain 
                    className="bg-transparent text-white border-white border-2">
                    Logar
                    </BTNMain>
                </BTNS>
                
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img 
                className="w-6/6 mx-auto sm:w-96 lg:w-2/4"
                src={Saly}/>
            </Main>
        </>
    )
}