import {useState} from 'react'

export default function useReplyTextarea(){

    const [rows, setRows] = useState(1)
    const [enters, setEnters] = useState(0)
    const [txtContent, setTxtContent] = useState('')

    const handleChange = (evt)=>{
        // console.log(evt.target.value)
        setTxtContent(evt.target.value)
        if(evt.target.value.match(/\n/gm)){
            setEnters(evt.target.value.match(/\n/gm).length)
            if(rows < 5){
                console.log('add')
                setRows(evt.target.value.match(/\n/gm).length + 1)
            }
        }
    }

    const handleKey = (evt)=>{
        if(evt.key === 'Backspace' && enters <= 5 && rows > 1){
            setRows(rows - 1)
        }
    }

    return {rows, txtContent, handleChange, handleKey}
}