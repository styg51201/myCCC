import React, {useState} from 'react'

export default function useTags(){

    const [tags, setTags] = useState([
        { id: "Thailand", text: "Thailand" },
        { id: "India", text: "India" }
     ])

    const [suggestions, setSuggestions] = useState([
        { id: 'USA', text: 'USA' },
        { id: 'Germany', text: 'Germany' },
        { id: 'Austria', text: 'Austria' },
        { id: 'Costa Rica', text: 'Costa Rica' },
        { id: 'Sri Lanka', text: 'Sri Lanka' },
        { id: 'Thailand', text: 'Thailand' }
     ])

    const handleDelete = (i)=>{
        setTags(tags.filter((tag, index) => index !== i));
    }

    const handleAddition = (tag)=>{
        setTags(prevTags=>{
            return [...prevTags, tag]
        })
    }

    const handleDrag = (tag, currPos, newPos)=>{
        const tgs = [...tags];
        const newTags = tgs.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags)
    }

    return {handleDelete, handleAddition, handleDrag, tags, suggestions}
}