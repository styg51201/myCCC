import { useEffect, useState } from 'react'
import axios from 'axios'


export default function useStorySearch(pageNumber, sortName, tag){

    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const [stories, setStories] = useState([])
    const [error, setError] = useState(false)
    const [stryTotal, setStryTotal] = useState(0)
    const [showBtn, setShowBtn] = useState(false)

    useEffect(()=>{
        // console.log('tag', tag)
        setLoading(true)
        setError(false)
        // console.log('page or sortname has been changed')

        // let cancel;

        if(pageNumber === Math.ceil(stryTotal / 15)){
            setShowBtn(false)
        }

        let url = `http://localhost:5500/stories/${pageNumber}`

        if(tag){
            url += `${tag}`
        }

        // if(tag){
        //     tag.forEach((elm, idx)=>{
        //         if(idx === 0){
        //             url += `?tag${idx}=${elm}`
        //         }else{
        //             url += `&tag${idx}=${elm}`
        //         }
        //     })
        // }

        if(sortName){
            if(tag){
                url += `&orderby=${sortName}`;
            }else{
                url += `?orderby=${sortName}`;
            }
        }

        // console.log('url', url)

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

    }, [pageNumber, sortName, tag])

    useEffect(()=>{
        // if(sortName){
            // console.log('resetting stories..')
            setStories([])
        // }
    }, [sortName, tag])

    return {loading, hasMore, stories, stryTotal, showBtn, error}
}