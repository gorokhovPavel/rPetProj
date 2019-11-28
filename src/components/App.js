import React from 'react'
import Content from '../components/Main/Content/index'
import Footer from '../components/Main/Footer/index.jsx'
import Header from '../components/Main/Header/index'

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
