import React from 'react'
import DraftEditor from './components/DraftEditor'
import { Row, Col } from 'react-bootstrap'

import MemberSidebar from '../Irene/components/MemberSidebar'


import './css/storyEditor.scss'

function UploadStory(){
    return(
        <>
            <Row>
                <MemberSidebar />
                <Col lg={9} className='bk-member-main-container'>
                    <h3>上傳故事</h3>
                    <DraftEditor />
                </Col>
            </Row>
        </>
    )
}

export default UploadStory