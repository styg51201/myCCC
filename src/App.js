import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

//import from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import Header Footer
import Footer from './components/common/Footer'
import Header from './components/common/Header'

//import biki
import Home from './biki/Home'
import Stories from './biki/Stories'
import UploadStory from './biki/UploadStory'
import Story from './biki/Story'
import MemberStories from './biki/MemberStories'
import MemberDrafts from './biki/MemberDrafts'
import MemberDraft from './biki/MemberDraft'
import MemberStory from './biki/MemberStory'
import MemberStoryReplies from './biki/MemberStoryReplies'

//import chin
import Headset from './chin/Headset'
import Watch from './chin/Watch'
import Commidty from './chin/Commidty'
import Comparepages from './chin/Comparepages'
import Actioncamera from './chin/Actioncamera'
import Surrounding from './chin/Surrounding'
//import mao
import ShopCartList from './mao/ShopCartList'
import ShopCartLike from './mao/ShopCartLike'
import OrderInfo from './mao/OrderInfo'
import Orderbill from './mao/Orderbill'
//import Irene
import MemberLogin from './Irene/MemberLogin'
import MemberEdit from './Irene/MemberEdit'

//import stacey
import GetCoupon from './stacey/GetCoupon'
import OnSale from './stacey/OnSale'
import AdTest from './stacey/AdTest'


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
            {/*----------------------chin---------------------*/}
            <Route path="/headset">
              <Headset />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
            <Route path="/actioncamera">
              <Actioncamera />
            </Route>
            <Route path="/surrounding">
              <Surrounding />
            </Route>
            <Route path="/commidty/:itemId?">
              <Commidty />
            </Route>
            <Route path="/comparepages">
              <Comparepages />
            </Route>
            {/*---------------------------------------------*/}
            <Route path="/ShopCartList">
              <ShopCartList />
            </Route>
            <Route path="/ShopCartLike">
              <ShopCartLike />
            </Route>
            <Route path="/OrderInfo">
              <OrderInfo />
            </Route>
            <Route path="/Orderbill">
              <Orderbill />
            </Route>
            {/* ----------------------------------------- */}
            <Route path="/memberlogin">
              <MemberLogin />
            </Route>
            <Route path="/memberedit">
              <MemberEdit />
            </Route>
            {/* 連結優惠券專區 */}
            <Route path="/getCoupon">
              <GetCoupon />
            </Route>
            <Route path="/onSale">
              <OnSale />
            </Route>
            <Route path="/adTest">
              <AdTest />
            </Route>
            <Route path="/member/upload-stories">
              <UploadStory />
            </Route>
            <Route path="/member/stories/story/:id">
              <MemberStory />
            </Route>
            <Route path="/member/stories/:id/replies">
              <MemberStoryReplies />
            </Route>
            <Route path="/member/stories/draft/:id">
              <MemberDraft />
            </Route>
            <Route path="/member/stories/drafts">
              <MemberDrafts />
            </Route>
            <Route path="/member/stories">
              <MemberStories />
            </Route>
            <Route path="/stories/story/:id">
              <Story />
            </Route>
            <Route path="/stories">
              <Stories />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </>
    </Router>
  )
}

export default App
