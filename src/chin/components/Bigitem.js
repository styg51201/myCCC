import React,{useState,useEffect} from 'react'

function Bigitem(props){

  console.log(props.data.multiple)
  let imgUrl = props.data.data[0] ? `/chin-img/images/${props.data.data[0].itemImg}` : ''


  useEffect(()=>{
   
  },[])
    return(
        <>
        <div>
              <div className="chin-bigitem">
                <img src={imgUrl} alt="" />
              </div>
              <div className="chin-smallitem">
                <ul className="chin-sliderImg">
                <li><img src="/chin-img/chevron-left.svg" alt=""  className="chin-smallitem-Arr"/></li>
                {props.data.multiple.map((val,ind)=>{
                                return(
                                  <li>
                        <img key={ind} src={`/chin-img/images/${val.multipleImageImg}`} className="chin-smallitem-img"/></li>
                        )
                                })}
                <li><img src="/chin-img/chevron-right.svg" alt="" className="chin-smallitem-Arr2"/></li>
                </ul>
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