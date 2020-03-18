import React from 'react'

function Bigitem(props){

    let imgUrl = props.data[0] ? `/chin-img/images/${props.data[0].itemImg}` : ''
    return(
        <>
        <div>
              <div className="chin-bigitem">
                <img src={imgUrl} alt="" />
              </div>
              <div className="chin-smallitem">
                <img src="/chin-img/chevron-left.svg" alt="" />
                <img src="/chin-img/images/headset7.jpg" alt="" />
                <img src="/chin-img/images/headset8.jpg" alt="" />
                <img src="/chin-img/images/headset9.jpg" alt="" />
                <img src="/chin-img/images/headset10.jpg" alt="" />
                <img src="/chin-img/chevron-right.svg" alt="" />
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