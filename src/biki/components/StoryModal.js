import React from 'react'

function StoryModal(props){

    if(!props.show) return null

    return (
        <>
            <div className='bk-modal-backdrop' onClick={props.onClose}></div>
            <div className='bk-modal'>
                <div className="bk-modal-content">
                    asd;lfkjqpweoij;lzkcv
                    ;alskjfpoiqjwep
                </div>
                <div className='bk-modal-footer'>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </>
    )
}

export default StoryModal