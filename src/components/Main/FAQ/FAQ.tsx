import tw from 'tailwind-styled-components';

import Ph1 from '../../../imgs/ComputerBoy.png';
import Ph2 from '../../../imgs/WhiteFlag.png';

export default function FAQ() {

    const Main = tw.div`
        flex
        flex-col
        items-center
        text-white
    `
    const Title = tw.div`
        text-yellow-500
        font-quick
        font-semibold
        mt-20
    `
    const ImpactSub = tw.div`
        font-bold
        font-quick
        text-3xl
        mt-3
        mb-8
    `
    const Question = tw.div`
        w-80
        border-2
        border-sky-50
        rounded-lg
        
        mb-3
        px-3
        py-2
    `
    const Response = tw.div`
        hidden
    `
    const ContainerContactDIV = tw.div`
    `
    const ContactDIV = tw.div`
        z-10
        flex
        flex-col
        items-center
        mt-20
        pt-16

        w-full
        bg-white
        rounded-img2
    `
    const CTA = tw.figcaption`
        w-40
        text-black
        text-center
        text-3xl
        mb-4
        font-quick
        font-bold
    `
    const BTNContact = tw.button`
        z-10
        top-48
        left-32
        
        w-32
        h-12
        bg-blue-800
        rounded-xl

        font-quick
        font-semibold
    `

    return(
        <>
            <Main>
                <Title>Frequently Asked Question</Title>
                <ImpactSub>How can we help?</ImpactSub>
                <Question>
                    Question1
                    <Response>
                        Blablabla
                    </Response>
                </Question>
                
                <Question>
                    Question2
                    
                    <Response>
                        Blablabla
                    </Response>
                </Question>
                
                <Question>
                    Question3
                    <Response>
                        Blablabla
                    </Response>
                </Question>

                <img 
                className=""
                src={Ph1} 
                alt="" />
            
                <ContainerContactDIV>
                    <ContactDIV>
                        <CTA>Let's Work Together</CTA>
                        <BTNContact>Contact Us</BTNContact>
                        <img 
                        className="-mt-56"
                        src={Ph2} 
                        alt="" />
                    </ContactDIV>
                </ContainerContactDIV>
                
            </Main>            
        </>
    )
}