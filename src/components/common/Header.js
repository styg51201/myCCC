import React from 'react'

function Header() {
  return (
    <header>
      <div className="chin-bigtitle">
        <img src="./header-footer/images/title.png" alt="" />
      </div>
      <div className="chin-product">
        <div className="chin-search">
          <img src="./header-footer/images/search.svg" alt="" />
        </div>
        <div>
          <ul className="chin-productoptions">
            <li>穿戴式裝置</li>
            <li>耳機/喇叭</li>
            <li>運動攝影機</li>
            <li>周邊</li>
            <li>優惠卷專區</li>
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
