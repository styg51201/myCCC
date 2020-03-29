import React, {useState, useEffect, useRef} from 'react'
import {withRouter} from 'react-router-dom'
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'

import Toolbar, {styleMap, getBlockType} from './EditorComponents/Toolbar'
// import TagBlock from './EditorComponents/TagBlock'
import TagInput from './TagInput'

//utils for media rendering
import { renderMedia, mediaBlockRenderer } from './entities/mediaBlockRenderer'


function DraftEditorEdit(props){

    // console.log(props.editorState);
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    // const [editorContent, setEditorContent] = useState(null);
    const [urlValue, setUrlValue] = useState('')
    const [foldername, setFoldername] = useState('')
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    // const [message, setMessage] = useState('')
    const [readOnly, setReadOnly] = useState(false)
    const [functionSubmit, setFunctionSubmit] = useState(null)
    const [usrId, setUsrId] = useState(null)
    const [id, setId] = useState(null)
    const [buttons, setButtons] = useState(null)

    const editorRef = useRef(null); //for focusing
    const imgRef = useRef(null)
    const imgFormRef = useRef(null)

    useEffect(()=>{
        setUsrId(localStorage.getItem('userId'))
        if(props.match) setId(props.match.params.id)
    }, [])

    useEffect(()=>{
        
        console.log(props.type)
        switch(props.type){
            case 'story':
                setButtons(<button className="bk-btn-black" onClick={updateStory}>更新</button>)
                break;
            case 'draft':
                setButtons(
                    <>
                    <button className="bk-btn-black" onClick={uploadDraft}>上傳</button>
                    <button className="bk-btn-black-bordered" onClick={saveDraft}>儲存草稿</button>
                    </>
                )
                break;
        }
    }, [props.type])

    useEffect(()=>{
        if(props.content){
            setEditorState(EditorState.createWithContent(props.content))
            setTitle(props.title)
            setTags(props.tags)
        }
    }, [props.content])

    const handleTitle = (e)=>{
        // console.log(e.target.value)
        setTitle(e.target.value)
    }

    const selectedTags = tags => {
        setTags(tags)
    };
    
    // basically just sets state...
    const onChange = editorState =>{
        return setEditorState(editorState);
    };

    useEffect(()=>{
        let s = editorState.getCurrentContent()
        // console.log(convertToRaw(s))
    },[editorState])

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

    //檢查內容（在submit之前）
    const checkContent = ()=>{
        const contentState = editorState.getCurrentContent()

        //判斷是否有內容
        let c = convertToRaw(contentState)
        let str = ''
        let flag = false
        console.log(c)
        for(let i = 0 ; i < c.blocks.length ; i++){
            // console.log(c.blocks)
            str += c.blocks[i].text
            if(c.blocks[i].type === 'atomic') return flag = true
        }
        if(!str.trim().length && !flag){
            // console.log(title)
            // console.log("no content")
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                text: '請填寫內容',
                showConfirmButton: true,
                confirmButtonText: '確定',
                buttonsStyling: false,
                position:'center',
                customClass: {
                    popup: 'bk-swl-popup',
                    icon: 'bk-swl-icon',
                    content: 'bk-swl-content',
                    confirmButton: 'bk-swl-confirm-button',
                  }
              })  
            return false;
        }else if(title === '' || !title.trim().length){
            // console.log("no title")
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                text: '請填寫標題',
                showConfirmButton: true,
                confirmButtonText: '確定',
                position:'center',
                buttonsStyling: false,
                customClass: {
                    popup: 'bk-swl-popup',
                    icon: 'bk-swl-icon',
                    content: 'bk-swl-content',
                    confirmButton: 'bk-swl-confirm-button',
                  }
              })  
            return false;
        }

        console.log("you may pass")
        return true;
    }

    //update STORY
    async function updateStory(){

        if(!checkContent()) return;
        const contentState = await editorState.getCurrentContent()

        //fetch
        const response = await fetch(`http://localhost:5500/stories/member/story/${id}?usrId=${usrId}`, {
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
        
        setReadOnly(true)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: '更新成功！',
            confirmButtonText: '確定',
            showConfirmButton: true,
            // timer: 1500,
            position:'center',
            buttonsStyling: false,
            customClass: {
                popup: 'bk-swl-popup',
                icon: 'bk-swl-icon',
                content: 'bk-swl-content',
              }
          }) 
          .then(r=>{
            props.history.push('/member/stories')
          })
        return;
    }

    //save DRAFT to STORY
    async function uploadDraft(){

        if(!checkContent()) return;
        const contentState = editorState.getCurrentContent()

        const response = await fetch(`http://localhost:5500/stories/member/draft/submit-draft/${props.match.params.id}?usrId=${localStorage.getItem('userId')}`,{
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
        const r = await fetch(`http://localhost:5500/stories/member/upload?usrId=${localStorage.getItem('userId')}`,{
            method: 'POST',
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
        const d = await r.json()

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: '上傳成功',
            showConfirmButton: false,
            timer: 1500,
            position:'center',
            buttonsStyling: false,
            customClass: {
                popup: 'bk-swl-popup',
                icon: 'bk-swl-icon',
                content: 'bk-swl-content',
              }
            })  
            .then(r=>{
                props.history.push('/member/stories')
            })

        console.log(r)

    }

    //save draft
    async function saveDraft(){
        if(!saveDraft) return;
        const contentState = editorState.getCurrentContent()
        console.log(convertToRaw(contentState))

        const response = await fetch(`http://localhost:5500/stories/member/draft/save-draft/${id}?usrId=${usrId}`, {
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
        // setMessage('已儲存至草稿')

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: '儲存成功',
            showConfirmButton: false,
            buttonsStyling: false,
            timer: 1500,
            position:'center',
            customClass: {
                popup: 'bk-swl-popup',
                icon: 'bk-swl-icon',
                content: 'bk-swl-content',
              }
            })  
        setTimeout(()=>{
            props.history.push('/member/stories/drafts')
        }, 1500)
    }

    //focus back to editor after img insert
    useEffect(()=>{
        if(editorRef) editorRef.current.focus()
    }, [urlValue])

    return(
        <>
            {/* <div className='bk-editor-message'>{message ? message : ''}</div> */}
            <div className="bk-form-control">
                <label>標題</label>
                <input disabled={readOnly} type="text" onChange={(evt)=>{
                    handleTitle(evt)
                }} defaultValue={title} />
            </div>
            {/* <div className="bk-form-control"> */}
                <label>標籤</label>
                <TagInput selectedTags={selectedTags} tags={tags} />
            {/* </div> */}
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
                    // placeholder=""
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange} //update state on change
                    readOnly={readOnly}
                    customStyleMap= {styleMap} //custom inline styles
                    blockStyleFn={getBlockType} //custom block type settings with class
                    ref={editorRef}
                    blockRendererFn={mediaBlockRenderer}
                    />
                </div>
            </div>
            <div className='bk-btn-group'>
                {props.type === 'story' &&
                    <button className="bk-btn-black" onClick={updateStory}>更新</button>
                }
                {props.type === 'draft' &&
                    <>
                        <button className="bk-btn-black" onClick={uploadDraft}>上傳</button>
                        <button className="bk-btn-black-bordered" onClick={saveDraft}>儲存草稿</button>
                    </>
                }
            </div>
        </>
    )
}

export default withRouter(DraftEditorEdit)

