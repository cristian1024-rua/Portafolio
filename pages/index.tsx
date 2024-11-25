import Contact from '@/Components/Contact';
import MobileNav from '@/Components/mobileNav';
import Projects from '@/Components/projects';
import Services from '@/Components/services';
import { useState } from "react";
import About from "../components/About";
import Education from '../components/Education';
import Hero from "../Components/hero";
import Nav from '../Components/nav';

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