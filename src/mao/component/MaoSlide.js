import React, { useEffect } from 'react'
import { Slide } from 'react-slideshow-image'
import ProductSlide from '../ProductSlide'
import { productList } from '../ProductList'


function MaoSlide(props) {
  //放圖片

  const slideImages = [
    'https://fakeimg.pl/100/',
    'https://fakeimg.pl/200/',
    'https://fakeimg.pl/300/',
    'https://fakeimg.pl/400/',
    'https://fakeimg.pl/500/',
    'https://fakeimg.pl/600/',
    'https://fakeimg.pl/700/',
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
        <div className="d-flex flex-wrap">
          <ProductSlide />
          {/* <div
            className="col"
            style={{
              backgroundImage: `url(${slideImages[Math.round(Math.random()*slideImages.length)]})`,
              backgroundRepeat: 'no-repeat',
              width: '200px;',
              height: '300px',
            }}
          ></div> */}
        </div>
      </div>
    )
  })

  //執行出來的畫面
  const Slideshow = () => {
    return (
      <div
        className="slide-container"
        style={{ width: '1300px', height: '300px' }}
      >
        <Slide {...properties}>{NumBox}</Slide>
      </div>
    )
  }

  return <>{Slideshow()}</>
}

export default MaoSlide
