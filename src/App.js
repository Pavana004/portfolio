import React from 'react'
import Nav from './components/Nav'
import Projects from './container/Projects'
import Abouts from './container/Abouts'
import Skills from './container/sk'
import Contacts from './container/Contacts'
import Footer from './container/Footer'


const App = () => {
  return (
   <>
   <Nav/>
   <Abouts/>
   <Skills/>
   <Projects/>
   <Contacts/>
   <Footer/>
   </>
  )
}

export default App