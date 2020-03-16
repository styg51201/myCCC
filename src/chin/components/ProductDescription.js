import React from 'react'

function ProductDescription(){
    return(
        <div className="chin-productname">
        <h6>Audio-Technica</h6>
        <h5>智慧型手機專用耳塞式耳機</h5>
        <div className="chin-starimg">
          <img src="./chin-img/star.svg" alt="" />
          <img src="./chin-img/star.svg" alt="" />
          <img src="./chin-img/star.svg" alt="" />
          <img src="./chin-img/star.svg" alt="" />
          <img src="./chin-img/star.svg" alt="" />
        <span>4.0 (5)</span>
        </div>
        <h4>NT$6,400</h4>
        <p>
          搭載凝聚高性能精簡設計的Ø9.8mm驅動單元，展現優質的中高音頻。
          重視佩戴舒適感的袖珍機身，耳型較小也能完美服貼。
          導線附有智慧型手機用控制器，可接聽電話及控制音樂播放。 XS、S、M、L
          四種尺寸耳塞，自由選擇佩戴感。
        </p>
        <div className="chin-myfavourite-shopping">
          <div className="chin-myfavourite">
           <div>
              <img src="./chin-img/minus-circle.svg" alt="" />
              <span>1</span>
              <img src="./chin-img/plus-circle.svg" alt="" />
            </div>
            <div className="chin-shopping">
              <button>加入購物車</button>
              <button>立即購買</button>
            </div>
          </div>
          <div className="chin-favourite">
            <img src="./chin-img/heart.svg" alt="" />
            <span>加入我的最愛</span>
          </div>
        </div>
      </div>
    )
}

export default ProductDescription