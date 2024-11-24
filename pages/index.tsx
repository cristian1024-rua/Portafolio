import Contact from '@/Components/Contact';
import MobileNav from '@/Components/MobileNav';
import Projects from '@/Components/Projects';
import Services from '@/Components/Services';
import { useState } from "react";
import About from "../components/About";
import Education from '../components/Education';
import Hero from "../components/Hero";
import Nav from '../components/Nav';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (<div className="overflow-x-hidden">
<div>
  <MobileNav nav={nav} closeNav={closeNav}/>
  <Nav openNav={openNav}/>
  <Hero/>
  <div className='relative z-[30]'>
    <About />
    <Services />
    <Education />
    <Projects/>
    <Contact/>
  </div>
  </div>
</div>
  )
}

export default HomePage