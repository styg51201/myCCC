import React, {useState} from 'react'
import useReplyTextarea from '../utils/useReplyTextarea'

function StoryReply(props){
    
    const {
        rows,
        handleChange,
        handleKey
    } = useReplyTextarea()

    const [showReplyTo, setShowReplyTo] = useState(false)

    const handleShow = ()=>{
        setShowReplyTo(true)
    }
    const handleCancel = ()=>{
        setShowReplyTo(false)
    }

    return (
        <>
            <div className="bk-story-replies">
                <div className='bk-rply-head'>
                    <div>image</div>
                    <div>
                        {props.data.name} <br />
                        {props.data.fromNow}
                    </div>
                </div>
                <div className="bk-rply-body">
                    <div>{props.data.content}</div>
                </div>
                <div className="bk-rply-foot">
                    <div onClick={handleShow} role="button">Reply</div>
                </div>
                <div className={`bk-reply-textarea${!showReplyTo ? ' hidden' : ''}`}>
                    <textarea rows={rows} onChange={handleChange} onKeyDown={handleKey} />
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={props.submit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default StoryReply