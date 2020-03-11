import React,{useState,useEffect} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import logo from '../../logo.svg'
import '../../css/header-footer/heard-footer.css'
import {Link} from 'react-router-dom'

//icons
import { IconContext } from "react-icons";
import { FiSearch, FiUser, FiShoppingBag, FiHeart, FiHome } from "react-icons/fi";


function Header() {
  
  const [scrolled, setScrolled] = useState(false) 

  useEffect(() => {
    const product = document.querySelector('.chin-bigtitle img').offsetTop
    const height = product - 20 
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < height
      if (isTop !== true) {
        setScrolled(true)
        document
          .querySelector('.chin-three-position')
          .classList.add('chin-three-positioncome')
          document
          .querySelector('.chin-three-position2')
          .classList.add('chin-three-positioncome')
          document
          .querySelector('.chin-three-position3')
          .classList.add('chin-three-positioncome')
        document.querySelector('.chin-black').classList.add('chin-blackcome')
      } else {
        setScrolled(false)
        document
          .querySelector('.chin-three-position')
          .classList.remove('chin-three-positioncome')
          document
          .querySelector('.chin-three-position2')
          .classList.remove('chin-three-positioncome')
          document
          .querySelector('.chin-three-position3')
          .classList.remove('chin-three-positioncome')
        document.querySelector('.chin-black').classList.remove('chin-blackcome')
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
              <li>
                  <Link to="/watch" className="navbarlist">
                    穿戴式裝置
                  </Link>
                </li>
                <li>
                <Link to="/headset" className="navbarlist">
                  耳機/喇叭
                </Link>
                </li>
                <li>
                <Link to="/motion" className="navbarlist">
                  運動攝影機
                </Link>
                </li>
                <li>
                <Link to="/surrounding" className="navbarlist">
                  周邊
                </Link>
                </li>
                <li>
                <Link to="/getCoupon" className="navbarlist">
                  優惠券專區
                </Link>
                </li>
                <li>
                  故事牆
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <img src="./img/header-footer/user.svg" alt="" className="chin-three-position"/>
        <Link to="/ShopCartList/:id?"><img src="./img/header-footer/shopping-bag.svg" alt="" className="chin-three-position2"/></Link>
        <img src="./img/header-footer/heart.svg" alt="" className="chin-three-position3"/>
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
      <Container>
        <div className="chin-product">
        <div className="nav-icons-wrapper">
          <div className="nav-icons">
            <FiSearch />
          </div>
        </div>
        <div>
          <ul className="chin-productoptions">
            <li>
              <Link to="/watch" className="headerlist">
                穿戴式裝置
              </Link>
            </li>
            <li>
              <Link to="/headset" className="headerlist">
                耳機/喇叭
                </Link>
            </li>
            <li>
              <Link to="/motion" className="headerlist">
                運動攝影機
                </Link>
            </li>
            <li>
              <Link to="/surrounding" className="headerlist">
                周邊
              </Link>
            </li>
            <li><Link to="/getCoupon" className="headerlist">
                  優惠券專區
                </Link></li>
            <li>故事牆</li>
          </ul>
        </div>
        <div className="nav-icons-wrapper">
          <Link to="/ShopCartList/:id?">
            <div className="nav-icons">
                <FiShoppingBag />
            </div>
          </Link>
            <div className="nav-icons">
              <FiHeart />
            </div>
          <Link to="/MemberLogin">
            <div className="nav-icons">
              <FiUser />
            </div></Link>
        </div>
      </div>
      </Container>
    </>
  )
  return (
    <>
      <header>
        {headershow}
        {navbar}
      </header>
    </>
  )
  }

export default Header