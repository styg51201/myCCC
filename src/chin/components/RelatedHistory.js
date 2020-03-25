import React,{useState,useEffect} from 'react'
import Slider from "react-slick"
import {BrowserRouter as Router,Route,Link,Switch,withRouter} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function RelatedHistory(props){
const Itemhis = useSelector(state => state.getItemNamehis)
const itemsCategoryId = useSelector(state => state.getitemCategoryId)
const dispatch = useDispatch()
const dataname = props.data[0]?props.data[0].name:''
const dataitemCategoryId = props.data[0]?props.data[0].itemCategoryId:''
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="chin-hicir"  onClick={onClick}>
        <img src="/chin-img/chevron-left.svg"
          className="chin-hiarr"/>
      </div>
    );
  }
  function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
      <div className="chin-hicir2" onClick={onClick}>
        <img src="/chin-img/chevron-right.svg"
          className="chin-hiarr2"/>
        </div>
    );
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const showItemshis = val => {
    return { type: 'SHOW_ITEMSHIS', value: val }
  }
  async function formServerItemshis(val) {
    console.log(val)
    const request = new Request(`http://localhost:5500/items/itemhis/${val}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()
    console.log('123123231', data)
    dispatch(showItemshis(data))
  }
  const showitemCategoryId = val => {
    return { type: 'SHOW_ITEMSCATEGORY', value: val }
  }
  async function formServeritemCategoryId(val) {
    console.log(val)
    const request = new Request(`http://localhost:5500/items/itemCategoryId/${val}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()
    console.log('11', data)
    dispatch(showitemCategoryId(data))
  }
  useEffect(() => {
    formServeritemCategoryId(dataitemCategoryId)
    formServerItemshis(dataname)
  }, [props.data])

  
    return(
        <>
        <div className="chin-historicalrecord">
          <Link to="">相關商品</Link>
          <Link to="">歷史紀錄</Link>
        </div>
      <div className="chin-relatedproducts">
        <Slider {...settings}>
          {Itemhis.length < 3 ?
            itemsCategoryId.map((val,ind)=>{
            return(<div className="chin-commodity2">
                      <div className="chin-commodity-item2">
                        <ul className="chin-star-heart-bag2">
                          <li>
                            <img className="chin-star2" src="/chin-img/star.svg" alt="" />
                          </li>
                          <li>
                            <img className="chin-star2" src="/chin-img/star.svg" alt="" />
                          </li>
                          <li>
                            <img className="chin-star2" src="/chin-img/star.svg" alt="" />
                          </li>
                          <li>
                            <img className="chin-star2" src="/chin-img/star.svg"  alt="" />
                          </li>
                          <li>
                            <img className="chin-star2"  src="/chin-img/star.svg"  alt="" />
                          </li>
                          <li className="chin-heart-bag2">
                            <img className="chin-heart2" src="/chin-img/heart.svg" alt="" />
                            <img className="chin-bag2" src="/chin-img/shopping-bag.svg"  alt="" />
                          </li>
                        </ul>
                        <Link to={'/commidty/'+ val.itemId}>
                          <img className="chin-watch2"  src={`/chin-img/images/${val.itemName}/${val.itemImg}`}  alt="" />
                          <h6>{val.name}</h6>
                          <p>{val.itemName}</p>
                          <h5>{val.itemPrice}</h5>
                        </Link>
                      </div>
                    </div>)
          })
          :
          Itemhis.map((val,ind)=>{
            return(<div className="chin-commodity2">
                      <div className="chin-commodity-item2">
                        <ul className="chin-star-heart-bag2">
                          <li>
                            <img className="chin-star2" src="/chin-img/star.svg" alt="" />
                          </li>
                          <li>
                            <img className="chin-star2" src="/chin-img/star.svg" alt="" />
                          </li>
                          <li>
                            <img className="chin-star2" src="/chin-img/star.svg" alt="" />
                          </li>
                          <li>
                            <img className="chin-star2" src="/chin-img/star.svg"  alt="" />
                          </li>
                          <li>
                            <img className="chin-star2"  src="/chin-img/star.svg"  alt="" />
                          </li>
                          <li className="chin-heart-bag2">
                            <img className="chin-heart2" src="/chin-img/heart.svg" alt="" />
                            <img className="chin-bag2" src="/chin-img/shopping-bag.svg"  alt="" />
                          </li>
                        </ul>
                        <Link to={'/commidty/'+ val.itemId}>
                          <img className="chin-watch2"  src={`/chin-img/images/${val.itemName}/${val.itemImg}`}  alt="" />
                          <h6>{val.name}</h6>
                          <p>{val.itemName}</p>
                          <h5>{val.itemPrice}</h5>
                        </Link>
                      </div>
                    </div>)
          })
        }
        </Slider>
      </div>
      </>
    )
}

export default withRouter(RelatedHistory)