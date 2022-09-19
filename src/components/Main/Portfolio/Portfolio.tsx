import tw from 'tailwind-styled-components';

import Portfolio1 from '../../../imgs/1Portfolio.png';
import Portfolio2 from '../../../imgs/2Portfolio.png';
import Portfolio3 from '../../../imgs/3Portfolio.png';
import Portfolio4 from '../../../imgs/4Portfolio.png';
import Portfolio5 from '../../../imgs/5Portfolio.png';
import Portfolio6 from '../../../imgs/6Portfolio.png';

export default function portfolio() {

    const Main = tw.div`
    bg-white
    `
    const ImpactSub = tw.div`
    
    `
    const Title = tw.div`

    `
    const IMGTitle = tw.div`

    `
    const ProjectType = tw.div`

    `
    const BTNSeeMore = tw.button`
    
    `
    return(
        <>
            <Main>
                <Title>Portfolio</Title>
                <ImpactSub>Our Projects</ImpactSub>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={Portfolio1}/>
                <IMGTitle>Rocket Science</IMGTitle>
                <ProjectType>Web Development</ProjectType>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={Portfolio2} />
                <IMGTitle>Sketch</IMGTitle>
                <ProjectType>Consultance</ProjectType>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={Portfolio3} />
                <IMGTitle>Mr Robot</IMGTitle>
                <ProjectType>Web Design</ProjectType>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={Portfolio4} />
                <IMGTitle>To-Do-List</IMGTitle>
                <ProjectType>Web Design</ProjectType>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={Portfolio5} />
                <IMGTitle>Good Workplace</IMGTitle>
                <ProjectType>Consultance</ProjectType>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={Portfolio6} />
                <IMGTitle>Single Person</IMGTitle>
                <ProjectType>Web Development</ProjectType>
                <BTNSeeMore>See More</BTNSeeMore>
            </Main>
        </>
    )
}