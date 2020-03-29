import React, {useState, useEffect, useRef} from 'react'
import {withRouter} from 'react-router-dom'
import {stateToHTML} from 'draft-js-export-html';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import Swal from 'sweetalert2/dist/sweetalert2'

import Toolbar, {styleMap, getBlockType} from './EditorComponents/Toolbar'
// import TagBlock from './EditorComponents/TagBlock'
import TagInput from './TagInput'

//utils for media rendering
import { renderMedia, mediaBlockRenderer } from './entities/mediaBlockRenderer'

//utils for debouncing
import useDebounce from '../utils/useDebounce'

//css
import '../css/Draft.css'
import '../css/storyEditor.scss'

function DraftEditor(props){

    // console.log(props)

    //initialize editor state
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [editorContent, setEditorContent] = useState(null);
    const [saveDraft, setSaveDraft] = useState(false)
    const [draftSaved, setDraftSaved] = useState(false)
    const [urlValue, setUrlValue] = useState('')
    // const [uploading, setUploading] = useState(false)
    const [foldername, setFoldername] = useState('')
    const [title, setTitle] = useState('')
    const [id, setId] = useState(0)
    const [story, setStory] = useState([]) //for debouncing & checking content
    const [tags, setTags] = useState([])
    const [message, setMessage] = useState('')
    const [usrId, setUsrId] = useState(localStorage.getItem('userId'))

    const editorRef = useRef(null); //for focusing
    const imgRef = useRef(null)
    const imgFormRef = useRef(null)
    const tagsRef = useRef(null)

    //set editor content when Editor has content
    useEffect(()=>{
        let content = editorState.getCurrentContent()
        let newContent = convertToRaw(content);
        if(newContent.blocks.length > 1 || newContent.blocks[0].text !== ''){
            setEditorContent(newContent)
        }
    }, [editorState])

    //set story when Story has content, and initialize saveDraft
    useEffect(()=>{
        if(editorContent || title.length || tags.length){
            // console.log(editorContent)
            setStory([{'content': editorContent}, {'title': title}, {'tags': tags}])
            setSaveDraft(true)
            // setMessage('已儲存至草稿')
        }
    }, [editorContent, title, tags])

    //auto save when Story has content
    const {debouncedValue, msg} = useDebounce(story, 1000, '正在儲存至草稿...', saveDraft)

    useEffect(()=>{
        if(story.length && draftSaved && saveDraft){
            // console.log(saveDraft)
            console.log('autosaving...')
            saveData()
        }
    }, [debouncedValue])

    useEffect(()=>{
        if(msg) setMessage(msg)
    }, [msg])

    useEffect(()=>{
        if(saveDraft){
            console.log('submitting draft...')
            submitDraft()
            setMessage('已儲存至草稿')
        }
    }, [saveDraft])

    const handleTitle = (e)=>{
        // console.log(e.target.value)
        setTitle(e.target.value)
    }

    const selectedTags = tags => {
        setTags(tags)
    };
    
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
            await renderMedia(data.url[i], editorState, setEditorState, setUrlValue)
        }
    }


    //first submit to draft
    async function submitDraft(){
        console.log('initiating draft...')

        const contentState = await editorState.getCurrentContent()

        const response = await fetch(`http://localhost:5500/stories/member/initiate-draft?usrId=${usrId}`, {
            method: 'post',
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
        await setId(data.data)
        await setDraftSaved(true)
    }

    //autosave to draft
    async function saveData(){
        if(!saveDraft) return;
        const contentState = await editorState.getCurrentContent()
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
        await console.log(data)
        setMessage('已儲存至草稿')
    }

    const checkContent = ()=>{
        const contentState = editorState.getCurrentContent()

        //判斷是否有內容
        let c = convertToRaw(contentState)
        let str = ''
        let flag = false
        for(let i = 0 ; i < c.blocks.length ; i++){
            // console.log(c.blocks)
            str += c.blocks[i].text
            if(c.blocks[i].type === 'atomic') flag = true
        }
        if(!str.trim().length && !flag){
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                text: '請填寫內容',
                confirmButtonText: '確定',
                buttonsStyling: false,
                showConfirmButton: true,
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
                confirmButtonText: '確定',
                showConfirmButton: true,
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
        }

        console.log("you may pass")
        return true;
    }

    //final submit
    async function uploadStory(){

        if(!checkContent()) return;

        const contentState = await editorState.getCurrentContent()

        //fetch
        const response = await fetch(`http://localhost:5500/stories/member/upload?usrId=${usrId}`, {
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
        const data = await response.json()
        await console.log(data)
        await updateDraftAfterSubmit()
        await setSaveDraft(false)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: '上傳成功',
            confirmButtonText: '確定',
            showConfirmButton: true,
            buttonsStyling: false,
            // timer: 1500,
            position:'center',
            customClass: {
                popup: 'bk-swl-popup',
                icon: 'bk-swl-icon',
                content: 'bk-swl-content',
              }
          })
          .then(r=>{
            props.history.push('/stories')
          })
        return;
    }

    //final submit -> update draft to submitted
    async function updateDraftAfterSubmit(){
        const response = await fetch(`http://localhost:5500/stories/member/draft/submit-draft/${id}?usrId=${usrId}`, {
            method: 'PATCH',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
        const data = await response.json()
        await console.log(data)
    }

    const btnClickSave = ()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: '儲存成功',
            confirmButtonText: '確定',
            showConfirmButton: true,
            buttonsStyling: false,
            // timer: 1500,
            position:'center',
            customClass: {
                popup: 'bk-swl-popup',
                icon: 'bk-swl-icon',
                content: 'bk-swl-content',
              }
          })  
          .then(result=>{
            props.history.push('/member/stories/drafts')
            console.log(result)
          })
    }

    //focus back to editor after img insert
    useEffect(()=>{
        setTimeout(()=>{
            editorRef.current.focus()
        }, 0)
    }, [urlValue])

    return(
        <>
            <div className='bk-editor-message'>{message ? message : ''}</div>
            <div className="bk-form-control">
                <label>標題</label>
                <input type="text" onChange={handleTitle} />
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
                <button className="bk-btn-black-bordered" onClick={()=>{
                    saveData();
                    btnClickSave();
                }}>儲存草稿</button>
            </div>
        </>
    )
}

export default withRouter(DraftEditor)

