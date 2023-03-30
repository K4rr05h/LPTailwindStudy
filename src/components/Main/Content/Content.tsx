import ContentIMG from '../../../imgs/Content.png';
import VRBoy from '../../../imgs/VRBoy.png';
import tw from 'tailwind-styled-components';

export default function content(){
    
    const Main = tw.div`
        flex
        flex-col
        items-center
        bg-white
        py-20
        
        lg:grid
        lg:grid-rows-2
        lg:justify-items-center
    `
    const WWA = tw.div`
        text-blue-900
        text-md
        text-center
        font-quick
        font-bold
        mt-5
    `
    const Title = tw.div`
        text-3xl
        text-center
        font-quick
        font-bold
        mx-16
        mt-2
    `
    const Content = tw.div`
        text-sm
        text-center
        font-quick
        font-light
        mx-14
        mt-4
    `
    const Number = tw.div`
        font-bold
        text-6xl
        font-quick
        text-center
        mt-8
        lg:text-4xl
    `
    const NumbSub = tw.div`
        font-quick
        font-bold
        text-center
        text-blue-700
    `
    const Block1 = tw.div`
        flex
        flex-col
        items-center
        justify-center
        px-40

        lg:flex-row-reverse
        lg:w-3/5
        lg:mb-10
        lg:px-0
        lg:gap-20
        lg:ml-12
    `
    const Block2 = tw.div`
        flex
        flex-col
        items-center
        justify-center
        px-40

        lg:flex-row-reverse
        lg:w-3/5
        lg:gap-48
        lg:px-0
        lg:mr-28
    `
    const ImportantTexts = tw.div`
        lg:flex
        lg:flex-col
    `
    const CompanyNumbers = tw.div`
        lg:flex
        lg:flex-col
    `
    const IMG = tw.img`
        my-10
        shadow-lg
        rounded-img
        shadow-gray-400
        
        lg:duration-300
        lg:hover:scale-104
    `
    
    return(
        <Main>
            <Block1>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <IMG
                src={ContentIMG}/>
                <ImportantTexts>
                    <WWA>Who we are</WWA>
                    <Title>
                        Professional Team for Your Solution
                    </Title>
                    <Content>
                        Vero eos et accusamus et iusto 
                        odio dignissimos ducimus qui blanditiis 
                        praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi.
                    </Content>
                </ImportantTexts>
            </Block1>
            
            <Block2>
                <CompanyNumbers>
                    <Number>502</Number>
                    <NumbSub>Projects</NumbSub>
                    <Number>10</Number>
                    <NumbSub>Employees</NumbSub>
                    <Number>2131</Number>
                    <NumbSub>Customers</NumbSub>
                    <Number>341</Number>
                    <NumbSub>Coffee</NumbSub>
                </CompanyNumbers>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <IMG
                src={VRBoy}/>
            </Block2>
        </Main>
    )
}