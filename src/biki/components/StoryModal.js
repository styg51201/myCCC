import React, {useEffect} from 'react'

function StoryModal(props){

    if(!props.show) return null
    if(props.data.stryContent){
        console.log("has data")

        let data = props.data

        return (
            <>
                <div className='bk-modal-backdrop' onClick={props.onClose}></div>
                <div className='bk-modal'>
                    <div className="bk-modal-replies">

                    </div>
                    <div className="bk-modal-content">
                        <h3>{data.stryTitle}</h3>
                        <div dangerouslySetInnerHTML={{__html: data.stryContent}}></div>
                    </div>
                    <div className='bk-modal-footer'>
                        <button onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </>
        )
    }else{
        return ''
    }
}

export default StoryModal