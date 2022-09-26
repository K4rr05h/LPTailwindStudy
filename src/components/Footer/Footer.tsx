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
        flex
        flex-row
        justify-center
        w-28
        mt-10
    `
    const Credits = tw.div`
        my-10
    `
    const BTNSocialMedia = tw.a`
        cursor-pointer

        duration-100
        active:scale-150
    `
    const LGContent = tw.div`
        lg:grid
        lg:grid-cols-5
        lg:mb-12
        lg:mt-6
    `
    const MenuSection = tw.div`
        flex
        flex-col
        items-center
        justify-start
    `

    return(
        <>
            <Main>
                <LGContent>
                    <Logomarca>
                        <Logo>
                            <img src={IMGLogo} alt="" />
                        </Logo>
                        <p>JR Enterprises</p>
                    </Logomarca>
                    <MenuSection>
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
                    </MenuSection>
                    <MenuSection>
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
                    </MenuSection>
                    <MenuSection>
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
                    </MenuSection>
                    <MenuSection>
                        <SocialMedia>
                            <BTNSocialMedia>
                                <img src={IMGLogo} alt="" />
                            </BTNSocialMedia>
                            <BTNSocialMedia>
                                <img src={IMGLogo} alt="" />
                            </BTNSocialMedia>
                            <BTNSocialMedia>
                                <img src={IMGLogo} alt="" />
                            </BTNSocialMedia>
                            <BTNSocialMedia>
                                <img src={IMGLogo} alt="" />
                            </BTNSocialMedia>
                        </SocialMedia>
                        <Credits>
                        Copyright © 2022, Ratchanon
                        </Credits>
                    </MenuSection>
                </LGContent>
            </Main>
        </>
    )
}