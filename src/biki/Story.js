import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {stateToHTML} from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js'
import { Row, Col } from 'react-bootstrap'
import Swal from 'sweetalert2'

import StoryReply from './components/StoryReply'
import useReplyTextarea from './utils/useReplyTextarea'

import './css/stories.scss'

function Story(props){

    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [rplyData, setRplyData] = useState(null)
    // const [replyIsOpened, setReplyIsOpened] = useState(0)

    const {
        rows,
        replyTo,
        txtContent,
        handleChange,
        handleKey
    } = useReplyTextarea()

    useEffect(()=>{

        let url = 'http://localhost:5500' + props.location.pathname + props.location.search //gets story
        let url2 = 'http://localhost:5500/stories/api/view-story' + props.location.search //adds view
        let url3 = 'http://localhost:5500/stories/story/replies'  + props.location.search //gets replies
        // console.log(props.location.search)
        console.log(url3)

        axios.all([
            axios.get(url),
            axios.patch(url2),
            axios.get(url3)
        ])
        .then(axios.spread((...res)=>{
            console.log(res[2].data)
            res[0].data.data.forEach(element => {
                element.stryContent = stateToHTML(convertFromRaw(JSON.parse(element.stryContent)))
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
            // console.log(arr)
            // console.log(arr2)
            
            const recursive = (children, parents)=>{
                let leftoutchildren = [...children]
                children.forEach(child=>{
                    parents.some(parent=>{
                        if(parent.rplyId === child.rplyTo){
                            (parent.children || (parent.children = [])).push(child)
                            if(leftoutchildren.indexOf(child) !== -1){
                                leftoutchildren.splice(leftoutchildren.indexOf(child), 1)
                            }
                            return true;
                        }
                    })
                })
                // console.log('leftouts:',leftoutchildren)
                if(leftoutchildren.length > 0){
                    recursive(leftoutchildren, children)
                }
                return parents;
            }

            let results = recursive(arr2, arr)
            // console.log(results)

            setData(res[0].data.data)
            setRplyData(results)
            setLoaded(true)
        }))
        .catch(err=>{
            if(axios.isCancel(err)) return
        })
    }, [])

    const handleSubmit = (replyTo, txtContent)=>{
        let url = 'http://localhost:5500/stories/reply' + props.location.search + (replyTo ? `&toId=${replyTo}` : '')
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
                        fromNow: elm.fromNow,
                        date: elm.rplyUpdate
                    }}
                />
            ]
            if(elm.children){
                child.push(mapRecursive(elm.children))
            }
        return <div className="bk-r">{child}</div>
        })
    }
    
    if(loaded){
        return (
            <>
                <Row className="bk-story-container">
                    <Col lg={3}>
                        <div className="bk-story-side">
                            <div className="bk-story-top">
                                <div>Image</div>
                                <div>{data[0].Name}</div>
                                <div>{data[0].stryFromNow}</div>
                            </div>
                            <div className="bk-story-bottom">
                                <ul>
                                    <li>Comment</li>
                                    <li>Add to fav</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className='bk-story-content'>            
                            <h3>{data[0].stryTitle}</h3>
                            <div dangerouslySetInnerHTML={{__html: data[0].stryContent}}></div>
                        </div>
                        <div className="bk-story-reply">
                            <label>留言</label>
                            <textarea rows={rows} onChange={(evt)=>{
                                handleChange(null, evt)
                            }} onKeyDown={handleKey} />
                            <button 
                            className="bk-btn-black" 
                            onClick={()=>{
                                handleSubmit(replyTo, txtContent)
                            }}>Submit</button>
                        </div>
                     <div className='bk-recursive-replies-container'>
                     {rplyData.length ? mapRecursive(rplyData) : '目前還沒有留言'}
                     </div>
                    </Col>
                </Row>
            </>
        )
    }else{
        return (
            <>
                <Row className="bk-story-container">
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
                </Row>
            </>
        )
    }
}

export default withRouter(Story)