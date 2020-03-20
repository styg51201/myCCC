import React from 'react'
import DraftEditor from './components/DraftEditor'
import { Row, Col } from 'react-bootstrap'

import './css/storyEditor.scss'

function UploadStory(){
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
                <Col lg={9} className='bk-story-editor-container'>
                    <h3>上傳故事</h3>
                    <DraftEditor />
                </Col>
            </Row>
        </>
    )
}

export default UploadStory