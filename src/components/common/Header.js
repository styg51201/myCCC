import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import logo from '../../logo.svg'
import '../../css/header-footer/heard-footer.css'


function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const product = document.querySelector('.chin-product').offsetTop
    const height = product + 68
    console.log(height)
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < height
      console.log(isTop)
      if (isTop !== true) {
        setScrolled(true)
        document
          .querySelector('.chin-three-position')
          .classList.add('chin-three-positioncome')
        document.querySelector('.chin-black').classList.add('chin-blackcome')
      } else {
        setScrolled(false)
      }
    })
  }, [])
  const navbar = (
    <>
      <div className="chin-black">
        <Container>
          <div className="chin-othernavbar">
            <div className="chin-title-sea">
            <img src={logo} className="header-logo" alt="logo" />
              <img src="./img/header-footer/searchwhite.svg" alt="" />
            </div>
            <div className="chin-classtext">
              <ul>
                <li>穿戴式裝置</li>
                <li>耳機/喇叭</li>
                <li>運動攝影機</li>
                <li>周邊</li>
                <li>優惠卷專區</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="chin-three-position">
        <img src="./img/header-footer/user.svg" alt="" />
        <img src="./img/header-footer/shopping-bag.svg" alt="" />
        <img src="./img/header-footer/heart.svg" alt="" />
      </div>
    </>
  )

  const headershow = (
    <>
      <div className="chin-bigtitle">
        <a href="/">
        <img src={logo} className="header-logo" alt="logo" />
        </a>
      </div>
      <div className="chin-product">
        <div className="chin-search">
          <img src="./img/header-footer/search.svg" alt="" />
        </div>
        <div>
          <ul className="chin-productoptions">
            <li>
              <a href="/watch" ClassName="Watch">
                穿戴式裝置
              </a>
            </li>
            <li>
              <a href="/headset" ClassName="Watch">
                耳機/喇叭
              </a>
            </li>
            <li>
              <a href="/motion" ClassName="Watch">
                運動攝影機
              </a>
            </li>
            <li>周邊</li>
            <li>優惠卷專區</li>
          </ul>
        </div>
        <div className="chin-bag-heart-user">
          <img src="./img/header-footer/shopping-bag.svg" alt="" />
          <img src="./img/header-footer/heart.svg" alt="" />
          <img src="./img/header-footer/user.svg" alt="" />
        </div>
      </div>
    </>
  )
  return (
    <>
      <header>{scrolled ? navbar : headershow}</header>
    </>
  )
}

export default Header
