import React, { useState, useEffect, useRef } from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import {
    FiThumbsUp,
    FiMessageSquare,
    FiEye
  } from 'react-icons/fi'

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
            <Link to={`/stories/story?id=${props.data.stryId}`} className="bk-card-linkwrapper">
                <Card className={`bk-card${height > 500 ? ' bk-collapse' : ''}`}
                    ref={cardRef}
                    >
                    <Card.Header>
                    <div className="bk-card-user">
                            <div className="bk-card-userimg"></div>
                            <div>
                            <div>{props.data.Name}</div>
                                <div>{props.data.fromNow}</div>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className="bk-card-body">
                        <h3>{props.data.stryTitle}</h3>
                        <div dangerouslySetInnerHTML={{__html: props.content}}></div>
                    </Card.Body>
                    <Card.Footer>
                        <div>
                            <FiThumbsUp />{props.data.stryLikes}
                            <FiMessageSquare />{props.data.rplyTotal}
                            <FiEye />{props.data.stryViews}
                        </div>
                    </Card.Footer>
                </Card>
                <div className="bk-masonry-itm-backdrop"></div>
            </Link>
        </>
    )
}

export default StoryCard