import React from 'react'
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import Home from './components/Home/Home';
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Proyects from "./components/Proyects/Proyects"
import Technologies from "./components/Technologies/Technologies.jsx"
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Studies from './components/Studies/Studies';
import Jobs from './components/Jobs/Jobs.jsx';
export default function FullPageScroll() {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <Fullpage>
      <FullpageNavigation/>
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <Home/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <About/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Studies/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Jobs/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Technologies/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Proyects/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Contact/>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}
