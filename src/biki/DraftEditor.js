import React, {useState} from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js';

import {
    FiBold,
    FiItalic,

  } from 'react-icons/fi'

import '/Users/biki/Desktop/ccc/node_modules/draft-js/dist/Draft.css'
import './css/draftEditor.scss'

function DraftEditor(){

    //initialize editor state
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    
    const inlineStyles = [
        {
            label: "bold",
            style: "BOLD",
            icon: <FiBold />
        },{
            label: "italic",
            style: "ITALIC",
            icon: <FiItalic />
        }
    ]

    const renderInlineStyles = (e, style) =>{
        e.preventDefault()
        setEditorState(RichUtils.toggleInlineStyle(editorState, style))
        document.querySelector(".DraftEditor-root").focus();
    }

    const onChange = editorState =>{
        return  setEditorState(editorState);
    };

    // const _onBoldClick = ()=>{
    //     onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    //   }
    // const _onItalicClick = ()=>{
    //     onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
    // }

    const isActive = style =>{
        const currentStyle = editorState.getCurrentInlineStyle();
        return currentStyle.has(style)
    }

    function  handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          onChange(newState);
          return 'handled';
        }
        return 'not-handled';
      }

    return(
        <>
            <div className="bk-draft-editor-container">
                <div>
                    <div className="bk-draft-toolbar">
                        {/* <button onClick={_onBoldClick}><FiBold /></button>
                        <button onClick={_onItalicClick}><FiItalic /></button> */}

                        {inlineStyles.map((item, idx)=>{
                            return (
                            <button 
                            className={ isActive(item.style) ? 'active' : "" }
                            key={`${item.label}-${idx}`} 
                            onClick = {(e)=>renderInlineStyles(e, item.style)}
                            >
                                {item.icon}
                            </button>
                            )
                        })}

                    </div>
                    <Editor
                    placeholder="hello"
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange} //update state on change
                    />
                </div>
            </div>
            <button class="bk-submit-btn">Submit</button>
        </>
    )

}

export default DraftEditor