import React, {useRef, useEffect, useState} from 'react'
// import { Container, Row, Col } from 'react-bootstrap'

function AdSlide(props){
    //外層是section bk-ads

    const [blockTxtHeight, setBlockTxtHeight] = useState(0)

    const blockTextRef = useRef(null)

    useEffect(()=>{
        const height = blockTextRef.current.clientHeight;
        setBlockTxtHeight(height)
    },[])

    // console.log(props)
    return(
        <div className={`bk-ad${props.show ? '' : ' hidden'}`}>
            <div className={`bk-ad-block animated ${props.show ? 'fadeInRight' : 'fadeOutLeft'}`}>
                <div className="bk-block-num">
                    #{props.num}
                </div>
                <div className="bk-block-text">
                    <span className="bk-h3">
                        {props.data.blockTitle}
                    </span>
                    <span className="bk-h5">
                        {props.data.blockSubTitle}
                    </span>
                </div>
            </div>
            <div className={`bk-ad-slide animated ${props.show ? 'fadeInRight' : 'fadeOutLeft'}`}>
                <div className="bk-ad-img"></div>
            </div>
            <div 
            className={`bk-ad-text animated ${props.show ? 'fadeInRight' : 'fadeOutLeft'}`} 
            ref={blockTextRef}
            style={{marginTop: `-${blockTxtHeight/2}px`}}
            >
                    <h3>{props.data.title}</h3>
                    <h6 className="bk-white">
                        {props.data.subTitle}
                    </h6>
                    <p>
                        {props.data.content}
                    </p>
                    <button className="bk-btn-white">
                        {props.data.btnTxt}
                    </button>
            </div>
        </div>
    )
}

export default AdSlide