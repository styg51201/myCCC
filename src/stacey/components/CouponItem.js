import React,{useState} from 'react'


function CouponItem(){
    const [vendor,setVendor]=useState
    const [img,setImg]=useState
    const [discount,setDiscount]=useState
    const [dueDate,setdueDate]=useState


    return (
        <>
        <div class="col col-sm-6 coupon">
              <div class="item">
                <div class="wrapForImg">
                  <img src="img/Swatch.jpg" alt="" />
                  <div class="alreadyGet">已領取</div>
                </div>
                <div class="text">
                  <ul>
                    <h3>85折</h3>
                    <li>swatch品牌券</li>
                    <li>穿戴式裝置指定商品8折</li>
                    <li>有效至 2020/02/15</li>
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
