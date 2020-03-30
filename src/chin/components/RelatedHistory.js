import React,{useState,useEffect} from 'react'
import Slider from "react-slick"
//classnames
import classNames from 'classnames'
import {BrowserRouter as Router,Route,Link,Switch,withRouter} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { FiHeart ,FiShoppingBag} from 'react-icons/fi'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {fromServerMbLikeData} from '../../stacey/actions/couponAction'

function RelatedHistory(props){
const [newHisitem,setNewHisitem]=useState([])
const [hisrelitem,setHisrelitem]=useState(false)
const Itemhis = useSelector(state => state.getItemNamehis)
const itemsCategoryId = useSelector(state => state.getitemCategoryId)
const dispatch = useDispatch()
const dataname = props.data[0]?props.data[0].name:''
let dataitemCategoryId = props.data[0]?props.data[0].itemCategoryId:''

const itemClassName = classNames('chin-historicalrecord', {
  active:hisrelitem 
})

//會員id
const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0

async function ItemToLocalStorage(value) {

  const currentHisitem = JSON.parse(localStorage.getItem('hisitem')) || []
  if(currentHisitem.length===0){
    const newHisitem = [...currentHisitem, value]
    localStorage.setItem('hisitem', JSON.stringify(newHisitem))
  }

  let box=[]
  currentHisitem.map((val,ind)=>{
    box.push(val.itemId)
  })
    let index = box.findIndex(e=>e==value.itemId)
    if(index === -1){
      const newHisitem = [...currentHisitem, value]
      localStorage.setItem('hisitem', JSON.stringify(newHisitem))
    }else{console.log('asdsadasdsd')}
  // 設定資料
  setNewHisitem(newHisitem)
}
async function getItemToLocalStorage() {

  const currentHisitem = localStorage.getItem('hisitem') || []

  console.log(JSON.parse(currentHisitem))

  // 設定資料
  setNewHisitem(JSON.parse(currentHisitem))
}
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src="/chin-img/chevron-left.svg"
          className="chin-hiarr" onClick={onClick}/>
    );
  }
  function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
        <img src="/chin-img/chevron-right.svg"
          className="chin-hiarr2" onClick={onClick}/>
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
    getItemToLocalStorage()
  }, [props.data])

  
    return(
        <>
        <div className={itemClassName}>
          <button className="chin-hisrel1" onClick={()=>{setHisrelitem(false)}}>相關商品</button>
          <button className="chin-hisrel2" onClick={()=>{setHisrelitem(true)}}>歷史紀錄</button>
          <div className="chin-borderbottom"></div>
        </div>
      <div className="chin-relatedproducts">
      {hisrelitem?
      <>
        {newHisitem.length<5?
        <img src="/chin-img/chevron-left.svg"
          className="chin-hiarr"/>:''}
        <Slider {...settings}>
            {newHisitem.map((val,ind)=>{
              //判斷是否我的最愛
              let mbLike = false
              if(props.mbLikeData.findIndex((v)=>v.itemId === val.itemId) > -1 ){
                mbLike = true
              }
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
                                  <FiHeart className={`chin-heart2 ${mbLike ? 'Mao-like-red':''}`} src="/chin-img/heart.svg" alt="" />
                                  <img className="chin-bag2" src="/chin-img/shopping-bag.svg"  alt="" />
                                </li>
                              </ul>
                              <Link to={'/commidty/'+ val.itemId}>
                                <img className="chin-watch2"  src={`/chin-img/images/${val.itemName}/${val.itemImg}`}  alt="" />
                                <h6>{val.name}</h6>
                                <p>{val.itemName}</p>
                                <h5>NT{val.itemPrice}</h5>
                              </Link>
                            </div>
                          </div>)
            })}
      </Slider>
      {newHisitem.length<5?
      <img src="/chin-img/chevron-right.svg"
          className="chin-hiarr2"/>:''}
            </>
        :
        <Slider {...settings}>
          {Itemhis.length < 5 ?
            itemsCategoryId.map((val,ind)=>{
              //判斷是否我的最愛
              let mbLike = false
              if(props.mbLikeData.findIndex((v)=>v.itemId === val.itemId) > -1 ){
                mbLike = true
              }
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
                            <img className={`chin-heart2 ${mbLike ? 'Mao-like-red':''}`} src="/chin-img/heart.svg" alt="" />
                            <img className="chin-bag2" src="/chin-img/shopping-bag.svg"  alt="" />
                          </li>
                        </ul>
                        <Link to={'/commidty/'+ val.itemId} onClick={()=>{ItemToLocalStorage(val)}}>
                          <img className="chin-watch2"  src={`/chin-img/images/${val.itemName}/${val.itemImg}`}  alt="" />
                          <h6>{val.name}</h6>
                          <p>{val.itemName}</p>
                          <h5>NT{val.itemPrice}</h5>
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
                        <Link to={'/commidty/'+ val.itemId} onClick={()=>{ItemToLocalStorage(val)}}>
                          <img className="chin-watch2"  src={`/chin-img/images/${val.itemName}/${val.itemImg}`}  alt="" />
                          <h6>{val.name}</h6>
                          <p>{val.itemName}</p>
                          <h5>NT{val.itemPrice}</h5>
                        </Link>
                      </div>
                    </div>)
          })
        }
        </Slider>
      }
      </div>
      </>
    )
}


// 選擇對應的reducer
const mapStateToProps = store => {
  return { mbLikeData:store.memberLikeData,
         }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fromServerMbLikeData,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RelatedHistory)
)