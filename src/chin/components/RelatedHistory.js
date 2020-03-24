import React,{useState,useEffect} from 'react'
import Slider from "react-slick"
import { useSelector, useDispatch } from 'react-redux'

function RelatedHistory(props){
console.log(props)
const Itemhis = useSelector(state => state.getItemNamehis)
const dispatch = useDispatch()
const dataname = props.data.name?props.data[0].name:''
console.log(dataname)
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
    const request = new Request(`http://localhost:5500/items/itemhis/${val}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()
    console.log('123123231', data)
    dispatch(showItemshis(data))
  }
  useEffect(() => {
    formServerItemshis(dataname)
  }, [])

    return(
        <>
        <div className="chin-historicalrecord">
        <a href="">相關商品</a>
        <a href="">歷史紀錄</a>
      </div>
      <div className="chin-relatedproducts">
        {/* <button>
          <img src="/chin-img/chevron-left.svg" alt="" />
        </button> */}
        <Slider {...settings}>
        <div className="chin-commodity2">
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
            <img className="chin-watch2" src="/chin-img/images/watch.jpg" alt="" />
            <h6>Apple</h6>
            <p>Apple Watch Nike</p>
            <h5>NT$6,400</h5>
          </div>
        </div>
        
        </Slider>
        {/* <button>
          <img src="/chin-img/chevron-right.svg" alt="" />
        </button> */}
      </div>
      </>
    )
}

export default RelatedHistory