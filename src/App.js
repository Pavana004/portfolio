import React from 'react'
import Nav from './components/Nav'
import Projects from './container/Projects'
import Abouts from './container/Abouts'
import Skills from './container/sk'
import Contacts from './container/Contacts'
import Footer from './container/Footer'
import Certification from './container/certification'


const App = () => {
  return (
   <>
   <Nav/>
   <Abouts/>
   <Skills/>
   <Projects/>
   <Certification/>
   <Contacts/>
   <Footer/>
   </>
  )
}

export default App