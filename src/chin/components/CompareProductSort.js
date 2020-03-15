import React,{useState,useEffect} from 'react'

function CompareProductSort(props){
    console.log(props.data)
    // const [pro,setPro] =useState([])
    // // console.log(toto)
    // // console.log({...props})
    // useEffect(()=>{
    //     setPro(data)
    // })
    return(
    <div className="chin-title">
        <div className="chin-title-text">
            <span>WEARABLE DEVICES</span>
            <span>{props.data.itemCategoryId}</span>
        </div>
        <div className="chin-rwd-sort-features">
            <button className="chin-rwd-features">功能</button>
            <button className="chin-rwd-sort">排序方式</button>
        </div>
        <div className="chin-comparegoods-sort">
            <button className="chin-comparegoods">
                <span>比較商品</span>
                <img src="./chin-img/align-justify.svg" alt=""/>
            </button>
            <button className="chin-sort">
                <span>排序</span>
                <img src="./chin-img/chevron-down-white.svg" alt=""/>
            </button>
        </div>
    </div>
    )
}

export default CompareProductSort