import React from "react";
import { EditorState, convertToRaw, AtomicBlockUtils } from "draft-js";

// renderer for Editor
export function mediaBlockRenderer(block){

    if(block.getType() === 'atomic'){
        return{
            component: Media,
            editable: false
        }
    }
    return null
}

//the rendered item
// const Image = props =>{
//     if(!!props.src){
//         return <img src={props.src} />
//     }
//     return null
// }

//the component
const Media = props =>{

    // console.log("entity key:", props.block.getEntityAt(0))
    console.log('Media props: ',props)

    const entity = props.contentState.getEntity(props.block.getEntityAt(0))
    const {src} = entity.getData()
    const type = entity.getType()

    let media;
    if(type === 'image' && src){
        media = <img src={src} />
    }
    return media
}


export async function renderMedia(urlValue, editorState, setEditorState, setUrlValue){

    console.log('rendering media for', urlValue)

    const contentState = await editorState.getCurrentContent()
    const contentStateWithEntity = await contentState.createEntity(
        'image',
        'IMMUTABLE',
        {src: urlValue} //entity data
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

    //update editor with image
    // const newEditorState = EditorState.set(
    //     editorState,
    //     {currentContent: contentStateWithEntity}
    // )
    
    //log it into the editorstate hook
    setEditorState(prevEditorState=>{
        console.log('prevEditorState', convertToRaw(prevEditorState.getCurrentContent()))

        return AtomicBlockUtils.insertAtomicBlock(
            prevEditorState,
            entityKey,
            ' '
        )
    })
    setUrlValue('')
    console.log('done')

}