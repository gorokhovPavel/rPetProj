import React from 'react'
import Content from '../components/Main/Content/index.js'
import Footer from '../components/Main/Footer/index.js'
import Header from '../components/Main/Header/index.js'

function App() {
  const footObj = {
    date: new Date().toLocaleTimeString(),
    name: 'rPetProj',
  }
  return (
    <>
      <Header />
      <Content />
      <Footer footerObj={footObj} />
    </>
  )
}

export default App
