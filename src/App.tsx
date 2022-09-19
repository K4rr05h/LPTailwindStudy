import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

import Header from './components/Header/header';
import Hero from './components/Main/Hero/Hero';
import Features from './components/Main/Features/Features';
import Content from './components/Main/Content/Content';
import Testimonials from './components/Main/Testimonials/Testimonials';
import Portfolio from './components/Main/Portfolio/Portfolio';
import FAQ from './components/Main/FAQ/FAQ';
import CTA from './components/Main/CallToAction/CTA';
import Footer from './components/Footer/Footer';

export default function App() {

  const [ativarCor, SetAtivarCor] = useState(false);

  useEffect(function(){
    function positionScroll(){
      if(window.scrollY > 60){
        SetAtivarCor(true);
      }else{
        SetAtivarCor(false);
      }
    }

    window.addEventListener('scroll', positionScroll);
  }, []);

  // Estilização geral do código

  const Body = tw.div`
    bg-bluebg
    h-full
  `

  return (

    // Modulação de cada sessão da Landing Page
    
    <Body>
      <Header acao={ativarCor} />
      <Hero/>
      <Features/>
      <Content/>
      <Testimonials/>
      <Portfolio/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </Body>
  )
}