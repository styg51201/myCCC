import React,{useState,useEffect} from 'react'
import Slider from "react-slick";


function Bigitem(props){

  console.log(props.data.multiple.length)
  let imgUrl = props.data.data[0] ? `/chin-img/images/${props.data.data[0].itemImg}` : ''
  function SamplePrevArrow(props) {
    console.log(props)
    const { className, style, onClick } = props;
    return (
      <div className="chin-cir">
        <img src="/chin-img/chevron-left.svg"
          className="chin-arr"
          onClick={onClick}
        />
      </div>
    );
  }
  function SampleNextArrow(props) {
    console.log(props)
    const { className, style, onClick } = props;
    return (
      <div className="chin-cir2">
        <img src="/chin-img/chevron-right.svg"
          className="chin-arr2"
          onClick={onClick}
          />
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
 

    return(
        <>
        <div>
              <div className="chin-bigitem">
                <img src={imgUrl} alt="" />
              </div>
              <div className="chin-smallitem">
                <Slider {...settings}>
                {props.data.multiple.map((val,ind)=>{
                                              return(
                                                <div>
                                      <img key={ind} src={`/chin-img/images/${val.multipleImageImg}`} className="chin-smallitem-img"/></div>
                                      )
                                              })}
                </Slider>
              </div>
              <div className="chin-rwd-circle-circle">
                <span className="chin-rwd-circle"></span>
                <span className="chin-rwd-circle"></span>
                <span className="chin-rwd-circle"></span>
                <span className="chin-rwd-circle"></span>
              </div>
            </div>
        </>
    )
}

export default Bigitem