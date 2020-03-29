import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import Commoditycomponents from '../chin/components/Commoditycomponents'

import './css/search.scss'

function Search(props){

    const [data, setData] = useState([])
    const [searchKey, setSearchKey] = useState(props.location.search.replace('?key=', '').trim())

    useEffect(()=>{
        
        if(!props.location.search.replace('?key=', '').trim().length){
            //console.log("請填入搜尋資訊")
            return;
        }
        
        setSearchKey(props.location.search.replace('?key=', '').trim())

        axios.get(`http://localhost:5500/home/search${props.location.search}`)
        .then(r=>{
            setData(r.data)
        })
    }, [props.location.search])

    useEffect(()=>{
        console.log(data)
    }, [data])

    return(
        <>
        <div className='bk-page-top'>
            <div className='bk-page-title'>
                <span>SEARCH RESULTS</span>
                <span>搜尋結果</span>
                <span>{searchKey} 共找到 {data.length} 個商品</span>
            </div>
        </div>
            <div className='bk-search-results'>
                {!data.length ? '沒有類似的結果' : data.map((elm, idx)=>{
                    return(
                        <Commoditycomponents
                            key={elm.itemId}
                            data={elm}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default withRouter(Search)