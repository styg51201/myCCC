import React, { useState, useEffect, useRef, useCallback } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import { convertFromRaw } from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';
import axios from 'axios'

import {
    FiMoreHorizontal,
    FiChevronDown
  } from 'react-icons/fi'

import useStorySearch from './utils/useStorySearch'

// import './css/all.scss'
import './css/stories.scss'
import './css/storiesRWD.scss'

import StoryCard from './components/StoryCard'
import Masonry from 'react-masonry-component';


function Stories(props){

    const [pageNumber, setPageNumber] = useState(1)
    // const [showBtn, setShowBtn] = useState(false)
    const [showSort, setShowSort] = useState(false)
    const [sortName, setSortName] = useState(null)
    const [sortNameCn, setSortNameCn] = useState(null)
    const [usrId, setUsrId] = useState(localStorage.getItem('userId'))
    const [stryLikes, setStryLikes] = useState(null)

    const {
        loading,
        hasMore,
        stories,
        stryTotal,
        showBtn,
        error,
    } = useStorySearch(pageNumber, sortName)

    const observer = useRef(null)

    //查看使用者按讚的故事
    useEffect(()=>{
        if(!usrId) return;

        axios.get(`http://localhost:5500/stories/member/like?usrId=${usrId}`)
        .then(r=>{
            let arrLikes = [];
            r.data.forEach(elm=>{
                arrLikes.push(elm.stryId)
            })
            // console.log(arrLikes)
            setStryLikes(arrLikes)
        })
    }, [])

    useEffect(()=>{
        console.log('stryLikes:', stryLikes)
    }, [stryLikes])

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

    const toggleShowSort = ()=>{
        setShowSort(!showSort)
    }

    const handleSortName = (name, nameCn)=>{
        setSortName(name)
        setSortNameCn(nameCn)
        setShowSort(false)
    }

    useEffect(()=>{
        if(sortName) setPageNumber(1)
    }, [sortName])
    

    const items =  stories.map((itm, idx)=>{
        if(!stryLikes && usrId) return '';

        let options = {
            blockStyleFn: (block) => {
                switch(block.type){
                    case 'ALIGNLEFT':
                        return {style:{textAlign: 'left'}}
                    case 'ALIGNCENTER':
                        return {style:{textAlign: 'center'}}
                    case 'ALIGNRIGHT':
                        return {style:{textAlign: 'right'}}
                }
            }
          }

        let story = stateToHTML(convertFromRaw(JSON.parse(itm.stryContent)), options)

        if(stories.length === idx+1){
            return (
                <div className="bk-masonry-brick" 
                    ref={lastStoryElementRef} 
                    key={`${itm.stryId}-${itm.userId}`} 
                >
                    <StoryCard 
                        content={story} 
                        data={itm}
                        liked={stryLikes ? (stryLikes.indexOf(itm.stryId) !== -1) : null}
                    />
                </div>
            )
        }else{
            return (
                <div className="bk-masonry-brick" 
                    key={`${itm.stryId}-${itm.userId}`} 
                >
                    <StoryCard 
                        content={story} 
                        data={itm}
                        liked={stryLikes ? !(stryLikes.indexOf(itm.stryId) === -1) : null}
                    />
                </div>
            )
        }
    })

    return(
        <>
            <div className = 'bk-page-top'>
                <div className='bk-page-title'>
                    <span>STORIES</span>
                    <span>故事牆</span>
                </div>
                <div className='bk-sort'>
                    <div role="button" onClick={toggleShowSort}>{sortName ? sortNameCn : '排序方式'} <FiChevronDown /></div>
                    <ul className={showSort ? 'active' : ''}>
                        <li onClick={()=>{
                            handleSortName('time', '最新故事')
                            // setPageNumber(1)
                        }}>最新故事</li>
                        <li onClick={()=>{
                            handleSortName('views', '觀看次數')
                            // setPageNumber(1)
                        }}>觀看次數</li>
                        <li onClick={()=>{
                            handleSortName('likes', '按讚次數')
                            // setPageNumber(1)
                        }}>按讚次數</li>
                        <li onClick={()=>{
                            handleSortName('replies', '回覆數量')
                            // setPageNumber(1)
                        }}>回覆數量</li>
                    </ul>
                </div>
            </div>

            <main className="mt-5">
            <Link to="/member/stories/drafts">Member Drafts (currently set to member 1)</Link>

                <div className="bk-stories-container">
                    <Masonry
                        className={'my-gallery-class'} // default ''
                        elementType={'div'} // default 'div'
                        // options={{
                        //     transitionDuration: 0
                        // }}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                       {items}
                    </Masonry>
                </div>
                <button className={`bk-btn-more${showBtn ? '' : ' hidden'}`} onClick={handleButtonMore}>
                    <FiMoreHorizontal />
                </button>
            </main>
        </>
    )
}

export default Stories