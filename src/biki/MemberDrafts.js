import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2'

import MemberSidebar from '../Irene/components/MemberSidebar'


function MemberDrafts(){

    // const [user, setUser] = useState(localStorage.getItem('userId'))
    const user = localStorage.getItem('userId')
    const [data, setData] = useState([])

    useEffect(()=>{
        axios({
            method: 'GET',
            url: `http://localhost:5500/stories/member/drafts?usrId=${user}`
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

    const handleDelete = (id)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '確定',
            cancelButtonText: '取消',
            text: '確定要刪除？',
            position:'center',
            buttonsStyling: false,
            customClass: {
                popup: 'bk-swl-popup',
                icon: 'bk-swl-icon',
                content: 'bk-swl-content',
                confirmButton: 'bk-swl-confirm-button',
                cancelButton: 'bk-swl-cancel-button',
              }
          }) 
          .then(result=>{
              if(result.value){
                axios({
                    method: 'DELETE',
                    url: `http://localhost:5500/stories/member/draft/${id}?usrId=${user}`
                })
                .then(r=>{
                    console.log(r)
                    Swal.fire({
                        text: '刪除成功！',
                        icon: 'success',
                        buttonsStyling: false,
                        confirmButtonText: '確定',
                        customClass: {
                            popup: 'bk-swl-popup',
                            icon: 'bk-swl-icon',
                            content: 'bk-swl-content',
                            confirmButton: 'bk-swl-confirm-button',
                            cancelButton: 'bk-swl-cancel-button',
                          }
                    })
                })
              }
          })
    }

    return(
        <>
            <Row>
                <MemberSidebar />
                <Col lg={9} className='bk-member-main-container'>
                <div className='bk-story-top'>
                        <h3>我的草稿</h3>
                        <Link to='/member/upload-stories'>
                            <button>去寫故事</button>
                        </Link>
                    </div>
                    <ul className='bk-story-list'>
                        {!data.length ? '沒有草稿' : data.map(elm=>{
                            return (
                            <li key={elm.drftId}>
                                <div className='bk-story-li-content'>
                                    <h5>{elm.drftTitle}</h5>
                                    <div className='bk-txt-small'>{elm.time}</div>
                                    <div className='py-2'>{elm.contentStr}</div>
                                    <div className='bottom' style={{justifyContent: 'flex-end'}}>
                                        <div className='funcs'>
                                            <div role='button' onClick={()=>{ handleDelete(elm.drftId) }}>刪除</div>
                                            <div role='button'>
                                                <Link to={`/member/stories/draft/${elm.drftId}`}>
                                                    編輯
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
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