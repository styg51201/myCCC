import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import chunk from 'lodash/chunk';
// import {throttle} from 'lodash';
import {useSpring, animated} from 'react-spring'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import './css/all.scss'
import './css/home.scss'
import 'animate.css/animate.min.css'

import FeaturedProducts from './components/FeaturedProducts'
import Collection from './components/Collection'
import AdSlide from './components/AdSlide'

function Home(){

    const [loaded, setLoaded] = useState(false)
    const [adNum, setAdNum] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        })
    }, [])


    //假資料
    const arr=[
        {
            title: '新品上市',
            subTitle: '限時特惠，領取優惠卷',
            content: '',
            img: '',
            url: '',
            btnTxt: '去領取',
            blockTitle: '限時優惠',
            blockSubTitle: 'Limited Offer'
        },{
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
        setAdNum((adNum + 1)%arr.length)
    }, 5000)

    function useInterval(callback, delay) {
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
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

    const btnNextSlide = ()=>{
        setAdNum((adNum + 1)%arr.length)
    }

    const btnPrevSlide = ()=>{
        setAdNum(prevAdNum=>{
            let newNum = prevAdNum - 1
            if(newNum < 0) newNum = arr.length -1
            return newNum
        })
    }

    // const loadProps = useSpring({
    //     to: async (next, cancel)=>{
    //         await next({opacity: 0})
    //         await next({display: 'none'})
    //     },
    //     from:{opacity:1}
    // })

// const parallax = useRef()

    return(
        <>
        {/* <animated.div className='bk-page-load' style={loadProps}></animated.div> */}
            <section className="bk-home-slider">
                <div className='bk-slides'>
                    <img src="./biki-img/josh-nuttall-uNQ-TTg_qNY-unsplash_.jpg" />
                    <div className='bk-slide-content'>
                        Hello~
                    </div>
                </div>
                <div className='bk-mouse animated fadeIn'>
                    <div className='bk-mouse-ball animated fadeOutDown infinite'></div>
                </div>
            </section>
            <section className="bk-ads">
                <Container className='bk-ads-container'>
                    {arr.length && arr.map((elm, idx)=>{
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
                            {arr.length && arr.map((elm, idx)=>{
                                return (
                                    <li key={idx+'l'}
                                     onClick={()=>{
                                        setAdNum(idx)
                                    }}
                                    className={adNum === idx ? 'active' : ''}
                                    ></li>
                                )
                            })}
                        </ul>
                    </div>
                </Container>
            </section>
            <section className="bk-featured-products">
                <Container>
                    <Row className='bk-featured-wrapper row-cols-xl-3 row-cols-md-2 row-cols-1'>
                        {/* <div ref={element}> */}
                            <FeaturedProducts 
                                img={`./chin-img/images/SONY 重低音降噪藍牙耳罩式耳機 WH-XB900N/0.jpg`}
                            />
                        {/* </div> */}
                        <FeaturedProducts 
                            img={`./chin-img/images/繽特力 Plantronics Voyager 6200UC 雙向降噪藍牙耳機 白色/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/GoPro-HERO8 Black全方位運動攝影機 單車騎士升級組/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/Mavic Mini 充電管家/0.jpg`}
                        />
                        <Col>
                            <div className="bk-featured-product-item bk-box">
                                <div className="bk-box-content">
                                    <h3>FEATURED PRODUCTS</h3>
                                    <h6 className="bk-white">精選商品</h6>
                                    <button className="bk-btn-white">瀏覽商品</button>
                                </div>
                            </div>
                        </Col>
                        <FeaturedProducts 
                            img={`./chin-img/images/小米手環34 腕帶 替換帶 尼龍編織回環式錶帶 透氣舒適 運動智能錶帶/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/HTR 螺旋槳4726F 金銀槳 For Mavic Mini/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/SONY 運動藍牙入耳式耳機 WI-SP500/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/Holy Stone HS210 迷你遙控飛機-三電版/0.jpg`}
                        />
                    </Row>
                </Container>
            </section>
            <Collection 
            theme="white" 
            title="WEARIBLE DEVICES" 
            titleCn="穿戴式裝置" 
            info={<>穿戴式裝置的說明文<br />asdfasdfqwerasdovijwoiej;flkan;vjkhaiuwher;olek</>} 
            img="./biki-img/MTP52_VW_PF+watch-40-alum-silver-nc-5s_VW_PF_WF_CO_GEO_TW_.png" 
            bg="./biki-img/person-on-body-of-water-2104152_.jpg" 
            position="center"
            />

            <Collection 
            theme="blue" 
            title="EARPHONES / SPEAKERS" 
            titleCn="耳機/喇吧" 
            info={<>穿戴式裝置的說明文<br />asdfasdfqwerasdovijwoiej;flkan;vjkhaiuwher;olek</>} 
            img="./biki-img/000001_1572937548_.png" 
            bg="./biki-img/man-standing-on-the-end-of-the-rock-1908647_.jpg" 
            position="bottom"
            />  

            <Collection 
            theme="orange" 
            title="ACTION CAMERAS" 
            titleCn="運動攝影機" 
            info={<>穿戴式裝置的說明文<br />asdfasdfqwerasdovijwoiej;flkan;vjkhaiuwher;olek</>} 
            img="./biki-img/h8b-1366-2X.png" 
            bg="./biki-img/person-doing-parkour-exhibition-316769_.jpg" 
            position="bottom"
            />
        </>
    )
}

export default Home