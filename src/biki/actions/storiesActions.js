export const fileState = value =>({ type: 'FILE_STATE', value: value })

export const inlineEditorState = value => ({ type: 'INLINE_EDITOR_STATE', value: value})
export const blockEditorState = value => ({ type: 'BLOCK_EDITOR_STATE', value: value })
export const mediaEditorState = value => ({ type: 'MEDIA_EDITOR_STATE', value: value })


export const uploadImg = value =>{
    return async dispatch =>{
        const formdata = new FormData(imgFormRef.current)
        formdata.append('foldername', foldername)

        const response = await fetch('http://localhost:5500/stories/api/editor-imgs',{
            method: 'POST',
            body: formdata,
        })

        const data = await response.json()
        console.log(data);
        
        for(let i = 0 ; i < data.url.length ; i++){
            await console.log(data.url[i])
            await renderMedia(data.url[i])
        }

        dispatch(fileState(data.foldername))
    }
}

export const renderMedia = value =>{

}

export const submitStory = value =>{
    return async dispatch =>{
        const contentState = await editorState.getCurrentContent()

        const response = await fetch('http://localhost:5500/stories/submit-editor', {
            method: 'post',
            body: JSON.stringify({
                content: convertToRaw(contentState)
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
        const data = await response.json()
        await console.log(data)
    }
}