import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './css/all.scss'
import './css/stories.scss'

import StoryCard from './components/StoryCard'

function Stories(){
    return(
        <>
            <main className="mt-5">
                <Row className="row-cols-lg-3  row-cols-md-2 row-cols-1">
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />

                </Row>
            </main>
        </>
    )
}

export default Stories