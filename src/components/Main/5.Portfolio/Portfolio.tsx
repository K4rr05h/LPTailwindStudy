import tw from 'tailwind-styled-components';

import Portfolio1 from '../../../imgs/1Portfolio.png';
import Portfolio2 from '../../../imgs/2Portfolio.png';
import Portfolio3 from '../../../imgs/3Portfolio.png';
import Portfolio4 from '../../../imgs/4Portfolio.png';
import Portfolio5 from '../../../imgs/5Portfolio.png';
import Portfolio6 from '../../../imgs/6Portfolio.png';

export default function portfolio() {

    const Main = tw.div`
        flex
        flex-col
        items-center
        justify-center
        bg-white
        font-quick
    `
    const ImpactSub = tw.div`
        text-3xl
        font-semibold
        mt-1
        mb-6
    `
    const Title = tw.div`
        mt-14
        text-sm
        text-blue-600
        font-bold
    `
    const IMGTitle = tw.div`
        font-bold
        text-md
        mt-4
    `
    const ProjectType = tw.div`
        text-sm
        text-blue-600
        mb-6
    `
    const BTNSeeMore = tw.button`
        w-44
        h-14
        bg-blue-700
        text-white
        rounded-xl
        mb-20
        
        ease-out
        duration-300
        hover:scale-110
    `
    const LGOrganization = tw.div`
        flex
        flex-col
        items-center

        lg:grid
        lg:grid-cols-3
        lg:gap-4
    `
    const Item = tw.div`
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer

        duration-300
        hover:scale-104
    `
    return(
        <Main>
            <Title>Portfolio</Title>
            <ImpactSub>Our Projects</ImpactSub>
            <LGOrganization>
                <Item>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={Portfolio1}/>
                    <IMGTitle>Rocket Science</IMGTitle>
                    <ProjectType>Web Development</ProjectType>
                </Item>
                <Item>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={Portfolio2} />
                    <IMGTitle>Sketch</IMGTitle>
                    <ProjectType>Consultance</ProjectType>
                </Item>
                <Item>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={Portfolio3} />
                    <IMGTitle>Mr Robot</IMGTitle>
                    <ProjectType>Web Design</ProjectType>
                </Item>
                <Item>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={Portfolio4} />
                    <IMGTitle>To-Do-List</IMGTitle>
                    <ProjectType>Web Design</ProjectType>
                </Item>
                <Item>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={Portfolio5} />
                    <IMGTitle>Good Workplace</IMGTitle>
                    <ProjectType>Consultance</ProjectType>
                </Item>
                <Item>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={Portfolio6} />
                    <IMGTitle>Single Person</IMGTitle>
                    <ProjectType>Web Development</ProjectType>
                </Item>
            </LGOrganization>
            <BTNSeeMore>See More</BTNSeeMore>
        </Main>
    )
}