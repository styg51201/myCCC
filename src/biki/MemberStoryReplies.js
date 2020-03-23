import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import StoryReply from './components/StoryReply'
import {getRecursiveJson, mapRecursive} from './utils/useRecursive'

// import './css/stories.scss'


function MemberStoryReplies(props){
    
    const [data, setData] = useState([])

    // const {getRecursiveJson} = useReplyRecursive

    useEffect(()=>{
        if(!getRecursiveJson) return;

        let id = props.match.params.id

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

    const handleSubmit = (replyTo, txtContent)=>{
        let url = `http://localhost:5500/stories/reply?id=${props.match.params.id}` + (replyTo ? `&toId=${replyTo}` : '')
        console.log(url)

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
                // icon: 'success',
                text: '成功回覆',
                showConfirmButton: false,
                timer: 1500,
                position:'center',
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
                        img: elm.Image,
                        id: elm.rplyId,
                        content: elm.rplyContent,
                        to: elm.rplyToId,
                        date: elm.rplyUpdate,
                        fromNow: elm.fromNow
                    }}
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
                    <h3>回覆留言</h3>
                    <div className="bk-recursive-replies-container">
                        {!data.length ? '暫時沒有留言' : mapRecursive(data) }
                    </div>
                </Col>
            </Row>
    )
}

export default withRouter(MemberStoryReplies)