import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
// import { convertFromRaw } from 'draft-js'
// import {stateToHTML} from 'draft-js-export-html';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2'


import {
    // FiTrash2,
    // FiChevronDown,
    FiThumbsUp,
    FiMessageSquare,
    FiEye,
    FiEyeOff
  } from 'react-icons/fi'

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
                    url: `http://localhost:5500/stories/member/story/${id}?usrId=${usrId}`
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

    const handleShow = (id)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '確定',
            cancelButtonText: '取消',
            text: '確定將故事設為顯示？',
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
                    method: 'PATCH',
                    url: `http://localhost:5500/stories/member/story/show-story/${id}?usrId=${usrId}`
                })
                .then(r=>{
                    console.log(r)
                })
              }
          })
    }

    const handleHide = (id)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '確定',
            cancelButtonText: '取消',
            title: '確定要隱藏？',
            text: '隱藏後將不再顯示於故事牆上，但您可以隨時恢復',
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
                    method: 'PATCH',
                    url: `http://localhost:5500/stories/member/story/hide-story/${id}?usrId=${usrId}`
                })
                .then(r=>{
                    console.log(r)
                })
              }
          })
    }

    return(
        <>
            <Row>
                <Col lg={3}>
                    <div>
                        <ul>
                            <li key={'a'}>fake list</li>
                            <li key={'b'}>fake list</li>
                            <li key={'c'}>fake list</li>
                            <li key={'d'}>fake list</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={9} className='bk-member-main-container'>
                    <div className='bk-story-top'>
                        <h3>我的故事</h3>
                        <Link to='/member/upload-stories'>
                            <button>去寫故事</button>
                        </Link>
                    </div>
                    <ul className='bk-story-list'>
                        {!data.length ? '沒有張貼故事' : data.map(elm=>{
                            return (
                            <li key={elm.stryId} className={elm.stryStatus === 'active' ? '' : 'inactive'}>
                                <div className='bk-story-li-content'>
                                    <h5>{elm.stryTitle}</h5>
                                    <div className='bk-txt-small'>{elm.time}</div>
                                    <div className='py-2'>{elm.contentStr}</div>

                                    <div className='bottom'>
                                        <div className='stats'>
                                            <span className='bk-stry-icons' key={'ak'}><FiThumbsUp /> {elm.likes}</span>
                                            <span className='bk-stry-icons' key={'bg'}><FiEye /> {elm.stryViews}</span>
                                            <span className='bk-stry-icons' key={'c'}><FiMessageSquare /> {elm.rplyTotal}</span>
                                        </div>

                                        <div className='funcs'>
                                            <div role='button'>
                                                <Link to={`/member/stories/${elm.stryId}/replies`}>
                                                    查看評論
                                                </Link>
                                            </div>
                                            <div role='button'>
                                                <Link to={`/member/stories/story/${elm.stryId}`}>
                                                    編輯
                                                </Link>
                                            </div>

                                            {elm.stryStatus === 'active' ? 
                                                <div role='button' onClick={()=>{ handleHide(elm.stryId) }}>隱藏</div>
                                                :
                                                <div role='button' onClick={()=>{ handleShow(elm.stryId) }}>顯示</div>
                                            }

                                            <div role='button' onClick={()=>{ handleDelete(elm.stryId) }}> 刪除</div>
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

export default MemberStories

