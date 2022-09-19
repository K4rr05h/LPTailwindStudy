import React from 'react';
import tw from 'tailwind-styled-components';
import { useState } from "react";
import LogoPNG from '../../imgs/Logo3.png';


export default function header(props: { acao: any; }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggle = () => setIsNavOpen(!isNavOpen);
    const hide = () => setIsNavOpen(false);
    const show = () => setIsNavOpen(true)

    // Header Styles
    const Header = tw.div`
    fixed
    p-4
    flex
    flex-row
    justify-between
    items-center
    w-full
    bg-sky-300/25
    rounded-b-lg
    `
    const Items = tw.div`
    flex
    flex-row
    gap-10
    ml-10

    hidden
    md:flex
    md:flex-row
    md:gap-10
    md:ml-10
    `
    const Item = tw.button`
        rounded
        cursor-pointer
        text-white
        align-text-center
        text-sm

        font-quick
        
        // hover
        transition
        ease-in-out
        duration-300
        transform
        hover:text-red-200
        hover:scale-110
    `
    const Logo = tw.div`
        flex
        flex-row
        items-center
        font-quick
        text-white
        text-center
        text-sm
        gap-4
    `
    const WorkBtn = tw.button`
    rounded-md
    cursor-pointer
    text-white
    align-text-center
    text-sm
    bg-transparent
    px-3
    py-2

    font-quick
    
    // hover
    transition
    ease-in-out
    duration-300
    transform
    hover:text-red-700
    hover:scale-110
    hover:bg-zinc-200

    hidden
    md:inline
    `
    const Hamburguer = tw.div`
        w-12
        h-12
        rounded-full
        cursor-pointer

        flex
        flex-col
        items-center
        justify-between

        py-2

        transition
        ease-in-out
        duration-300
        transform
        hover:scale-110

        md:hidden
    `
    // NavDrawerMobile Styles
    const XBtn = tw.button`
    pointer
    p-6

    transition
    ease-in-out
    duration-300
    hover:scale-110
    `
    const Mobile = tw.div`
        fixed
        text-end
        w-full
        h-full
        
        
        font-semibold
        gap-2
        bg-gradient-to-b
        from-emerald-800/75
        to-sky-900/75
        backdrop-blur-md
    `
    const MobileNavOpen = tw.div`
    fixed
    z-50
    text-center
    w-full
    h-full
        
    font-semibold
    `
    const ItemMobile = tw.div`
        block
        rounded-md
        cursor-pointer
        text-white
        align-text-center
        text-2xl

        mt-1
        py-2
        pr-2

        font-quick
        
        // hover
        transition
        ease-in-out
        duration-300
        hover:text-red-200
        hover:scale-101
        active:bg-slate-900
    `

    return(
        <>
            <Header 
            className={
                props.acao ? 
                'backdrop-blur-sm transition ease-in duration-500' 
                : 
                ''}>
                    <Logo>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img 
                        className=" h-10 w-10"
                        src={LogoPNG}/>
                        <p>JR Enterprises</p>
                    </Logo>
            
                    <Items>
                        <Item>
                            Home
                        </Item>
                        <Item>
                            Portfólio
                        </Item>
                        <Item>
                            Services
                        </Item>
                        <Item>
                            Blog
                        </Item>
                        <Item>
                            About us
                        </Item>
                    </Items>

                    <WorkBtn>
                    Work With US
                    </WorkBtn>

                    <Hamburguer 
                    onClick={toggle}
                    >
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-6 h-6 text-white">
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </Hamburguer>

            </Header>

            <Mobile 
            className={isNavOpen ? 'inline' : 'hidden'}>
                <XBtn onClick={toggle}>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6 text-white"
                    >
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M6 18L18 6M6 6l12 12" 
                    />
                    </svg>
                </XBtn>
                <MobileNavOpen>
                    <ItemMobile className="mt-32">
                    <a href="./App.tsx">Home</a>
                    </ItemMobile>
                    <ItemMobile>
                    <a href="./App.tsx">Portfólio</a>
                    </ItemMobile>
                    <ItemMobile>
                    <a href="./App.tsx">Services</a>
                    </ItemMobile>
                    <ItemMobile>
                    <a href="./App.tsx">Blog</a>
                    </ItemMobile>
                    <ItemMobile>
                    <a href="./App.tsx">About us</a>
                    </ItemMobile>
                </MobileNavOpen>
            </Mobile>
        </>
    )
}