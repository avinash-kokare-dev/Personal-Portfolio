'use client'
import React from 'react';
import Head from "next/head";
import About from '../components/About';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { EducationSection } from '@/components/EducationSection';


const Home = () => {

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5" />
      </Head>
      <HeroSection />
      <About />
      <ProjectCarousel />
      <EducationSection />
      <ContactSection />
    </>
  );
}

export default Home;