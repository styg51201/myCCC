import React, { useState, useEffect, useRef, useCallback } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import { convertFromRaw } from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';
import axios from 'axios'
import {
    FiMoreHorizontal
  } from 'react-icons/fi'

import useStorySearch from './utils/useStorySearch'


import './css/all.scss'
import './css/stories.scss'

import StoryCard from './components/StoryCard'
import StoryModal from './components/StoryModal'
import Masonry from 'react-masonry-component';


function Stories(props){

    const [pageNumber, setPageNumber] = useState(1)
    const [modalOpen, setModalOpen] = useState(false)
    const [openStry, setOpenStry] = useState({})


    useEffect(()=>{
        console.log(props)
    },[])

    useEffect(()=>{
        console.log(openStry)
    }, [openStry])

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

    const toggleModal = (data)=>{
        setModalOpen(!modalOpen);
        // setOpenStryId(evt.target.stryId)
        
        if(!modalOpen){
            console.log("current id", data.stryId)
            let cancel;
            axios({
                method: 'GET',
                url: `http://localhost:5500/stories/story?id=${data.stryId}`,
                cancelToken : new axios.CancelToken(c => cancel = c)
            })
            .then(res=>{
                let content = stateToHTML(convertFromRaw(JSON.parse(res.data.data.stryContent)));
                res.data.data.stryContent = content;
                // console.log(content)
                setOpenStry(res.data.data)
            })
            .catch(err=>{
                if(axios.isCancel(err)) return
            })
            return ()=> cancel()
        }
        setOpenStry({})
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
                        title={itm.stryTitle}
                        likes={itm.stryLikes}
                        user={itm.usrId}
                        loading={loading}
                        onClick={()=>{
                            toggleModal(itm)
                        }}
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
                        loading={loading}
                        onClick={()=>{
                            toggleModal(itm)
                        }}
                    />
                </div>
            </>)
        }
    })

    return(
        <>
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
            <StoryModal 
            show={modalOpen} 
            onClose={toggleModal}
            data={openStry}
            />
        </>
    )
}

export default withRouter(Stories)