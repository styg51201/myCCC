import React from 'react'
import './chin-css/items.scss'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { formServerItemsData } from '../actions/index'

function Actioncamera(){
    return(
        <>
         <main class="chin-main">
        <section class="chin-section">
            <div class="chin-commoditylist">
                <div class="chin-price">
                    <span>價格</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
                <div class="chin-price">
                    <span>品牌</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
                <div class="chin-price">
                    <span>功能</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
                <div class="chin-price">
                    <span>優惠</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
            </div>
            <div class="chin-commodity-title">
                <div class="chin-title">
                    <div class="chin-title-text">
                        <span>WEARABLE DEVICES</span>
                        <span>穿戴式裝置</span>
                    </div>
                    <div class="chin-comparegoods-sort">
                        <button class="chin-comparegoods">
                            <span>比較商品</span>
                            <img src="./chin-img/align-justify.svg" alt=""/>
                        </button>
                        <button class="chin-sort">
                            <span>排序</span>
                            <img src="./chin-img/chevron-down-white.svg" alt=""/>
                        </button>
                    </div>
                </div>
                <div class="chin-commodity">
                    
                </div>
                <div class="circle">
                    <div class="circle1">
                        <div class="circle3"></div>
                        <div class="circle3"></div>
                        <div class="circle3"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>
        </>
    )
}

export default Actioncamera