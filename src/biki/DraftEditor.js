import React, {useState, useEffect, useRef} from 'react'
import {Editor, EditorState, RichUtils, AtomicBlockUtils} from 'draft-js';

import Toolbar, {styleMap, getBlockType} from './components/BlockStyles/Toolbar'
// import {mediaBlockRenderer} from './components/entities/mediaBlockRenderer'

import './css/Draft.css'
import './css/draftEditor.scss'

import { connect } from 'react-redux'
import { Media } from 'react-bootstrap';

function DraftEditor(){

    //initialize editor state
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [showUrlInput, setShowUrlInput] = useState(false)
    const [urlValue, setUrlValue] = useState('')

    const editorRef = useRef(null); //for focusing

    // basically just sets state...
    const onChange = editorState =>{
        return  setEditorState(editorState);
    };

    //inline styles
    const renderInlineStyles = (e, style) =>{
        e.preventDefault()
        setEditorState(RichUtils.toggleInlineStyle(editorState, style))
    }

    const imgHandler = ()=>{
        document.querySelector('input[type="file"]').click();
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

      
    function mediaBlockRenderer(block){
        if(block.getType() === 'atomic'){
            return{
                component: Media,
                editable: false
            }
        }
        return null
    }

    const Image = props =>{
        if(!!props.src){
            return <img src={props.src} />
        }
        return null
    }
    
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

    function confirmMedia(e){
        e.preventDefault()
        const contentState = editorState.getCurrentContent()
        const urlValue = window.prompt("paste image link")
        const contentStateWithEntity = contentState.createEntity(
            'image',
            'IMMUTABLE',
            {src: urlValue}
        )
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
        const newEditorState = EditorState.set(
            editorState,
            {currentContent: contentStateWithEntity}
        )

        setEditorState(AtomicBlockUtils.insertAtomicBlock(
            newEditorState,
            entityKey,
            ' '
        ))
        setShowUrlInput(false)
        setUrlValue('', ()=>{
            setTimeout(()=>{
                editorRef.focus()
            }, 0)
        })
    }

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
                     />
                     {/* <button onClick={confirmMedia}>Click</button> */}
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