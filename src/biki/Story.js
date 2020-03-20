import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {stateToHTML} from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js'
import { Row, Col } from 'react-bootstrap'

import './css/stories.scss'

function Story(props){

    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        let url = 'http://localhost:5500' + props.location.pathname + props.location.search
        let url2 = 'http://localhost:5500/stories/api/view-story' + props.location.search

        axios.all([
            axios.get(url),
            axios.patch(url2)
        ])
        .then(axios.spread((...res)=>{
            res[0].data.data.stryContent = stateToHTML(convertFromRaw(JSON.parse(res[0].data.data.stryContent)))
            // console.log(res[0].data.data)
            setData(res[0].data.data)
            setLoaded(true)
        }))
        .catch(err=>{
            if(axios.isCancel(err)) return
        })
    }, [])

    if(loaded){
        return (
            <>
                <Row className="bk-story-container">
                    <Col lg={4}>
                        <div className="bk-story-side">
                            <div className="bk-story-top">
                                <div>Image</div>
                                <div>Username</div>
                                <div>Update/create time</div>
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
                            <h3>{data.stryTitle}</h3>
                            <div dangerouslySetInnerHTML={{__html: data.stryContent}}></div>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }else{
        return 'is loading....'
    }
}

export default withRouter(Story)