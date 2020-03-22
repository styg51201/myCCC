import { useEffect, useState } from 'react'
import axios from 'axios'


export default function useStorySearch(pageNumber, sortName){

    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const [stories, setStories] = useState([])
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)
        // console.log('page or sortname has been changed')

        let cancel;

        if(sortName){
            axios({
                method: 'GET',
                url: `http://localhost:5500/stories/${pageNumber}?orderby=${sortName}`,
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response=>{
                console.log(response)
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
        }else{
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
        }
        
        // return ()=> cancel()

    }, [pageNumber, sortName])

    useEffect(()=>{
        if(sortName){
            console.log('resetting stories..')
            setStories([])
        }
    }, [sortName])

    return {loading, hasMore, stories, error}
}