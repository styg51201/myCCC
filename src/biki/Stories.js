import React, { useState, useEffect, useRef, useCallback } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { convertFromRaw } from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';
import {
    FiMoreHorizontal
  } from 'react-icons/fi'

import useStorySearch from './utils/useStorySearch'


import './css/all.scss'
import './css/stories.scss'

import StoryCard from './components/StoryCard'
// import Masonry from 'react-masonry-css'

import Masonry from 'react-masonry-component';


function Stories(){

    const [pageNumber, setPageNumber] = useState(1)

    const {
        loading,
        hasMore,
        stories,
        error
    } = useStorySearch(pageNumber)

    const observer = useRef(null)

    const lastStoryElementRef = useCallback(node => {
        if(loading) return
        // console.log(node)
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore){
                setPageNumber(prevPageNumber => prevPageNumber + 1)
                console.log('get stuff')
            }
        })
        if(node) observer.current.observe(node)
    })

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
      };



    const items =  stories.map((itm, idx)=>{
        let story = stateToHTML(convertFromRaw(JSON.parse(itm.stryContent)))

        if(stories.length === idx+1){
            return (<>
                <div className="bk-masonry-brick" 
                    ref={lastStoryElementRef} 
                    key={`${itm.stryId}-${itm.userId}`} 
                >
                    <StoryCard 
                        content={story} 
                        title={itm.stryTitle}
                        likes={itm.stryLikes}
                        user={itm.usrId}
                    />
                </div>
            </>)
        }else{
            return (<>
                <div className="bk-masonry-brick" 
                    key={`${itm.stryId}-${itm.userId}`} 
                >
                    <StoryCard 
                        content={story} 
                        title={itm.stryTitle}
                        likes={itm.stryLikes}
                        user={itm.usrId}
                    />
                </div>
            </>)
        }
    })

    return(
        <>
            <main className="mt-5">
                <div className="bk-stories-container">
                    {/* <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="bk-masonry-grid"
                        columnClassName="bk-masonry-column"
                    > */}
                    <Masonry
                        className={'my-gallery-class'} // default ''
                        elementType={'div'} // default 'div'
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                       {items}
                    </Masonry>
                </div>
                <button className='bk-btn-more' onClick={()=>{}}>
                    <FiMoreHorizontal />
                </button>
                <Link to="/upload-stories">Post your story</Link>
            </main>
        </>
    )
}

export default Stories