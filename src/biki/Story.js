import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {stateToHTML} from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js'
import { Row, Col } from 'react-bootstrap'

import StoryReply from './components/StoryReply'
import useReplyTextarea from './utils/useReplyTextarea'

import './css/stories.scss'

function Story(props){

    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [replyTo, setReplyTo] = useState(null)

    const {
        rows,
        txtContent,
        handleChange,
        handleKey
    } = useReplyTextarea()

    useEffect(()=>{

        let url = 'http://localhost:5500' + props.location.pathname + props.location.search
        let url2 = 'http://localhost:5500/stories/api/view-story' + props.location.search

        axios.all([
            axios.get(url),
            axios.patch(url2)
        ])
        .then(axios.spread((...res)=>{
            // console.log(res[0].data.data)
            res[0].data.data.forEach(element => {
                element.stryContent = stateToHTML(convertFromRaw(JSON.parse(element.stryContent)))
            });
            // console.log(res[0].data.data)
            setData(res[0].data.data)
            // setTimeout(()=>{
                setLoaded(true)
            // }, 1000)
        }))
        .catch(err=>{
            if(axios.isCancel(err)) return
        })
    }, [])

    const handleSubmit = ()=>{
        let url = 'http://localhost:5500/stories/reply' + props.location.search + (replyTo ? `&toId:${replyTo}` : '')
        console.log(url)

        axios({
            method: 'POST',
            url: url,
            data: {
                content: txtContent
            }
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    if(loaded){
        return (
            <>
                <Row className="bk-story-container">
                    <Col lg={4}>
                        <div className="bk-story-side">
                            <div className="bk-story-top">
                                <div>Image</div>
                                <div>{data[0].Name}</div>
                                <div>{data[0].stryFromNow}</div>
                            </div>
                            <div className="bk-story-bottom">
                                <ul>
                                    <li>Comment</li>
                                    <li>Add to fav</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='bk-story-content'>            
                            <h3>{data[0].stryTitle}</h3>
                            <div dangerouslySetInnerHTML={{__html: data[0].stryContent}}></div>
                        </div>
                        <div className="bk-story-reply">
                            <label>留言</label>
                            <textarea rows={rows} onChange={handleChange} onKeyDown={handleKey} />
                            <button className="bk-btn-black" onClick={handleSubmit}>Submit</button>
                        </div>
                        {data.map((elm, idx)=>{
                            if(elm.rplyId){
                                return <StoryReply
                                    key={elm.rplyId}
                                    submit={handleSubmit}
                                    data={{
                                        name: elm.Name,
                                        img: elm.Image,
                                        id: elm.rplyId,
                                        content: elm.rplyContent,
                                        to: elm.rplyToId,
                                        fromNow: elm.rplyFromNow,
                                        date: elm.rplyUpdate
                                    }}
                                    />
                            }else{
                                return 'no replies yet'
                            }
                        })}
                    </Col>
                </Row>
            </>
        )
    }else{
        return (
            <>
                <Row className="bk-story-container">
                    <Col lg={4}>
                        <div className="bk-story-side">
                            <div className="bk-story-top">
                            </div>
                            <div className="bk-story-bottom">
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='bk-story-content'>            
                        </div>
                        <div className="bk-story-replies">
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default withRouter(Story)