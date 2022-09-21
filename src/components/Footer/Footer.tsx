import tw from 'tailwind-styled-components';

import IMGLogo from '../../imgs/Logo3.png'

export default function footer() {
        const Main = tw.div`
        w-full
        bg-gray-700
        h-auto
        -mt-60
        pt-60

        flex
        flex-col
        items-center

        text-white
        font-quick
    `
    const Logo = tw.div`
        w-12
    `
    const Logomarca = tw.div`
        flex
        flex-row
        items-center
        justify-center

        w-full
        pt-10
    `
    const TitleMenu = tw.div`
        text-md
        font-bold
        mt-7
        mb-3
    `
    const MenuItems = tw.button`
        text-sm
    `
    const ListMenuItems = tw.div`
        flex
        flex-col
        gap-1.5
    `
    const SocialMedia = tw.div`
    
    `
    const Credits = tw.div`
        my-10
    `

    return(
        <>
            <Main>
                <Logomarca>
                    <Logo>
                        <img src={IMGLogo} alt="" />
                    </Logo>
                    <p>JR Enterprises</p>
                </Logomarca>
                <TitleMenu>
                    Our Services
                </TitleMenu>
                <ListMenuItems>
                    <MenuItems>
                        Link One
                    </MenuItems>
                    <MenuItems>
                        Link Two
                    </MenuItems>
                    <MenuItems>
                        Link Three
                    </MenuItems>
                    <MenuItems>
                        Link Four
                    </MenuItems>
                    <MenuItems>
                        Link Five
                    </MenuItems>
                </ListMenuItems>
                <TitleMenu>
                    About Us
                </TitleMenu>
                <ListMenuItems>
                    <MenuItems>
                        Link One
                    </MenuItems>
                    <MenuItems>
                        Link Two
                    </MenuItems>
                    <MenuItems>
                        Link Three
                    </MenuItems>
                </ListMenuItems>
                <TitleMenu>
                    Contacts
                </TitleMenu>
                <ListMenuItems>
                    <MenuItems>
                        Link One
                    </MenuItems>
                    <MenuItems>
                        Link Two
                    </MenuItems>
                    <MenuItems>
                        Link Three
                    </MenuItems>
                </ListMenuItems>
                <SocialMedia>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </SocialMedia>
                <Credits>
                Copyright © 2022, Ratchanon
                </Credits>
            </Main>
        </>
    )
}