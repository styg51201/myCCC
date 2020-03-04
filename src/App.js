import React from 'react'
import logo from './logo.svg'
import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is our Hello World page.我誰~~~~~~</p>
        </header>
      </div>
      <Footer />
    </>
  )
}

export default App
