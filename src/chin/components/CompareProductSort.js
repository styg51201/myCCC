import React,{useState,useEffect} from 'react'

function CompareProductSort(props){
    const [featuredproducts,setFeaturedproducts]=useState(false)

  const Sort = ()=>{
    if (featuredproducts !== true) {
        setFeaturedproducts(true)
        document.querySelector('.chin-featuredproducts').classList.add('chin-featuredproducts2')
        document.querySelector('.chin-sort img').classList.add('chin-sort2')
        document.querySelector('.chin-sort img').classList.remove('chin-sort3')}
        else{
        setFeaturedproducts(false)
        document.querySelector('.chin-featuredproducts').classList.remove('chin-featuredproducts2')
        document.querySelector('.chin-sort img').classList.remove('chin-sort2')
        document.querySelector('.chin-sort img').classList.add('chin-sort3')}
    }

    return(
    <div className="chin-title">
        <div className="chin-title-text">
            <span>{props.englishname}</span>
            <span>{props.data[0] ? props.data[0].itemCategoryId : ''}</span>
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
            <div className="chin-sort-featuredproducts">
                <label onClick={Sort} className="chin-sort">
                        <span>排序方式</span>
                        <img src="./chin-img/chevron-down-black.svg" alt=""/>
                </label>
                <ul className="chin-featuredproducts">
                    <li>精選商品</li>
                    <li>最新商品</li>
                    <li>價格:從高到低</li>
                    <li>價格:從低到高</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default CompareProductSort