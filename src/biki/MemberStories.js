import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
// import { convertFromRaw } from 'draft-js'
// import {stateToHTML} from 'draft-js-export-html';

import {
    FiTrash2,
    FiChevronDown,
    FiThumbsUp,
    FiMessageSquare,
    FiEye
  } from 'react-icons/fi'

function MemberStories(){

    const [data, setData] = useState(null)

    useEffect(()=>{
        axios({
            method: 'GET',
            url: 'http://localhost:5500/stories/member/stories'
        })
        .then(r=>{
            if(r.data){
                r.data.forEach(elm=>{
                    let str = ''
                    for(let i = 0 ; i < JSON.parse(elm.stryContent).blocks.length ; i++){
                        str += JSON.parse(elm.stryContent).blocks[i].text
                    }
                    if(str.length > 50){
                        str = str.substring(1, 50) + '...'
                    }
                    elm.contentStr = str
                    // console.log(str)
                    // console.log(stateToHTML(convertFromRaw(JSON.parse(elm.stryContent))).text)
                    // elm.stryContent = stateToHTML(convertFromRaw(JSON.parse(elm.stryContent))).innerText
                })
            }
            setData(r.data)
        })

    }, [])
    return(
        <>
            <Row>
                <Col lg={3}>
                    <div>
                        <ul>
                            <li>fake list</li>
                            <li>fake list</li>
                            <li>fake list</li>
                            <li>fake list</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={9} className='bk-member-main-container'>
                    <h3>故事列表</h3>
                    <ul className='bk-story-list'>
                        {!data ? 'no stories' : data.map(elm=>{
                            return (<>
                            <li>
                                <div className='bk-story-li-content col-10'>
                                    <Row>
                                        <div className="col-lg-4">
                                            <h5>{elm.stryTitle}</h5>
                                            <div className='bk-txt-small'>{elm.time}</div>
                                            <div className='bk-txt-small'>{elm.stryStatus}</div>
                                            <div>
                                                <FiThumbsUp /> {elm.stryLikes}
                                                <FiEye /> {elm.stryViews}
                                                <FiMessageSquare />
                                            </div>
                                        </div>
                                        <div className='col-lg-8'>
                                            <div>{elm.contentStr}</div>
                                        </div>
                                    </Row>
                                </div>
                                <div className='bk-story-li-fn col-2'>
                                    <button class="bk-btn-black">刪除</button>
                                </div>
                            </li>
                            </>)
                        })}
                    </ul>
                </Col>
            </Row>
        </>
    )
}

export default MemberStories

