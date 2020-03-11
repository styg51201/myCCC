import React,{useState,useEffect} from 'react'


function CouponItem(props){
    const [vendor,setVendor]=useState('')
    const [img,setImg]=useState('')
    const [discount,setDiscount]=useState('')
    const [dueDate,setDueDate]=useState('')

  console.log('props',props)
    
    return (
        <>
        <div class="col col-sm-6 coupon">
              <div class="item">
                <div class="wrapForImg">
                  <img src="../img/Swatch.jpg" alt="" />
                  <div class="alreadyGet">已領取</div>
                </div>
                <div class="text">
                  <ul>
                    <h3>{props.data.discount}</h3>
                    <li>{props.data.vendor}</li>
                    <li>穿戴式裝置指定商品{props.data.discount}</li>
                    <li>有效至 {props.data.dueDate}</li>
                  </ul>
                  <div class="state">
                    <div></div>
                    <p>75% 已領取</p>
                  </div>
                </div>
                <div class="button">
                  <button>
                    <span>領取</span>
                  </button>
                </div>
              </div>
            </div>
        </>
    )
}

export default CouponItem
