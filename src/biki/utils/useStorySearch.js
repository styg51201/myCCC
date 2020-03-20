import { useEffect, useState } from 'react'
import axios from 'axios'


export default function useStorySearch(pageNumber){

    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const [stories, setStories] = useState([])
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)

        let cancel;

        axios({
            method: 'GET',
            url: `http://localhost:5500/stories/${pageNumber}`,
            headers: {
                'content-type': 'application/json'
            }
            // cancelToken : new axios.CancelToken(c => cancel = c)
        }).then(response=>{
            setStories(prevStories=>{
                return [...prevStories, ...response.data]
            })
            setHasMore(response.data.length > 0)
            setLoading(false)
        }).catch(err=>{
            // if(axios.isCancel(err)) return
            console.log('error:', err)
            setError(true)
            // return;
        })
        
        // return ()=> cancel()

    }, [pageNumber])

    return {loading, hasMore, stories, error}
}