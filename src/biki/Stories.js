import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { convertFromRaw } from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';

import './css/all.scss'
import './css/stories.scss'

import StoryCard from './components/StoryCard'

function Stories(){

    const [stories, setStories] = useState(null);

    async function getData(){
        const response = await fetch('http://localhost:5500/stories')
        const data = await response.json()
        const story = JSON.parse(data[0].stryContent);

        setStories(data);
    }

    useEffect(()=>{
        getData();
    }, [])

    return(
        <>
            <main className="mt-5">
                <div className="bk-stories-container">
                    {stories===null ? '' : stories.map((itm, idx)=>{
                        let story = stateToHTML(convertFromRaw(JSON.parse(itm.stryContent)))
                        // console.log(itm)
                        return <StoryCard 
                        key={`${itm.stryId}-${itm.userId}`} 
                        content={story} 
                        title={itm.stryTitle}
                        likes={itm.stryLikes}
                        user={itm.usrId}
                        />
                    })}
                </div>
                <Link to="/upload-stories">Post your story</Link>
            </main>
        </>
    )
}

export default Stories