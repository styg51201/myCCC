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
        console.log(data)
        console.log(stateToHTML(convertFromRaw(story)))
        setStories(data);
    }

    useEffect(()=>{
        getData();
    }, [])

    return(
        <>
            <main className="mt-5">
                <Row className="row-cols-lg-3  row-cols-md-2 row-cols-1">
                    {stories===null ? '' : stories.map((itm, idx)=>{
                        let story = stateToHTML(convertFromRaw(JSON.parse(itm.stryContent)))
                        return <StoryCard key={`${itm.stryId}-${itm.userId}`} content={story} title={itm.stryTitle}  />
                    })}
                </Row>
                <Link to="/upload-stories">Post your story</Link>
            </main>
        </>
    )
}

export default Stories