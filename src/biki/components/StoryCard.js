import React, { useState, useEffect, useRef } from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

import {
    FiThumbsUp,
    FiMessageSquare,
    FiEye
  } from 'react-icons/fi'

import '../css/all.scss'
import '../css/stories.scss'

function StoryCard(props){
    // console.log(props.data.stryTags)
    

    const cardRef = useRef(null);
    const [height, setHeight] = useState(0)
    const [like, setLike] = useState(props.liked)
    const [likeNum, setLikeNum] = useState(props.data.likes)
    const [usrId, setUsrId] = useState(localStorage.getItem('userId'))

    useEffect(()=>{
        // console.log(cardRef.current.clientHeight);
        setHeight(cardRef.current.clientHeight)
    }, [props.loading])


    const handleToggleLike = (id, evt)=>{
        evt.preventDefault()
        if(usrId){
            console.log('set like to ', !like)
            setLike(!like)

            if(!like){
                console.log('like!')
                setLikeNum(likeNum + 1)
                axios.post(`http://localhost:5500/stories/member/add-like/${props.data.stryId}?usrId=${usrId}`)
            }else if(like){
                console.log('unlike!')
                setLikeNum(likeNum - 1)
                axios({
                    method: 'DELETE',
                    url: `http://localhost:5500/stories/member/remove-like/${props.data.stryId}?usrId=${usrId}`
                })
            }
        }
    }

    // useEffect(()=>{
    //     console.log(props.data.stryId, 'this story is liked?', like)
    // }, [])

    return(
        <Link to={`/stories/story/${props.data.stryId}`} className="bk-card-linkwrapper">
            <Card className={`bk-card${height >= 630 ? ' bk-collapse' : ''}`}
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
                    <div className='bk-tags'>{JSON.parse(props.data.stryTags).map((elm, idx)=>{
                        return (<div 
                                className='bk-tag'
                                key={`${elm}-${idx}`}
                                >
                                    {elm}
                                </div>)
                    })}</div>
                    <div dangerouslySetInnerHTML={{__html: props.content}}></div>
                </Card.Body>
                <Card.Footer className='bk-card-footer'>
                    <div>
                        <span className='bk-stry-icons'><FiThumbsUp /> {likeNum}</span>
                        <span className='bk-stry-icons'><FiMessageSquare /> {props.data.rplyTotal}</span>
                        <span className='bk-stry-icons'><FiEye /> {props.data.stryViews}</span>
                    </div>
                    <div 
                    className={`bk-press-like${like ? ' active' : ''}${usrId ? '' : ' inactive'}`} onClick={(evt)=>{handleToggleLike(props.data.stryId, evt)}}>
                        <span><FiThumbsUp /> {usrId ? '按讚' : '請登入'}</span>
                    </div>
                </Card.Footer>
            </Card>
            <div className="bk-masonry-itm-backdrop"></div>
        </Link>
    )
}

export default StoryCard