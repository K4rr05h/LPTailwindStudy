import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

import Ph1 from '../../../imgs/ComputerBoy.png';
import Ph2 from '../../../imgs/WhiteFlag.png';

export default function FAQ() {

    const [contentOpen1, setContentOpen1] = useState(false);
    const toggle1 = () => setContentOpen1(!contentOpen1);

    const [contentOpen2, setContentOpen2] = useState(false);
    const toggle2 = () => setContentOpen2(!contentOpen2);

    const [contentOpen3, setContentOpen3] = useState(false);
    const toggle3 = () => setContentOpen3(!contentOpen3);

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
    const Question = tw.button`
        flex
        flex-col
    
        w-80
        border-2
        border-sky-50
        rounded-lg

        text-start
        
        mb-3
        px-3
        py-2

        duration-300
        ease-out

        hover:text-black
        hover:border-transparent
        hover:bg-sky-100
    `
    const Response = tw.div`
        hidden
        text-gray-600
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
        bg-sky-50
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

        duration-300
        hover:scale-104
        hover:bg-blue-500
        hover:text-yellow-400
    `
    const ListQuestions = tw.div`
        flex
        flex-col
        items-center
        mt-10
        mb-10
        self-start
        lg:static
    `
    const LGOrganization = tw.div`
        lg:grid
        lg:grid-cols-2
    `

    return(
        <Main>
            <Title>Frequently Asked Question</Title>
            <ImpactSub>How can we help?</ImpactSub>
            <LGOrganization>
                <ListQuestions>
                    <Question
                    onClick={toggle1}>
                        Question1
                        <Response
                        className={
                            contentOpen1 ? 
                            'duration-100 inline' : 'hidden'
                            }>
                            Blablabla
                        </Response>
                    </Question>
                    
                    <Question
                    onClick={toggle2}>
                        Question2
                        
                        <Response
                        className={contentOpen2 ? 'inline' : 'hidden'}>
                            Blablabla
                        </Response>
                    </Question>
                    
                    <Question
                    onClick={toggle3}>
                        Question3
                        <Response
                        className={contentOpen3 ? 'inline' : 'hidden'}>
                            Blablabla
                        </Response>
                    </Question>
                </ListQuestions>

                <img 
                className="duration-300 ease-out hover:scale-104"
                src={Ph1} 
                alt="" />

            </LGOrganization>
        
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
    )
}