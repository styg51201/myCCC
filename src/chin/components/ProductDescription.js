import React from 'react'

function ProductDescription(props){
    return(
        <div className="chin-productname">
        <h6>{props.data[0] ? props.data[0].name : ''}</h6>
        <h5>{props.data[0] ? props.data[0].itemName : ''}</h5>
        <div className="chin-starimg">
          <img src="/chin-img/star.svg" alt="" />
          <img src="/chin-img/star.svg" alt="" />
          <img src="/chin-img/star.svg" alt="" />
          <img src="/chin-img/star.svg" alt="" />
          <img src="/chin-img/star.svg" alt="" />
        <span>4.0 (5)</span>
        </div>
        <h4>NT{props.data[0] ? props.data[0].itemPrice : ''}</h4>
        <p>
          {props.data[0] ? props.data[0].itemDescription : ''}
        </p>
        <div className="chin-myfavourite-shopping">
          <div className="chin-myfavourite">
          
            <div className="chin-shopping">
              <button>加入購物車</button>
              <button>立即購買</button>
            </div>
          </div>
          <div className="chin-favourite">
            <img src="/chin-img/heart.svg" alt="" />
            <span>加入我的最愛</span>
          </div>
        </div>
      </div>
    )
}

export default ProductDescription