import tw from 'tailwind-styled-components';
import Computer from '../../../imgs/Computer.png';
import Chatbox from '../../../imgs/Chat-box.png';
import BoxDelivery from '../../../imgs/Box-delivery.png'

export default function Features() {

    const Main = tw.div`
        flex
        flex-col
        justify-center
        items-center
        gap-20
        p-10
        pt-16
        pb-20
        bg-sky-100

        lg:flex-row
    `
    const Bloco = tw.div`
        flex
        flex-col
        items-center
        justify-center
        w-60
        h-80
        bg-gray-50
        rounded-lg
        px-6
        gap-2
        shadow-md

        ease-in-out
        duration-300
        hover:scale-110
        hover:shadow-lg
    `
    const Imagem = tw.img`
        w-16
    `
    const Titulo = tw.h1`
        text-md
        font-bold
        font-quick
    `
    const Conteudo = tw.p`
        text-sm
        text-justify
        font-quick
    `
    const Link = tw.a`
        text-blue-700
        
        duration-200
        hover:text-blue-500
        hover:scale-110
    `

    return(
        <Main>
            <Bloco>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Imagem src={Computer}/>
                <Titulo>Web Design</Titulo>
                <Conteudo>
                    Lorem Ipsum is simply dummy 
                    text of the printing and typesetting 
                    industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever 
                    since the 1500s.
                </Conteudo>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <Link
                href="/src/App.tsx">Link X</Link>
            </Bloco> 
            <Bloco>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Imagem src={Chatbox}/>
                <Titulo>Consultance</Titulo>
                <Conteudo>
                    Lorem Ipsum is simply dummy 
                    text of the printing and typesetting 
                    industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever 
                    since the 1500s.
                </Conteudo>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <Link
                href="/src/App.tsx">Link X</Link>
            </Bloco>
            <Bloco>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Imagem src={BoxDelivery}/>
                <Titulo>Web Development</Titulo>
                <Conteudo>
                    Lorem Ipsum is simply dummy 
                    text of the printing and typesetting 
                    industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever 
                    since the 1500s.
                </Conteudo>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <Link
                href="/src/App.tsx">Link X</Link>
            </Bloco>
        </Main>
    )
}