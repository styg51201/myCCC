import React from 'react'
import '../css/home.scss'
import { FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";
import {Col, Container} from 'react-bootstrap'

function Collection(props){

    // console.log(props)

    return(
    <>
        <div className={
            props.theme === 'white' ? "bk-collection mt-5 " + props.theme : "bk-collection " + props.theme
        }>
            <div className="bottom">
                <img 
                src={ props.bg}
                style={{ objectPosition: props.position }}
                 />
            </div>

            <Container className='bk-collection-content'>
                    <div className="collection-titles">
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
            </Container>
        </div>
    </>
    )
}

export default Collection