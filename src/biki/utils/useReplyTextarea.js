import {useState, useEffect} from 'react'

export default function useReplyTextarea(){

    const [rows, setRows] = useState(1)
    const [enters, setEnters] = useState(0)
    const [txtContent, setTxtContent] = useState('')

    const [showReplyTo, setShowReplyTo] = useState(false)
    const [replyTo, setReplyTo] = useState(null)

    useEffect(()=>{
        console.log("replying to:" + replyTo)
    }, [replyTo])


    const handleChange = (data, evt)=>{
        setTxtContent(evt.target.value)
        if(data !== replyTo){
            setReplyTo(data) // <----- 這裏，為何同一個區塊的不能執行兩次？
            console.log("not the same reply" + data)
        }
        if(evt.target.value.match(/\n/gm)){
            setEnters(evt.target.value.match(/\n/gm).length)
            if(rows < 4){
                setRows(evt.target.value.match(/\n/gm).length + 1)
            }
        }
    }

    const handleKey = (evt)=>{
        if(evt.key === 'Backspace' && enters <= 4 && rows > 1){
            setRows(rows - 1)
        }
    }

    const handleToggleShow = (props)=>{
        if(showReplyTo) setTxtContent({})
        setShowReplyTo(!showReplyTo)
    }

    return {rows, txtContent, showReplyTo, replyTo, 
        handleChange, handleKey, handleToggleShow}
}