import {Editor, EditorState, RichUtils, AtomicBlockUtils} from 'draft-js';


export const editor = (state = { editorState: EditorState.createEmpty()} , action) =>{
    switch(action.type){
        case 'INLINE_EDITOR_STATE':
            return { ...state, editorState : RichUtils.toggleInlineStyle(action.editorState, action.style) }
        case 'BLOCK_EDITOR_STATE':
            return { ...state, editorState : RichUtils.toggleBlockType(editorState, block) }
        case 'MEDIA_EDITOR_STATE':
            const contentState = editorState.getCurrentContent()
            const contentStateWithEntity = contentState.createEntity(
                'image',
                'IMMUTABLE',
                {src: urlValue} //entity data
            )
            const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
            const newEditorState = EditorState.set(
                editorState,
                {currentContent: contentStateWithEntity}
            )
            return { editorState :  AtomicBlockUtils.insertAtomicBlock(
                newEditorState,
                entityKey,
                ' '
            )}
    }
}

const editorFile = (state = '', action)=>{
    switch(action.type){
        case 'FILE_ON_CHANGE':
            return action.value
    }
}