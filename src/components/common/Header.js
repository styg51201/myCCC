import React, { useState, useEffect, useRef } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import logo from '../../logo.svg'
import '../../css/header-footer/heard-footer.scss'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {AddCart} from '../../mao/actions/ShopCartAction'
//icons
// import { IconContext } from 'react-icons'
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiHome,
  FiLogOut,
} from 'react-icons/fi'

import $ from 'jquery'

function Header(props) {
  console.log(props)
  const [scrolled, setScrolled] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [searchBlurTime, setSearchBlurTime] = useState(0)
  const [searchTxt, setSearchTxt] = useState('')
  const [member, setMember] = useState(true)

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
        document
          .querySelector('.chin-three-position4')
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
        document
          .querySelector('.chin-three-position4')
          .classList.remove('chin-three-positioncome')
        document.querySelector('.chin-black').classList.remove('chin-blackcome')
      }
    })

    //會員登出功能
    $('.irene_member_logout').click(function() {
      localStorage.removeItem('userdata')
      localStorage.removeItem('userId')
      window.location.replace('http://localhost:3000/memberlogin')
    })
    

  }, [])

  const inputRef = useRef(null)

  useEffect(() => {
    console.log(openSearch)
    if(!openSearch){
        inputRef.current.blur()
    }
  }, [openSearch])


  const handleOpenSearch = () => {
    if (new Date().getTime() - searchBlurTime > 300) {
      if (!openSearch) {
        setOpenSearch(true)
        console.log('serach open')
        inputRef.current.focus()
      }
    }
  }

  const handleSearch = evt => {
    console.log(evt.key)
    if (evt.key === 'Enter') {
      if (!evt.target.value.trim().length) {
        //console.log('沒有值')
        return
      }
      setSearchBlurTime(new Date().getTime())
      setOpenSearch(false)
      inputRef.current.blur()
      props.history.push(`/search?key=${evt.target.value}`)
    }
  }

  const handleSearchBlur = evt => {
    console.log("blur")
    setSearchBlurTime(new Date().getTime())
    setOpenSearch(false)
    setSearchTxt('')
  }

  const handleSearchText = evt => {
    setSearchTxt(evt.target.value)
  }
  let memberstate = localStorage.getItem('userdata')
  // console.log('memberstate', memberstate)
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
                  <Link to="/actioncamera" className="navbarlist">
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
                  <Link to="/stories" className="navbarlist">
                    故事牆
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div>
        {memberstate ? (
          <>
          <Link to="/memberedit">
            <img
              src="/img/header-footer/user.svg"
              alt=""
              className="chin-three-position"
            />
          </Link>
          <Link to="/member/ShopCartList">
          <img
            src="/img/header-footer/shopping-bag.svg"
            alt=""
            className="chin-three-position2"
          />
        </Link>
        <Link to="/member/ShopCartLike">
          <img
            src="/img/header-footer/heart.svg"
            alt=""
            className="chin-three-position3"
          />
        </Link>
          <Link to="/memberlogin">
            <div className="chin-three-position4 irene_member_logout">
              <FiLogOut
                style={{
                  width: '24px',
                  height: '24px',
                  color: 'black',
                }}
              />
            </div>
          </Link>
          </>
        ) : (
          <>
          <Link to="/memberlogin">
            <img
              src="./img/header-footer/user.svg"
              alt=""
              className="chin-three-position"
            />
          </Link>
          <Link to="/member/ShopCartList">
          <img
            src="/img/header-footer/shopping-bag.svg"
            alt=""
            className="chin-three-position2"
          />
        </Link>
        <Link to="/member/ShopCartLike">
          <img
            src="/img/header-footer/heart.svg"
            alt=""
            className="chin-three-position3"
          />
        </Link>
          <div className="chin-three-position4 irene_member_logout"> </div></>
        )} 
      </div>
    </>
  )

  const headershow = (
    <>
      <div className="chin-bigtitle">
        <Link to="/">
          <img src={logo} className="header-logo" alt="logo" />
        </Link>
      </div>
      <Container>
        <div className="chin-product">
          <div className="nav-icons-wrapper">
            <div className="nav-icons">
              <div
                role="button"
                className="bk-search"
                onClick={handleOpenSearch}
                //ref={searchRef}
              >
                <FiSearch />
                <input
                  type="text"
                  className={openSearch ? 'active' : ''}
                  onKeyDown={handleSearch}
                  onBlur={handleSearchBlur}
                  onChange={handleSearchText}
                  value={searchTxt}
                  placeholder="搜尋商品"
                  ref={inputRef}
                />
              </div>
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
                <Link to="/actioncamera" className="headerlist">
                  運動攝影機
                </Link>
              </li>
              <li>
                <Link to="/surrounding" className="headerlist">
                  周邊
                </Link>
              </li>
              <li>
                <Link to="/getCoupon" className="headerlist">
                  優惠券專區
                </Link>
              </li>
              <li>
                <Link to="/stories" className="headerlist">
                  故事牆
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-icons-wrapper">
            <Link to="/member/ShopCartList">
            <div className="Mao-items-Num">
              <div className="nav-icons">
                <div className="Mao-items-abs">{props.AddItem.length}</div>
                <FiShoppingBag />
              </div>
            </div>
            </Link>
            <Link to="/member/ShopCartLike">
              <div className="nav-icons">
                <FiHeart />
              </div>
            </Link>
            {/* 會員依照登入狀態icon功能不同，登入連會員中心，未登入連登入畫面 */}
            {memberstate ? (
              <Link to="/memberedit">
                <div className="nav-icons">
                  <FiUser />
                </div>
              </Link>
            ) : (
              <Link to="/memberlogin">
                <div className="nav-icons">
                  <FiUser />
                </div>
              </Link>
            )}
            {memberstate ? (
              <Link to="/memberlogin" className="irene_member_logout">
                <div className="nav-icons">
                  <FiLogOut />
                </div>
              </Link>
            ) : (
              ''
            )}
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
const mapStateToProps = store => {
  return {
    //購物車內容
    // data: store.getShop,
    AddItem: store.AddItem,
  }
}
//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      AddCart
    },
    dispatch
  )
}
// export default withRouter(Header)
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header))
