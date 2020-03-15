import React from 'react'

function Commoditylist(){
    return(
        <ul className="chin-commoditylist">
            <li>
                <div className="chin-price">
                    <span>價格</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
            </li>
            <li>
                <div className="chin-price">
                    <span>品牌</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
                <div>
                    <ul>
                        <li><input type="checkbox" />Apple</li>
                        <li><input type="checkbox" />Samsung</li>
                        <li><input type="checkbox" />Audio-Technica</li>
                        <li><input type="checkbox" />Audio-Technica2</li>
                        <li><input type="checkbox" />Audio-Technica3</li>
                    </ul>
                </div>
            </li>
            <li>
                <div className="chin-price">
                    <span>功能</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
                <div>
                    <ul>
                        <li><input type="checkbox" />GPS 定位</li>
                        <li><input type="checkbox" />運動偵測</li>
                        <li><input type="checkbox" />藍芽</li>
                    </ul>
                </div>
            </li>
            <li>
                <div className="chin-price">
                    <span>優惠</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
            </li>
        </ul>
         )
}

export default Commoditylist