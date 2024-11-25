import Contact from '@/Components/Contact';
import MobileNav from '@/Components/MobileNav';
import Projects from '@/Components/Projects';
import Services from '@/Components/Services';
import { useState } from "react";
import About from "../Components/About";
import Education from '../Components/Education';
import Hero from "../Components/Hero";
import Nav from '../Components/Nav';
import EduItems from '../EduItems'; 

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

export default HomePage;