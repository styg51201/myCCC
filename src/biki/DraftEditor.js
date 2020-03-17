import React, {useState, useEffect, useRef} from 'react'
import {Editor, EditorState, RichUtils, AtomicBlockUtils} from 'draft-js';

import Toolbar, {styleMap, getBlockType} from './components/BlockStyles/Toolbar'
// import {mediaBlockRenderer} from './components/entities/mediaBlockRenderer'

import './css/Draft.css'
import './css/draftEditor.scss'

import { connect } from 'react-redux'

function DraftEditor(){

    //initialize editor state
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [showUrlInput, setShowUrlInput] = useState(false)
    const [urlValue, setUrlValue] = useState('')
    const [uploading, setUploading] = useState(false)
    const [foldername, setFoldername] = useState('')

    const editorRef = useRef(null); //for focusing
    const imgRef = useRef(null)
    const imgFormRef = useRef(null)

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

    function  handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          onChange(newState);
          return 'handled';
        }
        return 'not-handled';
      }

      
    // renderer for Editor
    function mediaBlockRenderer(block){
        if(block.getType() === 'atomic'){
            return{
                component: Media,
                editable: false
            }
        }
        return null
    }

    //the rendered item
    const Image = props =>{
        if(!!props.src){
            return <img src={props.src} />
        }
        return null
    }
    
    //the component
    const Media = props =>{
        const entity = props.contentState.getEntity(props.block.getEntityAt(0))
        const {src} = entity.getData()
        const type = entity.getType()
    
        let media;
        if(type === 'image'){
            media = <Image src={src} />
        }
        return media
    }

    //button on click
    function confirmMedia(e){
        // e.preventDefault();
        imgRef.current.click()
    }

    function renderMedia(urlValue){
        const contentState = editorState.getCurrentContent()
        const contentStateWithEntity = contentState.createEntity(
            'image',
            'IMMUTABLE',
            {src: urlValue} //entity data
        )
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

        //update editor with image
        const newEditorState = EditorState.set(
            editorState,
            {currentContent: contentStateWithEntity}
        )
        
        //log it into the editorstate hook
        setEditorState(AtomicBlockUtils.insertAtomicBlock(
            newEditorState,
            entityKey,
            ' '
        ))
        setShowUrlInput(false)
        setUrlValue('')
    }

    async function fileOnChange(e){
        // setUploading(true)
        e.preventDefault()

        // const reader = new FileReader();

        // reader.addEventListener('load', function(evt){
        //     renderMedia(evt.target.result)
        // })
        // reader.readAsDataURL(imgRef.current.files[0]);


        const formdata = new FormData(imgFormRef.current)
        formdata.append('foldername', foldername)

        // fetch('http://localhost:5500/stories/api/editor-imgs',{
        //     method: 'POST',
        //     body: formdata,
        // })
        // .then(r=>r.json())
        // .then(data=>{
        //     console.log(data)
        //     return;
        // })

        const response = await fetch('http://localhost:5500/stories/api/editor-imgs',{
            method: 'POST',
            body: formdata,
        })

        const data = await response.json()
        console.log(data);

        await setFoldername(data.foldername)

        console.log(data.url.length)
        
        for(let i = 0 ; i < data.url.length ; i++){
            console.log(data.url[i])
            await renderMedia(data.url[i])
        }
    }

    //focus back to editor after img insert
    useEffect(()=>{
        setTimeout(()=>{
            editorRef.current.focus()
        }, 0)
    }, [urlValue])

    return(
        <>
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
            <button className="bk-submit-btn">Submit</button>
        </>
    )
}

//send editor state through props to component
const mapStateToProps = (store)=>{
    console.log("map state to props")
    return { total: store.counter }
}

export default connect(mapStateToProps)(DraftEditor)

