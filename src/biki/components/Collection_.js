import React from 'react'
import '../css/home.scss'
import { FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";
import {Col, Container} from 'react-bootstrap'
import {Parallax, Background } from 'react-parallax'

function Collection(props){

    // console.log(props)

    return(
    <>
        <div className={
            props.theme === 'white' ? "bk-collection mt-5 " + props.theme : "bk-collection " + props.theme
        }>
            <div className="bottom">
                <Parallax strength={400} bgImage={props.bg} style={{height: '100%'}}>
                    {/* <img 
                    src={ props.bg}
                    style={{ objectPosition: props.position }}
                    /> */}
                </Parallax>
            </div>
            
            <Parallax 
            style={{height: '100%'}}
            strength={100}
            bgImage={props.bg}
            renderLayer={percentage=>{
                console.log('percentage:', percentage)
                return(
                    <Container style={{height: '100%'}}>

                        <div className='bk-collection-content'>
                            <div className="collection-titles" 
                            style={{transform: 'translateY(-1000px)'}}
                            >
                                <h1>{props.title}</h1>
                                <h4>{props.titleCn}</h4>
                            </div>
                            <div className="content-bottom">
                                <div className="collection-info">
                                    {props.info}
                                </div>
                                <div className="collection-button">
                                    <button>瀏覽更多</button>
                                </div>
                            </div>
                            <div className="collection-img">
                                <img src={props.img} />
                            </div>
                        </div>
                    </Container>
                )
            }}
            >
            </Parallax>
        </div>
    </>
    )
}

export default Collection