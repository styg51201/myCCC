import React, {useState, useEffect, useRef} from 'react'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

import Toolbar, {styleMap, getBlockType} from './BlockStyles/Toolbar'

//utils for media rendering
import { renderMedia, mediaBlockRenderer } from './entities/mediaBlockRenderer'

//utils for debouncing
import useDebounce from '../utils/useDebounce'

//css
import '../css/Draft.css'
import '../css/storyEditor.scss'

import { connect } from 'react-redux'

function DraftEditor(){

    //initialize editor state
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [showUrlInput, setShowUrlInput] = useState(false)
    const [urlValue, setUrlValue] = useState('')
    const [uploading, setUploading] = useState(false)
    const [foldername, setFoldername] = useState('')
    const [title, setTitle] = useState('')
    const [id, setId] = useState(0)
    const [story, setStory] = useState([]); //for debouncing

    const editorRef = useRef(null); //for focusing
    const imgRef = useRef(null)
    const imgFormRef = useRef(null)

    //進來直接存入db
    useEffect(()=>{
        setStory([title, editorState])
        submitData();
    }, [])

    useEffect(()=>{
        setStory([title, editorState])
    }, [editorState, title])

    // editorState每更動，隔三秒存一次
    const dataDebounced = useDebounce(story, 3000)

    useEffect(()=>{
        saveData()
    }, [dataDebounced])

    async function saveData(){
        const contentState = await editorState.getCurrentContent()
        const response = await fetch(`http://localhost:5500/stories/user-editor/save-draft/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                content: convertToRaw(contentState),
                title: title
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
        const data = await response.json()
        await console.log(data)
    }

    async function uploadStory(){
        const contentState = await editorState.getCurrentContent()
        const response = await fetch(`http://localhost:5500/stories/user-editor/upload-story/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                content: convertToRaw(contentState),
                title: title
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
        const data = await response.json()
        await console.log(data)
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

    const handleTitle = (e)=>{
        // console.log(e.target.value)
        setTitle(e.target.value)
    }

    async function submitData(){
        const contentState = await editorState.getCurrentContent()

        const response = await fetch('http://localhost:5500/stories/user-editor', {
            method: 'post',
            body: JSON.stringify({
                content: convertToRaw(contentState),
                title: title
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
        const data = await response.json()
        await console.log(data)
        setId(data.data)
        console.log("submitted data!")
    }

    //focus back to editor after img insert
    useEffect(()=>{
        setTimeout(()=>{
            editorRef.current.focus()
        }, 0)
    }, [urlValue])

    return(
        <>
            <div className="bk-form-control">
                <label>標題</label>
                <input type="text" onChange={handleTitle} />
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
                    readOnly={false} //should be true before editing
                    customStyleMap= {styleMap} //custom inline styles
                    blockStyleFn={getBlockType} //custom block type settings with class
                    ref={editorRef}
                    blockRendererFn={mediaBlockRenderer}
                    />
                </div>
            </div>
            <div className='bk-btn-group'>
                <button className="bk-btn-black" onClick={uploadStory}>上傳</button>
                <button className="bk-btn-black-bordered" onClick={saveData}>儲存草稿</button>
            </div>
        </>
    )
}

//send editor state through props to component
const mapStateToProps = (store)=>{
    console.log("map state to props")
    return { total: store.counter }
}

export default connect(mapStateToProps)(DraftEditor)

