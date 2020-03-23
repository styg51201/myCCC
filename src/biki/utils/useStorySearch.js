import { useEffect, useState } from 'react'
import axios from 'axios'


export default function useStorySearch(pageNumber, sortName){

    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const [stories, setStories] = useState([])
    const [error, setError] = useState(false)
    const [stryTotal, setStryTotal] = useState(0)
    const [showBtn, setShowBtn] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)
        // console.log('page or sortname has been changed')

        let cancel;

        if(pageNumber === Math.ceil(stryTotal / 15)){
            setShowBtn(false)
        }

        let url;
        if(sortName){
            url = `http://localhost:5500/stories/${pageNumber}?orderby=${sortName}`;
        }else{
            url = `http://localhost:5500/stories/${pageNumber}`
        }

        axios({
            method: 'GET',
            url: url,
            headers: {
                'content-type': 'application/json'
            }
        }).then(response=>{
            // console.log(response)
            setStories(prevStories=>{
                return [...prevStories, ...response.data.data]
            })
            setStryTotal(response.data.stryTotal)
            setHasMore(response.data.data.length > 0)
            if(pageNumber === Math.ceil(stryTotal / 15)){
                setShowBtn(false)
            }else{
                setShowBtn(response.data.data.length > 0)
            }
            setLoading(false)
        }).catch(err=>{
            // if(axios.isCancel(err)) return
            console.log('error:', err)
            setError(true)
            // return;
        })
        // return ()=> cancel()

    }, [pageNumber, sortName])

    useEffect(()=>{
        if(sortName){
            console.log('resetting stories..')
            setStories([])
        }
    }, [sortName])

    return {loading, hasMore, stories, stryTotal, showBtn, error}
}