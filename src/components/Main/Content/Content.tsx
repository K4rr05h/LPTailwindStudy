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
    `
    const NumbSub = tw.div`
    font-quick
    font-bold
    text-center
    text-blue-700
    `

    return(
        <Main>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img 
            className="w-4/6 shadow-lg rounded-img shadow-gray-400"
            src={ContentIMG}/>
            <WWA>
            Who we are
            </WWA>

            <Title>
                Professional Team for Your Solution
            </Title>
            <Content>
                Vero eos et accusamus et iusto 
                odio dignissimos ducimus qui blanditiis 
                praesentium voluptatum deleniti atque corrupti 
                quos dolores et quas molestias excepturi.
            </Content>
            
            <Number>502</Number>
            <NumbSub>Projects</NumbSub>
            <Number>10</Number>
            <NumbSub>Employees</NumbSub>
            <Number>2131</Number>
            <NumbSub>Customers</NumbSub>
            <Number>341</Number>
            <NumbSub>Coffee</NumbSub>

            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img 
            className="my-10 w-4/6 shadow-lg rounded-img shadow-gray-400"
            src={VRBoy}/>
        </Main>
    )
}