import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2'
import axios from 'axios'


import {
    FiThumbsUp,
    FiMessageSquare,
    FiEye,
  } from 'react-icons/fi'


function MemberStoryList(props){

    const [isHidden, setIsHidden] = useState(props.data.stryStatus)
    const [deleted, setDeleted] = useState(false)
    const [usrId, setUsrId] = useState(localStorage.getItem('userId'))


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
                    strydelete()
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
                    stryshow()
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
                    stryhide()
                })
              }
          })
    }

    const strydelete = ()=>{
        setDeleted(true)
    }
    
    const stryhide = ()=>{
        setIsHidden('hidden')
    }

    const stryshow = ()=>{
        setIsHidden('active')
    }

    return (
        <li key={props.data.stryId} 
        className={isHidden === 'active' ? '' : 'inactive'}
        style={deleted ? {display: 'none'} : {}}
        >
            <div className='bk-story-li-content'>
                <h5>{props.data.stryTitle}</h5>
                <div className='bk-txt-small'>{props.data.time}</div>
                <div className='py-2'>{props.data.contentStr}</div>

                <div className='bottom'>
                    <div className='stats'>
                        <span className='bk-stry-icons' key={'ak'}><FiThumbsUp /> {props.data.likes}</span>
                        <span className='bk-stry-icons' key={'bg'}><FiEye /> {props.data.stryViews}</span>
                        <span className='bk-stry-icons' key={'c'}><FiMessageSquare /> {props.data.rplyTotal}</span>
                    </div>

                    <div className='funcs'>
                        <div role='button' className='bk-hover'>
                            <Link to={`/member/stories/${props.data.stryId}/replies`}>
                                查看評論
                            </Link>
                        </div>
                        <div role='button' className='bk-hover'>
                            <Link to={`/member/stories/story/${props.data.stryId}`}>
                                編輯
                            </Link>
                        </div>

                        {isHidden === 'active' ? 
                            <div role='button' onClick={()=>{ handleHide(props.data.stryId) }} className='bk-hover'>隱藏</div>
                            :
                            <div role='button' onClick={()=>{ handleShow(props.data.stryId) }} className='bk-hover'>顯示</div>
                        }

                        <div role='button' onClick={()=>{ handleDelete(props.data.stryId) }} className='bk-hover'> 刪除</div>
                    </div>
                </div>
            </div>
        </li>
    )

}

export default MemberStoryList