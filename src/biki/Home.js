import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import chunk from 'lodash/chunk';
// import {throttle} from 'lodash';
import {useSpring, animated} from 'react-spring'
import {Parallax, Background } from 'react-parallax'

import 'animate.css/animate.min.css'
import './css/all.scss'
import './css/home.scss'
import './css/homeRWD.scss'

import FeaturedProducts from './components/FeaturedProducts'
import Collection from './components/Collection'
import AdSlide from './components/AdSlide'

//廣告用 redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {fromServerAdData,fromServerMbLikeData} from '../stacey/actions/couponAction'



function Home(props2){

    const [loaded, setLoaded] = useState(false) //for loading animation 還沒做
    const [adNum, setAdNum] = useState(0); //for ad slides
    // const [docWidth, setDocWidth] = useState(window.innerWidth)
    const [showMouse, setShowMouse] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)
    const [slideInterval, setSlideInterval] = useState(3000)

    const [props, set] = useSpring(()=>({
        offset: 0,
    }))

    const parallaxRef = useRef()
    const mouseRef = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        })

        props2.fromServerAdData() //拿廣告資料
        if(mb_id) props2.fromServerMbLikeData(mb_id)//拿會員收藏資料

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleWindowResize)

        return ()=>{
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    //---------------------廣告設定 ↓-----------------
    let adArr= []
    let adForGroup= []

    for(let i = 0 ; i < props2.adData.length;i++){
        if(props2.adData[i].planGroup){
            adForGroup.push(props2.adData[i])
        }else{
            adArr.push(props2.adData[i])
        }
    }

    //取得會員id
    const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0
    //取得瀏覽紀錄
    const hisItem = localStorage.getItem('hisitem') ? JSON.parse(localStorage.getItem('hisitem') ) : []
    //取得購物車內容
    const cartItem = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem') ) : []

    function pushArr (obj){
        if( adArr.findIndex(val=>val.planId === obj.planId ) === -1 ){
            adArr.push(obj) 
        }
    }

    if(mb_id){
        for(let i = 0 ; i < adForGroup.length;i++){
            // console.log('4444',adForGroup[i].groupHistoryCategory)
            if(adForGroup[i].groupHistoryItems){
                if( hisItem.some((val,ind)=> val.name === adForGroup[i].planUsername)){
                    pushArr(adForGroup[i])
                } 
            }
            if( adForGroup[i].groupHistoryCategory){
                if( hisItem.some((val,ind)=> val.itemCategoryId === adForGroup[i].groupHistoryCategory) ){
                    pushArr(adForGroup[i])
                }
            }
            if( adForGroup[i].groupCartCategory ){
                if( cartItem.some((val,ind)=> val.itemCategoryId === adForGroup[i].groupCartCategory) ) {
                    pushArr(adForGroup[i])
                }
            }
            if( adForGroup[i].groupCollectItems ){
                if( props2.mbLikeData.some((val,ind)=> val.p_vendor === adForGroup[i].planUsername) ) {
                    pushArr(adForGroup[i])
                }
            }

            if( adForGroup[i].groupCollectCategory ){
                if( props2.mbLikeData.some((val,ind)=> val.p_category === adForGroup[i].groupCollectCategory) ) {
                    pushArr(adForGroup[i])
                }
            }
        }
    }
    adArr.sort(function(a,b){
        return a.plan_updates_at > b.plan_updates_at ? -1 : 1
      })

  
    // ---------------------廣告設定 ↑----------------------------------------

    const handleScroll = ()=>{
        const posY = parallaxRef.current.getBoundingClientRect().top
        const offset = posY - window.pageYOffset
        // console.log(offset)
        set({offset})

        const opacity = window.pageYOffset - posY
        set({opacity})
        // console.log(opacity)

        const mouseY = mouseRef.current.getBoundingClientRect().top
        const offsetMouse = mouseY - window.pageYOffset

        if(offsetMouse < 0){
            // console.log('hide mouse!')
            setShowMouse(false)
        }else{
            setShowMouse(true)
        }
    }

    const calc = o => `translateY(${o* 0.1}px)`;
    const calc2 = o => `translateY(${o* 0.1 * 0.5}px)`;

    //------之後把handleScroll拿掉用的
    const handleWindowResize = ()=>{
        if(window.innerWidth <= 640){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }

    console.log('999',props2)

    //假資料
    const arr=[
        // {
        //     title: '新品上市',
        //     subTitle: '限時特惠，領取優惠卷',
        //     content: '',
        //     img: '',
        //     url: '',
        //     btnTxt: '去領取',
        //     blockTitle: '限時優惠',
        //     blockSubTitle: 'Limited Offer'
        // },
        {
            title: '小米春季新品',
            subTitle: '小米手環半透明腕錶',
            content: '不知道可以寫什麼了，總之大概是這樣那樣，這邊描述了這款新上市的品項多麽的厲害多麽的屌',
            img: '',
            url: '',
            btnTxt: '查看商品',
            blockTitle: '新品上市',
            blockSubTitle: 'Spring Collection'
        }
    ]

    useInterval(()=>{
        setAdNum((adNum + 1)% adArr.length)
    })

    function useInterval(callback) {
        const savedCallback = useRef();
      
        // Remember the latest function.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (slideInterval !== null) {
            let id = setInterval(tick, slideInterval);
            return () => clearInterval(id);
          }
        }, [slideInterval]);
      }

    const btnNextSlide = ()=>{
        setAdNum((adNum + 1)% adArr.length)
        setSlideInterval(null)
        setTimeout(()=>{
            setSlideInterval(3000)
        }, 1000)
    }

    const btnPrevSlide = ()=>{
        setAdNum(prevAdNum=>{
            let newNum = prevAdNum - 1
            if(newNum < 0) newNum = adArr.length -1
            return newNum
        })
        setSlideInterval(null)
        setTimeout(()=>{
            setSlideInterval(3000)
        }, 1000)
    }

    const clickAdNum = (idx)=>{
        setAdNum(idx)
        setSlideInterval(null)
        setTimeout(()=>{
            setSlideInterval(3000)
        }, 1000)
    }

    useEffect(()=>{
        console.log("current ad:", adNum)
    }, [adNum])
