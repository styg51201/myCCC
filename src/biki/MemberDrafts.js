import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'


function MemberDrafts(){

    const [data, setData] = useState([])

    useEffect(()=>{
        axios({
            method: 'GET',
            url: `http://localhost:5500/stories/member/drafts?usrId=${localStorage.getItem('userId')}`
        })
        .then(r=>{
            // console.log(r.data)
            r.data.forEach(elm=>{
                let str = ''
                for(let i = 0 ; i < JSON.parse(elm.drftContent).blocks.length ; i++){
                    str += JSON.parse(elm.drftContent).blocks[i].text
                }
                if(str.length > 50){
                    str = str.substring(1, 50) + '...'
                }
                elm.contentStr = str
            })
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
                    <h3>草稿列表</h3>
                    <ul className='bk-story-list'>
                        {!data.length ? '沒有草稿' : data.map(elm=>{
                            return (
                            <li key={elm.drftId}>
                                <div className='bk-story-li-content col-10'>
                                    <Row>
                                        <div className="col-lg-4">
                                            <h5>{elm.drftTitle}</h5>
                                            <div className='bk-txt-small'>{elm.time}</div>
                                            <div className='bk-txt-small'>{elm.drftStatus}</div>
                                        </div>
                                        <div className='col-lg-8'>
                                            <div>{elm.contentStr}</div>
                                        </div>
                                    </Row>
                                </div>
                                <div className='bk-story-li-fn col-2'>
                                    {/* <Link to={`/member/stories/${elm.stryId}/replies`}> */}
                                        <button className="bk-btn-black">刪除</button>
                                    {/* </Link> */}
                                    <Link to={`/member/stories/draft/${elm.drftId}`}>
                                        <button className="bk-btn-black-bordered">
                                                編輯
                                        </button>
                                    </Link>
                                </div>
                            </li>
                            )
                        })}
                    </ul>
                </Col>
            </Row>
        </>
    )
}

export default MemberDrafts