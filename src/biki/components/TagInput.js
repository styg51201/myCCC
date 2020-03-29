import React, {useState, useEffect} from "react"

import {
    FiX
  } from 'react-icons/fi'


function TagInput(props){

    const [tags, setTags] = useState([]);

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value])
            event.target.value = "";
        }
    };

    const removeTags = index =>{
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    }

    useEffect(()=>{
        if(props.tags){
            setTags(props.tags)
        }
    }, [props.tags])

    return (
        <div className="bk-tags-input">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>
                        <span>{tag}</span>
                        <FiX onClick={() => removeTags(index)} className='bk-close' />
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="按 Enter 鍵加入新標籤"
            />
        </div>
    );
};

export default TagInput