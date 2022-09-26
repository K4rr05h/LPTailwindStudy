import tw from 'tailwind-styled-components';

import Saly from '../../../imgs/Saly-14.png';
import SalyLG from '../../../imgs/SalyLG.png';

export default function Hero() {

    const Main = tw.div`
        block
        m-0
        p-0
        w-full
        pt-32

        lg:flex
        lg:flex-row
    `
    const DMSFYB = tw.h1`
        font-quick
        font-light
        text-white
        text-5xl
        text-center
        px-24

        lg:text-start
        lg:text-5xl
        lg:pl-20
    `
    const BTNS = tw.div`
        flex
        flex-row
        justify-center
        gap-12
        z-0

        md:justify-start
        md:pl-20
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
    const DivConteudo = tw.div`
        md:flex
        md:flex-col
    `

    return(
        <>
            <Main>
                <DivConteudo>
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
                </DivConteudo>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img 
                className="w-6/6 mx-auto sm:w-96 md:hidden"
                src={Saly}/>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img 
                className="hidden md:inline w-1/3"
                src={SalyLG}/>
            </Main>
        </>
    )
}