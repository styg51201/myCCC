import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'

function Bigitem(props) {
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  })
  const slider1 = useRef()
  const slider2 = useRef()

  let imgUrl = props.data.data[0]
    ? `/chin-img/images/${props.data.data[0].itemImg}`
    : ''
  function SamplePrevArrow(props) {

    const { className, style, onClick } = props
    return (
        <img
          src="/chin-img/chevron-left.svg"
          className="chin-arr"
          onClick={onClick}
        />
    )
  }
  function SampleNextArrow(props) {

    const { className, style, onClick } = props
    return (
        <img
          src="/chin-img/chevron-right.svg"
          className="chin-arr2"
          onClick={onClick}
        />
    )
  }
  const settingCarousel = {
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  const settingsRWD = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  useEffect(() => {
    setState({ nav1: slider1.current, nav2: slider2.current })
  }, [])
  const { nav1, nav2 } = state
  return (
    <>
      <div>
        <div className="chin-sliderRWD">
        <Slider {...settingsRWD}>
          {props.data.multiple.map((val, ind) => {
                return (
                  <div>
                    <img
                      key={ind}
                      src={`/chin-img/images/${val.itemName}/${val.multipleImageImg}`}
                      className="chin-sm-RWD"
                    />
                  </div>
                )
              })}
        </Slider>
        </div>
        <div className='bk-bigitem-wrapper'>
          <div className="chin-bigitem">
            <Slider
              asNavFor={nav2}
              ref={slider=>(slider1.current= slider)}
              arrows={false}
              slidesToShow={props.data.multiple.length === 0 ? 0 : 1}
            >
              {props.data.multiple.map((val, ind) => {
                return (
                  <div>
                    <img
                      key={ind}
                      src={`/chin-img/images/${val.itemName}/${val.multipleImageImg}`}
                      className="chin-smallitem-img"
                    />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
        <div className="chin-smallitem">
          <Slider
            asNavFor={nav1}
            ref={slider=>(slider2.current= slider)}
            slidesToShow={props.data.multiple.length === 0 ? 0 : 4}
            {...settingCarousel}>
            {props.data.multiple.map((val, ind) => {
              return (
                <div>
                  <img
                    key={ind}
                    src={`/chin-img/images/${val.itemName}/${val.multipleImageImg}`}
                    className="chin-smallitem-img"
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Bigitem
