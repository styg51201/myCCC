import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
function PisSlide() {
  const slideImages = [
    '/Mao-img/01.jpg',
    '/Mao-img/02.jpg',
    '/Mao-img/03.jpg',
    '/Mao-img/04.jpg',
    '/Mao-img/05.jpg',
  ]

  const picBox = []
  slideImages.map((v, i) => {
    picBox.push(
      <div className="each-slide">
        <div
          className="Mao-rand-AD"
          style={{
            backgroundImage: `url(${slideImages[i]})`,
            height: '500px',
            width: '350px',
          }}
        ></div>
      </div>
    )
  })
  let settings = {
    dots: false,
    infinite: true,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 600,
  }

  const RNDRoute = ['/watch', '/headset', '/actioncamera', '/surrounding']
  function RouteRND() {
    let RNDNum = RNDRoute[Math.round(Math.random() * (RNDRoute.length - 1))]
    console.log(RNDRoute)
    return RNDNum
  }
  return (
    <>
      <Link to={RouteRND()}>
        <div className="Mao-rand-AD-title-box">
          <h4 className="Mao-rand-AD-title">前往購買</h4>
          <div className="Mao-rand-AD">
            <Slider {...settings}>{picBox}</Slider>
          </div>
        </div>
      </Link>
    </>
  )
}

export default PisSlide
