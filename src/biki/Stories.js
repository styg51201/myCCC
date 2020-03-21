import React, { useState, useEffect, useRef, useCallback } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import { convertFromRaw } from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';
import {
    FiMoreHorizontal,
    FiChevronDown
  } from 'react-icons/fi'

import useStorySearch from './utils/useStorySearch'


// import './css/all.scss'
import './css/stories.scss'

import StoryCard from './components/StoryCard'
import Masonry from 'react-masonry-component';


function Stories(props){

    const [pageNumber, setPageNumber] = useState(1)
    // const [showBtn, setShowBtn] = useState(false)

    useEffect(()=>{
        console.log(props)
    },[])

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
                //滑動一次需要手動增加頁面
                if(pageNumber%2 !== 0){
                    console.log(pageNumber)
                    console.log('get stuff')
                    setPageNumber(prevPageNumber => prevPageNumber + 1)
                }
            }
        })
        if(node) observer.current.observe(node)
    })

    const handleButtonMore = ()=>{
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    }

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
                        data={itm}
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
                        data={itm}
                    />
                </div>
            </>)
        }
    })

    return(
        <>
        <div>排序 <FiChevronDown /></div>
            <main className="mt-5">
            <Link to="/upload-stories">Your story</Link>
                <div className="bk-stories-container">
                    <Masonry
                        className={'my-gallery-class'} // default ''
                        elementType={'div'} // default 'div'
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                       {items}
                    </Masonry>
                </div>
                <button className={`bk-btn-more${hasMore ? '' : ' hidden'}`} onClick={handleButtonMore}>
                    <FiMoreHorizontal />
                </button>
            </main>
        </>
    )
}

export default Stories