const parallax = useRef()

    return(
        <>
        <div className='bk-home-container'>
            <section className="bk-home-slider" >
                <Parallax
                    bgImage={"./biki-img/josh-nuttall-uNQ-TTg_qNY-unsplash_.jpg"}
                    bgImageAlt='TRIPLEC'
                    strength={600}
                    className='bk-slides'
                    contentClassName='bk-slide-content'
                >
                    <img className='mb-4' src='/biki-img/cccLogo.svg' />
                    <h3>Get the best gear for your trip</h3>
                    <h5>為你的旅途準備最好的裝備</h5>
                </Parallax>
                <div className={`bk-mouse animated ${showMouse ? 'fadeInDown' : 'fadeOutUp'}`}
                    ref={mouseRef}
                >
                    <div className='bk-mouse-ball animated fadeOutDown infinite'></div>
                </div>
            </section>
            <section className="bk-ads">
                <Container className='bk-ads-container'>
                    {props2.adData.length && adArr.map((elm, idx)=>{
                        return (
                            <AdSlide 
                            key={idx+'a'} 
                            data={elm}
                            show={adNum===idx}
                            num={idx+1}
                            />
                        )
                    })}
                    <div className="bk-arrows">
                        <div className="bk-arrow-r" onClick={btnPrevSlide}>
                            <img src='./biki-img/arrowLeft.svg' />
                        </div>
                        <div className="bk-arrow-l" onClick={btnNextSlide}>
                        <img src='./biki-img/arrowRight.svg' />
                        </div>
                    </div>
                    <div className="bk-ad-list-buttons">
                        <ul>
                            {props2.adData.length && adArr.map((elm, idx)=>{
                                return (
                                    <li key={idx+'l'}
                                     onClick={()=>{
                                        clickAdNum(idx)
                                    }}
                                    className={adNum === idx ? 'active' : ''}
                                    ></li>
                                )
                            })}
                        </ul>
                    </div>
                </Container>
            </section>
            <section className="bk-featured-products" 
                ref={parallaxRef} >
                <Container>
                    <Row className='bk-featured-wrapper row-cols-xl-3 row-cols-md-2 row-cols-1'>
                        <animated.div style={isMobile ? {} : {transform: props.offset.interpolate(calc)}}>
                            <FeaturedProducts 
                                img={`./chin-img/images/SONY 重低音降噪藍牙耳罩式耳機 WH-XB900N/0.jpg`}
                                url='/commidty/116'
                                data={{
                                    brand: 'SONY',
                                    name: 'SONY 重低音降噪藍牙耳罩式耳機 WH-XB900N',
                                    price: 'NT$26,990'
                                }}
                            />
                        </animated.div>
                        <animated.div style={isMobile ? {} : {transform: props.offset.interpolate(calc2)}}>
                            <FeaturedProducts 
                                img={`./chin-img/images/繽特力 Plantronics Voyager 6200UC 雙向降噪藍牙耳機 白色/0.jpg`}
                                url='/commidty/171'
                                data={{
                                    brand: 'Plantronics繽特力',
                                    name: '繽特力 Plantronics Voyager 6200UC 雙向降噪藍牙耳機 白色',
                                    price: 'NT$12,800'
                                }}
                            />
                        </animated.div>
                        <animated.div style={isMobile? {} : {transform: props.offset.interpolate(calc)}}>
                            <FeaturedProducts 
                                img={`./chin-img/images/GoPro-HERO8 Black全方位運動攝影機 單車騎士升級組/0.jpg`}
                                url='/commidty/161'
                                data={{
                                    brand: 'GoPro',
                                    name: 'GoPro-HERO8 Black全方位運動攝影機 單車騎士升級組',
                                    price: 'NT$23,154'
                                }}
                            />
                        </animated.div>
                        <animated.div style={isMobile ? {} : {transform: props.offset.interpolate(calc)}}>
                            <FeaturedProducts 
                                img={`./chin-img/images/Mavic Mini 充電管家/0.jpg`}
                                url='/commidty/191'
                                data={{
                                    brand: 'DJI',
                                    name: 'Mavic Mini 充電管家',
                                    price: 'NT$12,659'
                                }}
                            />
                        </animated.div>
                        <animated.div style={isMobile ? {} : {transform: props.offset.interpolate(calc2)}}>
                        <Col>
                            <div className="bk-featured-product-item bk-box">
                                <div className="bk-box-content">
                                    <h3>FEATURED PRODUCTS</h3>
                                    <h6 className="bk-white">精選商品</h6>
                                    <button className="bk-btn-white">瀏覽商品</button>
                                </div>
                            </div>
                        </Col>
                        </animated.div>
                        <animated.div style={isMobile ? {} : {transform: props.offset.interpolate(calc)}}>
                            <FeaturedProducts 
                                img={`./chin-img/images/小米手環34 腕帶 替換帶 尼龍編織回環式錶帶 透氣舒適 運動智能錶帶/0.jpg`}
                                url='/commidty/191'
                                data={{
                                    brand: 'DJI',
                                    name: 'Mavic Mini 充電管家',
                                    price: 'NT$12,659'
                                }}
                            />
                        </animated.div>
                        <animated.div style={isMobile ? {} : {transform: props.offset.interpolate(calc)}}>
                            <FeaturedProducts 
                                img={`./chin-img/images/HTR 螺旋槳4726F 金銀槳 For Mavic Mini/0.jpg`}
                                url='/commidty/191'
                                data={{
                                    brand: 'DJI',
                                    name: 'Mavic Mini 充電管家',
                                    price: 'NT$12,659'
                                }}
                            />
                        </animated.div>
                        <animated.div style={isMobile ? {} : {transform: props.offset.interpolate(calc2)}}>
                            <FeaturedProducts 
                                img={`./chin-img/images/SONY 運動藍牙入耳式耳機 WI-SP500/0.jpg`}
                                url='/commidty/191'
                                data={{
                                    brand: 'DJI',
                                    name: 'Mavic Mini 充電管家',
                                    price: 'NT$12,659'
                                }}
                            />
                        </animated.div>
                        <animated.div style={isMobile ? {} : {transform: props.offset.interpolate(calc)}}>
                            <FeaturedProducts 
                                img={`./chin-img/images/Holy Stone HS210 迷你遙控飛機-三電版/0.jpg`}
                                url='/commidty/191'
                                data={{
                                    brand: 'DJI',
                                    name: 'Mavic Mini 充電管家',
                                    price: 'NT$12,659'
                                }}
                            />
                        </animated.div>
                    </Row>
                </Container>
            </section>
            <Collection 
            theme="white" 
            title="WEARIBLE DEVICES" 
            titleCn="穿戴式裝置" 
            info={
                <>
                外出用的穿戴式裝置，運動腕錶和運動手環<br />
                各種品項包含藍芽、聽音樂、收簡訊、檢測身體數據等功能，滿足您的需求
                </>
            } 
            img="./biki-img/wearible-devices.png" 
            bg="./biki-img/person-on-body-of-water-2104152_.jpg" 
            position="center"
            url='/watch'
            />

            <Collection 
            theme="blue" 
            title="EARPHONES / SPEAKERS" 
            titleCn="耳機/喇吧" 
            info={
                <>
                即使獨自一人也不會感到寂寞。<br />
                戴上耳機聆聽自己喜歡的音樂，可以沉浸在自己的世界中。
                各種耳機樣式供你挑選。
                </>
            }
            img="./biki-img/earphones-speakers.png" 
            bg="./biki-img/man-standing-on-the-end-of-the-rock-1908647_.jpg" 
            position="bottom"
            url='/headset'
            />  

            <Collection 
            theme="orange" 
            title="ACTION CAMERAS" 
            titleCn="運動攝影機" 
            info={
                <>
                紀錄你活動的每一刻<br />
                從攝影機到無人機，多種品項供你選擇，讓你能在任何情況紀錄你的身姿
                </>
            }
            img="./biki-img/action-cameras.png" 
            bg="./biki-img/person-doing-parkour-exhibition-316769_.jpg" 
            position="bottom"
            url='/actioncamera'
            />
            </div>
        </>
    )
}


//廣告用
//選擇對應的reducer
const mapStateToProps = store => {
    return  { adData: store.adData,
        mbLikeData: store.memberLikeData}
  }
  //action
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        fromServerAdData,fromServerMbLikeData
    },dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)