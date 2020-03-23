import React, {useEffect, useState} from 'react'
import DraftEditorEdit from './components/DraftEditorEdit'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

function MemberStory(props){


    console.log("props:", props)
    // console.log('localstorage', localStorage.getItem('userdata'));

    return(
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
                    <h3>編輯草稿</h3>
                    {/* <DraftEditorEdit /> */}
                </Col>
            </Row>
    )
}

export default withRouter(MemberStory)