import React from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/about/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillSection/SkillsMain'
import SubSkills from './components/skillSection/SubSkills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import ContactMeMain from './components/contactSection/ContactMeMain'

const App = () => {
  return (
    <main >
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ExperienceMain/>
      <ProjectsMain/>
      <ContactMeMain/>
    </main>
  )
}

export default App
