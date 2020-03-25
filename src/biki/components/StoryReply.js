import React, {useState, useRef, useEffect} from 'react'
// import useReplyTextarea from '../utils/useReplyTextarea'
import useTextareaRows from '../utils/useTextareaRows'

function StoryReply(props){

    const [txtContent, setTxtContent] = useState('')
    const [showReplyTo, setShowReplyTo] = useState(false)
    const [replyTo, setReplyTo] = useState(null)

    const {
        rows, 
        handleRows, 
        handleKey
    } = useTextareaRows()

    useEffect(()=>{
        if(props.openRplyTo !== props.id){
            setShowReplyTo(false)
            setTxtContent('')
        }
    }, [props.openRplyTo])

    const handleChange = (data, evt)=>{
        setTxtContent(evt.target.value)
        setReplyTo(data)
    }

    const handleToggleShow = (id)=>{
        if(showReplyTo) setTxtContent('')
        setShowReplyTo(!showReplyTo)
    }

    const rplyRef = useRef(null)

    return (
        <div className="bk-story-replies" id={props.id} ref={rplyRef}>
            <div className='bk-rply-head'>
                <div>image</div>
                <div>
                    {props.data.name || props.data.account} <br />
                    {props.data.fromNow}
                </div>
            </div>
            <div className="bk-rply-body">
                <div>{props.data.content}</div>
            </div>
            <div className="bk-rply-foot">
                <div onClick={()=>{
                    handleToggleShow(props.id)
                    props.onClick(props.id)
                    }} 
                    role="button"
                >
                    {showReplyTo ? '取消' : '回覆'}
                </div>
            </div>
            <div className={`bk-reply-textarea${!showReplyTo ? ' hidden' : ''}`}>
                <textarea 
                    rows={rows}
                    value={txtContent} 
                    onChange={(evt)=>{
                        handleRows(evt);
                        handleChange(props.data.id, evt);
                    }} 
                    onKeyDown={handleKey}
                ></textarea>
                <div className='bk-reply-btn-group'>
                    <button onClick={handleToggleShow}>取消</button>
                    <button onClick={()=>{
                        props.handlers.submit(replyTo, txtContent)
                    }}>回覆</button>
                </div>
            </div>
        </div>
    )
}

export default StoryReply