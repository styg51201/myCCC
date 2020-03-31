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

import './css/stories.scss'
import './css/storiesRWD.scss'

import StoryCard from './components/StoryCard'
import Masonry from 'react-masonry-component';

import {
    FiX
  } from 'react-icons/fi'


function Stories(props){

    const [pageNumber, setPageNumber] = useState(1)
    // const [showBtn, setShowBtn] = useState(false)
    const [showSort, setShowSort] = useState(false)
    const [sortName, setSortName] = useState(null)
    const [sortNameCn, setSortNameCn] = useState(null)
    const [usrId, setUsrId] = useState(localStorage.getItem('userId'))
    const [stryLikes, setStryLikes] = useState(null)
    // const [tags, setTags] = useState(props.location.search.replace(/[\?\&]tag\d=/g, ' ').split(' '))
    const [tag, setTag] = useState(props.location.search)

    const {
        loading,
        hasMore,
        stories,
        stryTotal,
        showBtn,
        error,
    } = useStorySearch(pageNumber, sortName, tag)

    const observer = useRef(null)

    //查看使用者按讚的故事
    useEffect(()=>{
        // if(props.location) setTag(props.location.search)
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

    // useEffect(()=>{
    //     console.log('stryLikes:', stryLikes)
    // }, [stryLikes])

    useEffect(()=>{
        setTag(props.location.search)
        // console.log(props.location.search)

    }, [props.location.search])

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

    // const addTagsToArr = (tag)=>{
    //     setTags(prevTags=>{
    //         return [...prevTags, tag]
    //     })
    // }

    useEffect(()=>{
        if(sortName) setPageNumber(1)
        // if(tags.length) setPageNumber(1)
        if(tag) setPageNumber(1)
    }, [sortName, tag])
    

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
                        // addTagsToArr={addTagsToArr}
                        // tags={tags}
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
                        // addTagsToArr={addTagsToArr}
                        // tags={tags}
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
            {/* {tags.length ? 
            (<div className='bk-tags bk-dark mt-5'>
                {tags.map((elm, idx)=>{
                    return (
                    <div className='bk-tag' key={`${elm}-${idx}`}>
                        {elm}
                    </div>
                )
                })}
            </div>)
            : ''} */}

            {tag ? 
            (<div className='bk-tags bk-dark mt-5'>
                <div className='bk-tag' style={{display:'flex', alignItems:'center'}}>
                    {decodeURI(tag.replace('?tag=', ''))}
                    <FiX style={{marginLeft:'7.5px'}} onClick={()=>{
                        setPageNumber(1)
                        setTag('')
                        props.history.push('/stories')
                    }} />
                </div>
            </div>)
            : ''}

            <main className="mt-5">
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

export default withRouter(Stories)