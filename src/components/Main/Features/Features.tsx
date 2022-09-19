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
    `
    const Bloco = tw.div`
    flex
    flex-col
    items-center
    justify-center
    w-60
    h-80
    bg-white
    rounded-lg
    px-6
    gap-2
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

    return(
        <>
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
                    <a 
                    className="text-blue-700"
                    href="/src/App.tsx">Link X</a>
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
                    <a 
                    className="text-blue-700"
                    href="/src/App.tsx">Link X</a>
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
                    <a 
                    className="text-blue-700"
                    href="/src/App.tsx">Link X</a>
                </Bloco>
            </Main>
        </>
    )
}