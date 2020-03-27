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
        <Link to={`/stories/story/${props.data.stryId}`} className="bk-card-linkwrapper">
            <Card className={`bk-card${height > 500 ? ' bk-collapse' : ''}`}
                ref={cardRef}
                >
                <Card.Header>
                <div className="bk-card-user">
                        <div className="bk-card-userimg">
                            <img src={props.data.Img ? props.data.Img : './biki-img/svg/user.svg'} />
                        </div>
                        <div>
                        <div>{props.data.Name || props.data.Account}</div>
                            <div>{props.data.fromNow}</div>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body className="bk-card-body">
                    <h3>{props.data.stryTitle}</h3>
                    <div dangerouslySetInnerHTML={{__html: props.content}}></div>
                </Card.Body>
                <Card.Footer className='bk-card-footer'>
                    <div>
                        <span className='bk-stry-icons'><FiThumbsUp /> {props.data.stryLikes}</span>
                        <span className='bk-stry-icons'><FiMessageSquare /> {props.data.rplyTotal}</span>
                        <span className='bk-stry-icons'><FiEye /> {props.data.stryViews}</span>
                    </div>
                </Card.Footer>
            </Card>
            <div className="bk-masonry-itm-backdrop"></div>
        </Link>
    )
}

export default StoryCard