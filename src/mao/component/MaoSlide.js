import React from 'react'
import { Slide } from 'react-slideshow-image'
import ProductSlide from '../ProductSlide'
function MaoSlide(props) {
  //放圖片

  const slideImages = [
    './chin-img/images/watch2.jpg',
    './chin-img/images/watch3.jpg',
    './chin-img/images/watch4.jpg',
    './chin-img/images/watch5.jpg',
  ]

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true, //是否循環
    indicators: true, //下方是否要有指示點點?
    arrows: true, //箭頭是否要有,如果要改的話用物件寫　需搭配ref
    autoplay: false,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`)
    },
  }

  //儲存箱子
  const NumBox = []
  slideImages.map((v, i) => {
    NumBox.push(
      <div className="each-slide">
        <div className="d-flex">
          <div
            className="col"
            style={{
              backgroundImage: `url(${slideImages[i]})`,
              backgroundRepeat: 'no-repeat',
              width: '200px;',
              height: '300px',
            }}
          ></div>
          <div
            className="col"
            style={{
              backgroundImage: `url(${slideImages[i]})`,
              backgroundRepeat: 'no-repeat',
              width: '200px;',
              height: '300px',
            }}
          ></div>
          <div
            className="col"
            style={{
              backgroundImage: `url(${slideImages[i + 1]})`,
              backgroundRepeat: 'no-repeat',
              width: '200px;',
              height: '300px',
            }}
          ></div>
        </div>
      </div>
    )
  })

  //執行出來的畫面
  const Slideshow = () => {
    return (
      <div
        className="slide-container"
        style={{ width: '600px', height: '300px' }}
      >
        <Slide {...properties}>{NumBox}</Slide>
      </div>
    )
  }

  return <>{Slideshow()}</>
}

export default MaoSlide
