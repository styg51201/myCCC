import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/all.scss'
import '../css/stories.scss'

function StorieyCard(props){

    const masonryRef = useRef(null);
    const [height, setHeight] = useState(0)

    useEffect(()=>{
        // console.log(masonryRef.current.clientHeight);
        setHeight(masonryRef.current.clientHeight)
    }, [])

    return(
        <>
            <div className={`bk-masonry-itm ${height > 600 ? 'bk-collapse' : ''}`} ref={masonryRef}>
                <Card className="bk-card">
                    <Card.Header>
                    <div className="bk-card-user">
                            <div className="bk-card-userimg"></div>
                            <div>
                                <div>Username</div>
                                <div>Upload/Updated time</div>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className="bk-card-body">
                        <h3>{props.title}</h3>
                        <div dangerouslySetInnerHTML={{__html: props.content}}></div>
                    </Card.Body>
                    <Card.Footer>
                        <div>likes</div>
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
}

export default StorieyCard