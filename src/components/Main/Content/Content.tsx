import ContentIMG from '../../../imgs/Content.png';
import VRBoy from '../../../imgs/VRBoy.png';
import tw from 'tailwind-styled-components';

export default function content(){
    
    const Main = tw.div`
        flex
        flex-col
        items-center
        bg-white
        pt-20
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
        lg:flex
        lg:flex-row-reverse
        lg:items-center
        lg:justify-center
        lg:gap-12
        lg:w-3/5
        lg:mb-10
    `
    const Block2 = tw.div`
        lg:flex
        lg:flex-row-reverse
        lg:items-center
        lg:justify-center
        lg:w-3/5
        lg:gap-10
    `
    const ImportantTexts = tw.div`
        lg:flex
        lg:flex-col
    `
    const CompanyNumbers = tw.div`
        lg:flex
        lg:flex-col
    `
    return(
        <Main>
            <Block1>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img 
                className="w-4/6 shadow-lg rounded-img shadow-gray-400"
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
                <img 
                className="my-10 w-4/6 shadow-lg rounded-img shadow-gray-400 lg:w-2/4 lg:mr-40"
                src={VRBoy}/>
            </Block2>
        </Main>
    )
}