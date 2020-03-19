import React from 'react'

import {
    FiBold,
    FiItalic,
    FiUnderline,
    FiAlignCenter,
    FiAlignLeft,
    FiAlignRight,
    FiImage
  } from 'react-icons/fi'


export const inlineStyles = [
    { label: "bold", style: "BOLD", icon: <FiBold />},
    { label: "italic", style: "ITALIC", icon: <FiItalic />},
    { label: 'underline', style: 'UNDERLINE', icon: <FiUnderline />}

]

export const blockStyles = [
    { label: 'align-left', style: "ALIGNLEFT", icon: <FiAlignLeft />},
    { label: 'align-center', style: "ALIGNCENTER", icon: <FiAlignCenter />},
    { label: 'align-right', style: "ALIGNRIGHT", icon: <FiAlignRight />}

]

export const styleMap = {
    // 'ALIGNCENTER':{ display: 'block', textAlign: 'center'},
    // 'ALIGNRIGHT':{ display: 'block', textAlign: 'right'},
    // 'ALIGNLEFT':{ display: 'block', textAlign: 'left'}
}

export function getBlockType(block){
    switch(block.getType()){
        case 'ALIGNCENTER':
            return 'align-center'
        case 'ALIGNLEFT':
            return 'align-left'
        case 'ALIGNRIGHT':
            return 'align-right'
        default:
            return null
    }
}

function Toolbar(props){

    const {editorState} = props

    const isActive = style =>{
        const currentStyle = editorState.getCurrentInlineStyle();
        return currentStyle.has(style)
    }

    //settings for block type elements
    const selection = editorState.getSelection();

    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

    return(
        <>
            <div className="bk-draft-toolbar">

            {/* render inline styles buttons */}
                {inlineStyles.map((item, idx)=>{
                    return (
                    <button 
                    className={ isActive(item.style) ? 'active' : "" }
                    key={`${item.label}-${idx}`} 
                    onClick = {(e)=>{
                        props.renderInlineStyles(e, item.style)
                    }}
                    >
                        {item.icon || item.label}
                    </button>
                    )
                })}

                <button onClick={props.confirmMedia}>
                    <FiImage />
                    <form name="imgForm" ref={props.imgFormRef}>
                    <input name="image" type="file" ref={props.imgRef} onChange={props.fileOnChange} hidden multiple accept="image/*" />
                    </form>
                </button>

            {/* render block styles buttons */}

                {blockStyles.map((item, idx)=>{
                    return (
                    <button 
                    className={ item.style === blockType ? 'active' : "" }
                    onToggle={props.onToggle}
                    key={`${item.label}-${idx}`} 
                    onClick = {(e)=>{
                        e.preventDefault()
                        props.onToggle(item.style)
                    }}
                    >
                        {item.icon || item.label}
                    </button>
                    )
                })}
            </div>
        </>
    )
}

export default Toolbar

