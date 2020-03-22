import {useState, useEffect} from 'react'

export default function useTextareaRows(){

    const [rows, setRows] = useState(1)
    const [enters, setEnters] = useState(0)

    const handleRows = (evt)=>{
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

    return {rows, handleRows, handleKey}
}