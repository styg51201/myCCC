import React from 'react'
import logo from '../../logo.svg'

function Header() {
  return (
    <header>
      <div className="chin-bigtitle">
      <img src={logo} className="header-logo" alt="logo" />
      </div>
      <div className="chin-product">
        <div className="chin-search">
          <img src="./header-footer/images/search.svg" alt="" />
        </div>
        <div>
          <ul className="chin-productoptions">
            <li><a>穿戴式裝置</a></li>
            <li><a>耳機/喇叭</a></li>
            <li><a>運動攝影機</a></li>
            <li><a>周邊</a></li>
            <li><a>優惠卷專區</a></li>
          </ul>
        </div>
        <div className="chin-bag-heart-user">
          <img src="./header-footer/images/shopping-bag.svg" alt="" />
          <img src="./header-footer/images/heart.svg" alt="" />
          <img src="./header-footer/images/user.svg" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
