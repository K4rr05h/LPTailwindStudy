import tw from 'tailwind-styled-components';
import PicGuy from '../../../imgs/PicGuy.png';

export default function Testimonials() {
    
    const Main = tw.div`
    flex
    flex-col
    items-center
    text-white
    font-quick
    `
    const Title = tw.div`
    mt-14
    mb-3
    text-sm
    font-semibold
    `
    const SubImpact = tw.div`
    font-bold
    text-3xl
    mb-5
    `
    const Testimonials = tw.div`
        lg:flex
        lg:flex-row
        lg:gap-4
    `
    const Testimonial = tw.div`
    flex
    flex-col
    items-center
    text-center

    text-black
    w-96
    bg-white
    rounded-lg
    p-7
    `
    const Dissertation = tw.div`
    
    `
    const Persona = tw.div`
        flex
        flex-row
        items-center
        justify-center
        gap-4
        mt-6
    `
    const TextPeople = tw.div`
        flex
        flex-col
        items-start
    `
    const Name = tw.div`
        text-lg
        font-semibold
        text-blue-800
    `
    const Profission = tw.div`
        text-blue-400
        text-sm
    `
    const Dots = tw.div`
        flex
        flex-row
        gap-5
        items-center
        justify-center
        mt-10
        mb-16
    `
    const Dot = tw.div`
        w-4
        h-4
        bg-transparent
        border-2
        border-white
        rounded-full
        cursor-pointer
    `

    return(
        <Main>
            <Title>
                Testimonials
            </Title>
            <SubImpact>
                Why People Love Us
            </SubImpact>
                <Testimonials>
                <Testimonial>
                    <Dissertation>
                    Sed ut perspiciatis unde 
                    omnis iste natus error sit 
                    voluptatem accusantium 
                    doloremque laudantium.
                    </Dissertation>
                    <Persona>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img 
                        className=""
                        src={PicGuy}/>
                        <TextPeople>
                        <Name>Robert Johnson</Name>
                        <Profission>Graphic Designer</Profission>
                        </TextPeople>
                    </Persona>
                </Testimonial>
                <Testimonial className="hidden lg:flex">
                    <Dissertation>
                    Sed ut perspiciatis unde 
                    omnis iste natus error sit 
                    voluptatem accusantium 
                    doloremque laudantium.
                    </Dissertation>
                    <Persona>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img 
                        className=""
                        src={PicGuy}/>
                        <TextPeople>
                        <Name>Robert Johnson</Name>
                        <Profission>Graphic Designer</Profission>
                        </TextPeople>
                    </Persona>
                </Testimonial>
                <Testimonial className="hidden lg:flex">
                    <Dissertation>
                    Sed ut perspiciatis unde 
                    omnis iste natus error sit 
                    voluptatem accusantium 
                    doloremque laudantium.
                    </Dissertation>
                    <Persona>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img 
                        className=""
                        src={PicGuy}/>
                        <TextPeople>
                        <Name>Robert Johnson</Name>
                        <Profission>Graphic Designer</Profission>
                        </TextPeople>
                    </Persona>
                </Testimonial>
            </Testimonials>
            <Dots>
                <Dot/>
                <Dot/>
                <Dot/>
                <Dot/>
                <Dot/>
            </Dots>
        </Main>
    )
}