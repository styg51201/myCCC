import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
// import { convertFromRaw } from 'draft-js'
// import {stateToHTML} from 'draft-js-export-html';
import {Link} from 'react-router-dom'
// import Swal from 'sweetalert2/dist/sweetalert2'
import MemberStoryList from './components/MemberStoryList'
import MemberSidebar from '../Irene/components/MemberSidebar'


function MemberStories(){

    const [data, setData] = useState([])
    const [usrId, setUsrId] = useState(localStorage.getItem('userId'))

    useEffect(()=>{
    
        axios({
            method: 'GET',
            url: `http://localhost:5500/stories/member/stories?usrId=${usrId}`
        })
        .then(r=>{
            if(r.data){
                r.data.forEach(elm=>{
                    let str = ''
                    for(let i = 0 ; i < JSON.parse(elm.stryContent).blocks.length ; i++){
                        str += JSON.parse(elm.stryContent).blocks[i].text
                    }
                    if(str.length > 100){
                        str = str.substring(1, 100) + '...'
                    }
                    elm.contentStr = str
                })
            }
            setData(r.data)
        })

    }, [])

    return(
        <>
            <Row>
                <MemberSidebar />
                <Col lg={9} className='bk-member-main-container'>
                    <div className='bk-story-top'>
                        <h3>我的故事</h3>
                        <Link to='/member/upload-stories'>
                            <button className='bk-hover'>去寫故事</button>
                        </Link>
                    </div>
                    <ul className='bk-story-list'>
                        {!data.length ? '沒有張貼故事' : data.map(elm=>{
                            return <MemberStoryList 
                            data={elm} 
                             />
                        })}
                    </ul>
                </Col>
            </Row>
        </>
    )
}

export default MemberStories

