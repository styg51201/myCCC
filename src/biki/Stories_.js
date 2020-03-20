import React, { useState, useEffect, useRef } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { convertFromRaw } from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';
import {
    FiMoreHorizontal
  } from 'react-icons/fi'


import './css/all.scss'
import './css/stories.scss'

import StoryCard from './components/StoryCard'
import StoryModal from './components/StoryModal'

function Stories(){

    const [stories, setStories] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const containerRef = useRef(null);

    //for getting heights
    const [height, setHeight] = useState(0);
    const [length, setLength] = useState(0);
    const cardRefs = useRef([]);

    async function getData(){
        const response = await fetch('http://localhost:5500/stories')
        const data = await response.json()
        const story = JSON.parse(data[0].stryContent);

        for(let i = 0 ; i < data.length ; i++){
            cardRefs.current[i] = await cardRefs.current[i] || await React.createRef()
        }

        await setLength(data.length);
        await setStories(data);
    }

    useEffect(()=>{
        console.log('fetching data from server...')
        getData();
    }, [])

    //create ref for each element
    useEffect(()=>{
        for(let i = 0 ; i < length ; i++){
            cardRefs.current[i] = cardRefs.current[i] || React.createRef();
        }
    }, [length])

    //get height of each element
    useEffect(()=>{
        getHeight();
    }, [stories])

    //取得最高高度
    async function getHeight(){
        let totalHeight1 = 0, totalHeight2 = 0, totalHeight3 = 0;

        //取得第三欄的高度
        for(let i = 2 ; i < length ; i+=3){
            totalHeight3 += cardRefs.current[i].current.clientHeight;
        }
        //取得第二欄的高度
        for(let i = 1 ; i < length ; i+=3){
            totalHeight2 += cardRefs.current[i].current.clientHeight;
        }
        //取得第一欄的高度
        for(let i = 0 ; i < length ; i+=3){
            totalHeight1 += cardRefs.current[i].current.clientHeight;
        }

        //取三者最大
        let highest = Math.max(totalHeight1, totalHeight2, totalHeight3) 
        setHeight(highest + 30);
    }

    function toggleModal(){
        setModalOpen(!modalOpen);
    }
    
    function getMore(){
        
    }

    return(
        <>
            <main className="mt-5">
                <div className="bk-stories-container" 
                ref={containerRef} 
                style={{height: height}}
                >
                    {stories===null ? '' : stories.map((itm, idx)=>{
                        let story = stateToHTML(convertFromRaw(JSON.parse(itm.stryContent)))
                        return (<>
                            <div className="bk-masonry-brick" 
                                ref={cardRefs.current[idx]} 
                                key={`${itm.stryId}-${itm.userId}`} 
                            >
                                <StoryCard 
                                    content={story} 
                                    title={itm.stryTitle}
                                    likes={itm.stryLikes}
                                    user={itm.usrId}
                                    onClick={toggleModal}
                                />
                            </div>
                        </>)
                    })}
                </div>
                <button className='bk-btn-more' onClick={getMore}>
                    <FiMoreHorizontal />
                </button>
                <Link to="/upload-stories">Post your story</Link>
            </main>
            <StoryModal show={modalOpen} onClose={toggleModal} />
        </>
    )
}

export default Stories