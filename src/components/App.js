<<<<<<< HEAD
import React from 'react'
import Content from './Content/index'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  return (
    <>
      <header />
      <main>
        <Content />
      </main>
      <footer />
=======
import React, {useState} from 'react'
import Content from '../components/Main/Content/index.js'
import Footer from '../components/Main/Footer/index.js'
import Header from '../components/Main/Header/index.js'

function App() {
  const [isExist, setExist] = useState(false);
  const footObj = {
    date: new Date().toLocaleTimeString(),
    name: 'rPetProj',
  }
  return (
    <>
      { isExist && <Header /> }
      <Content />
      { isExist && <Footer footerObj={footObj} /> }
>>>>>>> 184298bb93120a49d977166aa5d8e12bf99c0b5a
    </>
  )
}

export default App
