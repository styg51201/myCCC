import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {stateToHTML} from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js'
import { Row, Col } from 'react-bootstrap'
import Swal from 'sweetalert2/dist/sweetalert2'

import StoryReply from './components/StoryReply'
// import useReplyTextarea from './utils/useReplyTextarea'
import useTextareaRows from './utils/useTextareaRows'
import {getRecursiveJson} from './utils/useRecursive'

import {
    FiThumbsUp,
    FiMessageSquare,
    FiEye
  } from 'react-icons/fi'

import './css/stories.scss'

function Story(props){

    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [rplyData, setRplyData] = useState(null)
    const [user, setUser] = useState(localStorage.getItem('userId'))
    const [txtContent, setTxtContent] = useState('')
    const [replyTo, setReplyTo] = useState(null)
    const [like, setLike] = useState(false)
    const [likeNum, setLikeNum] = useState(0)

    const [openRplyTo, setOpenRplyTo] = useState(null)

    const {
        rows, 
        handleRows, 
        handleKey
    } = useTextareaRows()

    const handleChange = (data, evt)=>{
        setTxtContent(evt.target.value)
        setReplyTo(data)
    }

    const handleOnclick = (id)=>{
        setOpenRplyTo(id)
    }

    useEffect(()=>{
        
        let url = `http://localhost:5500/stories/story/${props.match.params.id}` //gets story
        let url2 = `http://localhost:5500/stories/api/view-story/${props.match.params.id}` //adds view
        let url3 = `http://localhost:5500/stories/story/replies/${props.match.params.id}` //gets replies
        let url4 = `http://localhost:5500/stories//member/like/${props.match.params.id}${user ? `?usrId=${user}` : ''}` //gets like or not
        // console.log(props.location.search)
        // console.log(url3)

        axios.all([
            axios.get(url),
            axios.patch(url2),
            axios.get(url3),
            axios.get(url4)
        ])
        .then(axios.spread((...res)=>{
            // console.log('like or not:', res[3].data.length)
            if(res[3].data.length){
                console.log('set like')
                setLike(true)
            }
            console.log(res[2].data)

            let options = {
                blockStyleFn: (block) => {
                    // console.log('block type:', block.type)
                    switch(block.type){
                        case 'ALIGNLEFT':
                            return {style:{textAlign: 'left'}}
                        case 'ALIGNCENTER':
                            return {style:{textAlign: 'center'}}
                        case 'ALIGNRIGHT':
                            return {style:{textAlign: 'right'}}
                    }
                }
              }

            res[0].data.data.forEach(element => {
                element.stryContent = stateToHTML(convertFromRaw(JSON.parse(element.stryContent)), options)
            });

            let arr = [] //沒有
            let arr2 = [] //有to

            res[2].data.forEach(elm=>{
                if(!elm.rplyTo){
                    arr.push(elm)
                }else{
                    arr2.push(elm)
                }
            })

            let results = getRecursiveJson(arr2, arr)
            // console.log(results)

            setData(res[0].data.data)
            setLikeNum(res[0].data.data[0].likes)
            setRplyData(results)
            setLoaded(true)
        }))
        .catch(err=>{
            if(axios.isCancel(err)) return
        })
    }, [])

    const handleSubmit = (replyTo, txtContent)=>{

        //沒有內容不給發送
        if(!txtContent.trim().length){
            return;
        }

        let url = `http://localhost:5500/stories/reply/${props.match.params.id}` + (replyTo ? `?toId=${replyTo}` : '') + (replyTo ? `&usrId=${user}` : `?usrId=${user}`)

        axios({
            method: 'POST',
            url: url,
            data: {
                content: txtContent
            }
        })
        .then(res=>{
            axios.get(`http://localhost:5500/stories/story/replies/${props.match.params.id}?rplyId=${res.data.insertId}`)
            .then(r=>{
                // setTempRplyTo(r.data[0])
                setTxtContent('')
                setOpenRplyTo(null)
                setRplyData(prevData=>{
                    if(r.data[0].rplyTo === null){
                        return [r.data[0], ...prevData]
                    }else{
                        let getObjPos = (obj, arr)=>{
                            console.log('obj:', obj)
                            let newArr = [...arr]
                            newArr.some(elm=>{
                                if(elm.rplyId === obj.rplyTo){
                                    obj.rplyToName = elm.Name || elm.Account;
                                    (elm.children || (elm.children = [])).push(obj)
                                    console.log('found!')
                                    return true;
                                }else{
                                    if(elm.children){
                                        console.log('continue finding...')
                                        getObjPos(obj, elm.children)
                                    }
                                }
                            })
                            // console.log('newArr:', newArr)
                            return newArr
                        }
                        return getObjPos(r.data[0], prevData)
                    }
                })
            })

            Swal.fire({
                position: 'top-end',
                text: '成功回覆',
                showConfirmButton: true,
                // timer: 1500,
                buttonsStyling: false,
                position:'center',
                customClass: {
                    popup: 'bk-swl-popup',
                    content: 'bk-swl-content',
                    confirmButton: 'bk-swl-confirm-button',
                  }
              })  
            console.log(res.data)
        })
    }

    const handleToggleLike = (id, evt)=>{
        evt.preventDefault()
        if(user){
            console.log('set like to ', !like)
            setLike(!like)

            if(!like){
                console.log('like!')
                setLikeNum(likeNum + 1)
                axios.post(`http://localhost:5500/stories/member/add-like/${props.match.params.id}?usrId=${user}`)
            }else if(like){
                console.log('unlike!')
                setLikeNum(likeNum - 1)
                axios({
                    method: 'DELETE',
                    url: `http://localhost:5500/stories/member/remove-like/${props.match.params.id}?usrId=${user}`
                })
            }
        }
    }

    const mapRecursive = (data)=>{
        return data.map((elm, idx)=>{
            let key = elm.rplyId
            let child = [
                <StoryReply
                    key={elm.rplyId}
                    handlers={{
                        submit: handleSubmit
                    }}
                    data={elm}
                    id={`${elm.rplyId}-${elm.usrId}`}
                    onClick={handleOnclick}
                    openRplyTo={openRplyTo}
                />
            ]
            if(elm.children){
                child.push(mapRecursive(elm.children))
            }
            return <div className="bk-r" key={key+'r'}>{child}</div>
        })
    }
    
    if(loaded){
        return (
            <>
                <div className="bk-story-head">
                    <div className='bk-story-container'>
                        <div className='title'>{data[0].stryTitle}</div>
                        <div className='user'>
                            <div className='img'>
                                <img src={data[0].Img ? data[0].Img : '/biki-img/SVG/user.svg'} />
                            </div>
                            <div>
                                <div className='name'>{data[0].Name || data[0].Account}</div>
                                <div className='date'>{data[0].updated_at}</div>
                            </div>
                        </div>
                        {JSON.parse(data[0].stryTags).length 
                        ? 
                        (<div className='bk-tags bk-dark mt-5'>
                            {JSON.parse(data[0].stryTags).map((elm, idx)=>{
                            return (<div key={`${elm}-idx`} className='bk-tag'>
                                    {elm}
                                </div>)
                            })}
                        </div>)
                        :
                        ''}
                    </div>
                </div>
                <div className="bk-story-wrapper">
                    <div className='bk-story-container'>
                        <div className='bk-story-content'>            
                            <div dangerouslySetInnerHTML={{__html: data[0].stryContent}}></div>
                            <hr />
                            <div className={`add-like pt-4${like ? ' active' : ''}`}>
                                <span onClick={(evt)=>{handleToggleLike(data[0].stryId, evt)}} className={`like bk-hover${user ? '' : ' disabled'}`}>
                                    <FiThumbsUp /> <b>按讚</b> 
                                </span>
                                <span className='bk-txt-small ml-4'>目前已有 {likeNum} 人按讚</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bk-reply-wrapper'>
                    <div className='bk-reply-container'>
                        <div className="bk-story-reply">
                            <label>留言</label>
                            <textarea 
                            rows={rows} 
                            onChange={(evt)=>{
                                handleRows(evt);
                                handleChange(null, evt)
                            }} 
                            value={user ? txtContent : '請先登入才能回復'}
                            onKeyDown={handleKey} 
                            disabled={user ? false : true}
                            // defaultValue={user ? '' : '請先登入才能回復'}
                            />
                            <button 
                            className={`${user ? 'bk-btn-black' : 'bk-btn-grey'} bk-hover`}
                            onClick={()=>{
                                handleSubmit(replyTo, txtContent)
                            }}
                            disabled={user ? false : true}
                            >回覆</button>
                        </div>
                        <div className='bk-recursive-replies-container'>
                            {rplyData.length ? mapRecursive(rplyData) : '目前還沒有留言'}
                        </div>
                    </div>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="bk-story-container">
                    <Col lg={4}>
                        <div className="bk-story-side">
                            <div className="bk-story-top">
                            </div>
                            <div className="bk-story-bottom">
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='bk-story-content'>            
                        </div>
                        <div className="bk-story-replies">
                        </div>
                    </Col>
                </div>
            </>
        )
    }
}

export default withRouter(Story)