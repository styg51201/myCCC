import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import MemberSidebar from '../Irene/components/MemberSidebar'
import StoryReply from './components/StoryReply'
import {getRecursiveJson} from './utils/useRecursive'

// import './css/stories.scss'


function MemberStoryReplies(props){
    
    const [data, setData] = useState([])
    const [openRplyTo, setOpenRplyTo] = useState(null)
    const [id, setId] = useState(props.match.params.id)

    useEffect(()=>{
        if(!getRecursiveJson) return;

        // let id = props.match.params.id
        console.log(id)

        axios.get(`http://localhost:5500/stories/member/${id}/replies`)
        .then(r=>{

            let arr = [] //沒有
            let arr2 = [] //有to

            r.data.forEach(elm=>{
                if(!elm.rplyTo){
                    arr.push(elm)
                }else{
                    arr2.push(elm)
                }
            })
            let results = getRecursiveJson(arr2, arr)

            setData(results)
        })
    }, [])

    const handleOnclick = (id)=>{
        setOpenRplyTo(id)
    }

    const handleSubmit = (replyTo, txtContent)=>{

        if(!txtContent.trim().length){
            return
        }

        let url = `http://localhost:5500/stories/reply/${id}?usrId=${localStorage.getItem('userId')}` + (replyTo ? `&toId=${replyTo}` : '')

        axios({
            method: 'POST',
            url: url,
            data: {
                content: txtContent
            }
        })
        .then(res=>{
            Swal.fire({
                position: 'top-end',
                text: '成功回覆',
                showConfirmButton: true,
                // timer: 1500,
                buttonsStyling: false,
                confirmButtonText: '確定',
                position:'center',
                customClass: {
                    popup: 'bk-swl-popup',
                    icon: 'bk-swl-icon',
                    content: 'bk-swl-content',
                    confirmButton: 'bk-swl-confirm-button',
                  }
            })
            console.log(res.data)
        })
    }

    const mapRecursive = (data)=>{
        return data.map((elm, idx)=>{
            let child = [
                <StoryReply
                    key={elm.rplyId}
                    handlers={{
                        submit: handleSubmit
                    }}
                    data={{
                        name: elm.Name,
                        account: elm.Account,
                        img: elm.Image,
                        id: elm.rplyId,
                        content: elm.rplyContent,
                        to: elm.rplyToId,
                        date: elm.rplyUpdate,
                        fromNow: elm.fromNow
                    }}
                    id={`${elm.rplyId}-${elm.usrId}`}
                    onClick={handleOnclick}
                    openRplyTo={openRplyTo}
                />
            ]
            if(elm.children){
                child.push(mapRecursive(elm.children))
            }
        return <div className="bk-r">{child}</div>
        })
    }


    return(
        <Row>
                <MemberSidebar />
                <Col lg={9}>
                    <div className='bk-member-main-container bk-reply-page'>
                        <h3>回覆留言</h3>
                    </div>
                    <div className="bk-recursive-replies-container bk-reply-page">
                        {!data.length ? 
                        <div className="bk-story-replies" style={{background: 'transparent'}}>暫時沒有留言</div> 
                        :
                         mapRecursive(data) }
                    </div>
                </Col>
            </Row>
    )
}

export default withRouter(MemberStoryReplies)