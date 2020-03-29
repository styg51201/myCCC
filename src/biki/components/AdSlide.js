import React, {useRef, useEffect, useState, useChain} from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import {useTransition, animated} from 'react-spring'

function AdSlide(props){
    //外層是section bk-ads

    const [blockTxtHeight, setBlockTxtHeight] = useState(0)

    const blockTextRef = useRef(null)

    useEffect(()=>{
        const height = blockTextRef.current.clientHeight;
        setBlockTxtHeight(height)
    },[blockTextRef.current])

    // const Blocktransitions = useTransition(props.show, null, {
    //     trail: 400,
    //     from: {right: 0, width: '100%', height: '100%', background: 'black', position: 'absolute', top: 0, transform: 'translateX(-100%)'},
    //     enter: {transform: 'translateX(0%)'},
    //     leave: {transform: 'translateX(100%)'}
    // })

    // useChain(open ? [])

    // console.log(props)
    return(
        <div className={`bk-ad${props.show ? '' : ' hidden'}`}>
            <div className={`bk-ad-block animated ${props.show ? 'fadeInRight' : 'fadeOutLeft'}`}>
                <div className="bk-block-num">
                    #{props.num}
                </div>
                <div className="bk-block-text">
                    <span className="bk-h3">
                        熱賣商品
                    </span>
                    <span className="bk-h5">
                        {''}
                    </span>
                </div>
            </div>
            <div className={`bk-ad-slide animated ${props.show ? 'fadeInRight' : 'fadeOutLeft'}`}>
                <div className="bk-ad-img">
                    <img src={`/img/ad-img/${props.data.adImg}`} alt="" />
                </div>
            </div>
            <div 
            className={`bk-ad-text animated ${props.show ? 'fadeInRight' : 'fadeOutLeft'}`} 
            ref={blockTextRef}
            style={{marginTop: `-${blockTxtHeight/2}px`}}
            >
                {/* {Blocktransitions.map(({item, key, props})=>{
                    // console.log(item)
                    return !item && (<animated.div className='bk-text-blocker' style={props}>
                    </animated.div>)
                })} */}
                    <h3>{props.data.adName}</h3>
                    <h6 className="bk-white">
                        {props.data.adTitle}
                    </h6>
                    <p>
                        {props.data.adContent}
                    </p>
                    <button className="bk-btn-white">
                        查看商品
                    </button>
            </div>
        </div>
    )
}

export default AdSlide