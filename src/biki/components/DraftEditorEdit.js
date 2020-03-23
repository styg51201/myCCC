import React, {useState, useEffect, useRef} from 'react'
import {withRouter} from 'react-router-dom'
import {stateToHTML} from 'draft-js-export-html';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import axios from 'axios'

import Toolbar, {styleMap, getBlockType} from './EditorComponents/Toolbar'
import TagBlock from './EditorComponents/TagBlock'

//utils for media rendering
import { renderMedia, mediaBlockRenderer } from './entities/mediaBlockRenderer'


function DraftEditorEdit(props){

    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [editorContent, setEditorContent] = useState(null);
    const [urlValue, setUrlValue] = useState('')
    const [foldername, setFoldername] = useState('')
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [message, setMessage] = useState('')


    const editorRef = useRef(null); //for focusing
    const imgRef = useRef(null)
    const imgFormRef = useRef(null)

    useEffect(()=>{
        // console.log(props.location.search)
        if(!props.location) return;
        let url = `http://localhost:5500/stories/member/story${props.location.search}`

        axios.get(url)
        .then(r=>{
            setTitle(r.data.stryTitle)
            setTags(JSON.parse(r.data.stryTags))
            return convertFromRaw(JSON.parse(r.data.stryContent))
        })
        .then(content=>{
            setEditorState(EditorState.createWithContent(content));    
        })
    }, [])


    //set editor content when Editor has content
    useEffect(()=>{
        let content = editorState.getCurrentContent()
        let newContent = convertToRaw(content);

        if(newContent.blocks.length > 1 || newContent.blocks[0].text !== ''){
            setEditorContent(newContent)
        }
    }, [editorState])

    const handleTitle = (e)=>{
        // console.log(e.target.value)
        setTitle(e.target.value)
    }

    const handleTags = (e)=>{
        // console.log(e.target.value.split(' '))
        setTags(e.target.value.split(' '))
    }
    
    // basically just sets state...
    const onChange = editorState =>{
        return  setEditorState(editorState);
    };

    //inline styles
    const renderInlineStyles = (e, style) =>{
        e.preventDefault()
        setEditorState(RichUtils.toggleInlineStyle(editorState, style))
    }

    //block styles, eg h1, h2, block quote...etc.
    const toggleBlockType = block =>{
        setEditorState(RichUtils.toggleBlockType(editorState, block))
    }

    //keyboard shortcuts?
    function  handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          onChange(newState);
          return 'handled';
        }
        return 'not-handled';
    }
      
    //button on click
    function confirmMedia(e){
        imgRef.current.click()
    }

    //when file submitted, upload to public & render element in Editor
    async function fileOnChange(e){
        // setUploading(true)
        e.preventDefault()

        const formdata = new FormData(imgFormRef.current)
        formdata.append('foldername', foldername)

        const response = await fetch('http://localhost:5500/stories/api/editor-imgs',{
            method: 'POST',
            body: formdata,
        })

        const data = await response.json()
        console.log(data);

        await setFoldername(data.foldername)
        
        for(let i = 0 ; i < data.url.length ; i++){
            await console.log(data.url[i])
            await renderMedia(data.url[i], editorState, setEditorState, setUrlValue)
        }
    }

    //final submit
    async function updateStory(){

        const contentState = await editorState.getCurrentContent()

        //判斷是否有內容
        let c = convertToRaw(contentState)
        let str = ''
        let flag = false
        for(let i = 0 ; i < c.blocks.length ; i++){
            // console.log(c.blocks)
            str += c.blocks[i].text
            if(c.blocks[i].type === 'atomic') flag = true
        }

        console.log(str);

        if(!str.trim().length && !flag){
            console.log("no content")
            alert('沒有內容不能送出喔')
            return;
        }else if(title === '' || !title.trim().length){
            console.log("no title")
            alert('請填寫標題喔')
            return;
        }

        console.log("you may pass")

        //fetch
        const response = await fetch(`http://localhost:5500/stories/member/story${props.location.search}`, {
            method: 'PATCH',
            body: JSON.stringify({
                content: convertToRaw(contentState),
                title: title,
                tags: tags
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
        const data = await response.json()
        await console.log(data)

        alert('上傳成功！')
        props.history.push('/stories')
        return;
    }

    //focus back to editor after img insert
    useEffect(()=>{
        if(editorRef) editorRef.current.focus()
    }, [urlValue])

    return(
        <>
            <div className='bk-editor-message'>{message ? message : ''}</div>
            <div className="bk-form-control">
                <label>標題</label>
                <input type="text" onChange={handleTitle} defaultValue={title} />
            </div>
            <div className="bk-form-control">
                <div className="bk-editor-tags">{!tags ? '' : tags.map((v, i)=>{
                    if(v !== ''){
                        return <TagBlock tag={v} key={`${v}-${i}`} />
                    }
                })}</div>
                <label>標籤</label>
                <input type="text" onChange={handleTags} defaultValue={tags ? tags.join(',') : 'nope'} />
            </div>
            <div className="bk-draft-editor-container">
                <div>
                    <Toolbar
                    renderInlineStyles={renderInlineStyles}
                    editorState={editorState}
                    onToggle={toggleBlockType}
                    confirmMedia={confirmMedia}
                    imgRef={imgRef}
                    fileOnChange={fileOnChange}
                    imgFormRef={imgFormRef}
                     />
                    <Editor
                    placeholder="hello"
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange} //update state on change
                    customStyleMap= {styleMap} //custom inline styles
                    blockStyleFn={getBlockType} //custom block type settings with class
                    ref={editorRef}
                    blockRendererFn={mediaBlockRenderer}
                    />
                </div>
            </div>
            <div className='bk-btn-group'>
                <button className="bk-btn-black" onClick={updateStory}>更新</button>
            </div>
        </>
    )
}

export default withRouter(DraftEditorEdit)

