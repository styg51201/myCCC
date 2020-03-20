import React, { useState, useEffect, useRef } from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/all.scss'
import '../css/stories.scss'

function StoryCard(props){

    const cardRef = useRef(null);
    const [height, setHeight] = useState(0)

    useEffect(()=>{
        // console.log(cardRef.current.clientHeight);
        setHeight(cardRef.current.clientHeight)
    }, [props.loading])



    return(
        <>
            <Card className={`bk-card${height > 500 ? ' bk-collapse' : ''}`}
                ref={cardRef}
                onClick={props.onClick}
                // data-stry_id={props.stryId}
                >
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
            <div className="bk-masonry-itm-backdrop"></div>
        </>
    )
}

export default StoryCard