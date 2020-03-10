import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
//import Header Footer
import Footer from './components/common/Footer'
import Header from './components/common/Header'

//import chin
import Headset from './chin/Headset'
import Watch from './chin/Watch'
//import mao
import CartList from './mao/ShopCartList'

//import biki
import Home from './biki/Home'

//import from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'
//import main css
import './css/main.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  //測試 react-bootstrap 的 ExampleToast 功能是否正常
  const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(false)

    return (
      <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">歡迎光臨</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </>
    )
  }

  return (
    <Router>
    <>
      <Header />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
        </Switch>
      <Container>
        <Switch>
          <Route path="/headset">
            <Headset/>
          </Route>
          <Route path="/watch">
            <Watch/>
          </Route>
          <Route path="/ShopCartList/:id?"> {/*id抓會員ID */}
            <CartList />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </>
    </Router>
  )
}

export default App
