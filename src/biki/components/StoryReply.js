import React, {useState, useEffect} from 'react'
import useReplyTextarea from '../utils/useReplyTextarea'

function StoryReply(props){
    // if(props.data) console.log(props)
    const {
        rows,
        showReplyTo,
        replyTo,
        txtContent,
        handleToggleShow,
        handleChange,
        handleKey
    } = useReplyTextarea()

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
                    <div onClick={()=>{
                        handleToggleShow(props.data.id)
                        }} 
                        role="button"
                    >
                        {showReplyTo ? 'Cancel' : 'Reply'}
                    </div>
                </div>
                <div className={`bk-reply-textarea${!showReplyTo ? ' hidden' : ''}`}>
                    <textarea 
                        rows={rows}
                        value={txtContent} 
                        onChange={(evt)=>{
                            handleChange(props.data.id, evt);
                        }} 
                        onKeyDown={handleKey}
                    ></textarea>
                    <button onClick={handleToggleShow}>Cancel</button>
                    <button onClick={()=>{
                        props.handlers.submit(replyTo, txtContent)
                    }}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default StoryReply