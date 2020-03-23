import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'

function Bigitem(props) {
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  })
  const slider1 = useRef()
  const slider2 = useRef()
  console.log(props.data.multiple.length)
  let imgUrl = props.data.data[0]
    ? `/chin-img/images/${props.data.data[0].itemImg}`
    : ''
  function SamplePrevArrow(props) {
    console.log(props)
    const { className, style, onClick } = props

    const img = <div>hello</div>

    return (
      <div className="chin-cir">
        <img
          src="/chin-img/chevron-left.svg"
          className="chin-arr"
          onClick={onClick}
        />
      </div>
    )
  }
  function SampleNextArrow(props) {
    console.log(props)
    const { className, style, onClick } = props
    return (
      <div className="chin-cir2">
        <img
          src="/chin-img/chevron-right.svg"
          className="chin-arr2"
          onClick={onClick}
        />
      </div>
    )
  }
  const settingCarousel = {
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  useEffect(() => {
    setState({ nav1: slider1.current, nav2: slider2.current })
  }, [])
  const { nav1, nav2 } = state
  return (
    <>
      <div>
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
