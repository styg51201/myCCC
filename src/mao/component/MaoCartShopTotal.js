import React, { useState, useEffect } from 'react'
import '../css/mao.scss'
import '../css/MaoCartShopTotal.scss'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  AddCartItem,
  DelCartItem,
  calCart,
  CalShopCartTotal,hadleCoupon,CheckCoupon,cartCoupon
} from '../actions/ShopCartAction'
import $ from 'jquery'
import { FaTicketAlt } from 'react-icons/fa'
import { TiDeleteOutline } from 'react-icons/ti'
import {MaoCouponType} from '../MaoCouponType'
function MaoCartShopTotal(props) {

  const [shipping, setShipping] = useState(100)
  const [discount, setDiscount] = useState(0)
  const [openCoupon, setOpenCoupon] = useState(true)
  //變化總額主要有hook更改,store的小計金額為最後變動
  const [saveStotal,setSaveStotal]=useState(0)
  //變化總額有hook變動
  const [saveTotal,setSaveTotal]=useState(0)
  let buyerTotal = 0

  //會員
  const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0

  function CalTotal() {
    buyerTotal = props.sTotal + shipping - discount
    props.CalShopCartTotal(buyerTotal)
  }
  let LocalUser=localStorage.getItem('userId')||0
  let CheckrouteName = props.match.path
  //選擇折價券
  function showCoupon() {
    if (openCoupon) {
      $('.Mao-couponBox').css({ opacity: 1, zIndex: 1 })
      setOpenCoupon(false)
    } else {
      $('.Mao-couponBox').css({ opacity: 0,zIndex:-5 })
      setOpenCoupon(true)
    }
  }
  useEffect(() => {
    CalTotal()
    props.getShopCart()
    $(document).on('scroll', () => {
      let test = $(document).scrollTop()
      if (test > 120) {
        
        $('.Mao-total-box-fixed').css({
          opacity: 1,
          height: '145px',
          zIndex: 999,
        })
        $('.Mao-sort-ul').css({
          opacity: 1
        })
      } else {
        $('.Mao-total-box-fixed').css({ opacity: 0, height: 0, zIndex: -1 })
        $('.Mao-sort-ul').css({
          opacity: 0
        })
      }
    })

    $('.Mao-total-box')
      .on('mouseenter', () => {
        $('.Mao-total-box').css({ boxShadow: '0px 10px 12px #999' })
      })
      .on('mouseleave', () => {
        $('.Mao-total-box').css({ boxShadow: 'none' })
     }) 
     //得到store的小計金額
     setSaveStotal(props.sTotal)
     //得到store的總額
     setSaveTotal(props.FinalTotal)

     
  }, [])

  console.log('99999',props.cartCouponData)

  useEffect(() => {
    CalTotal()
    // console.log('discount',discount)
    //確保小計金額變動情形,獲取最新的變動
    setSaveStotal(props.sTotal)
    setSaveTotal(props.FinalTotal)
  }, [CalTotal, props.AddItem, props.sTotal])
const totalSort=(
    <ul className="Mao-sort-ul">
    <li className="Mao-line-sortG">
      產品分類選項
    </li>
      <li>
        <Link to="/watch">
          穿戴式裝置
        </Link>
        <div class="Mao-line-sort"></div>
      </li>
      <li>
        <Link to="/headset">
          耳機/喇叭
        </Link>
        <div class="Mao-line-sort"></div>
      </li>
      <li>
        <Link to="/actioncamera">
          運動攝影機
        </Link>
        <div class="Mao-line-sort"></div>
      </li>
      <li>
        <Link to="/surrounding">
          周邊
        </Link>
        <div class="Mao-line-sort"></div>
      </li>
      <li>
        <Link to="/getCoupon">
          優惠券專區
        </Link>
        <div class="Mao-line-sort"></div>
      </li>
      <li>
        <Link to="/stories">
          故事牆
        </Link>
        <div class="Mao-line-sort"></div>
      </li>
    </ul> 
)
  const changeCheckout = (
    <>
      <Link className="Mao-total-box-btn" to="/">
        <div className="Mao-total-show"></div>
        <span style={{ zIndex: 10 }}>繼續購物</span>
      </Link>
        {CheckrouteName == '/OrderInfo' ? (<Link className="Mao-total-box-btn-black" to={props.getErrorBox==0 && LocalUser!=0?"/Orderbill":"/OrderInfo"}
      onClick={()=>{
        {LocalUser==0?alert('請先登入'):props.sendOrder()}
      }}
      >確認結帳
        <div className="Mao-total-show-black"></div>
      </Link>) : ( <Link className="Mao-total-box-btn-black" to="/OrderInfo"
      >前往結帳
        <div className="Mao-total-show-black"></div>
      </Link>)}
      
     
    </>
  )

  // const goshopNow = (
  //   <>
  //     <Link className="Mao-total-box-btn" to="/">
  //       <div className=".Mao-total-show-black"></div>
  //       繼續購物
  //     </Link>
  //   </>
  // )


  const couponType=[
    {
      id:0,
      value:0.6,
      Csort:'全部',
      Cname:null,
      rule:'滿額打折',
      slogan:'全部商品-滿2件打6折',
      payLevel:0,
      amount:1},
    {
      id:1,
      value:0.8,
      Csort:'穿戴式裝置',
      Cname:'GARMIN',
      rule:'滿額打折',
      slogan:'穿戴式裝置分類-滿15000打8折',
      payLevel:15000,
      amount:1},
    {
      id:2,
      value:2000,
      Csort:'運動攝影機',
      Cname:'GoPro',
      rule:'滿額折現',
      slogan:'運動攝影機分類-滿10000折扣2000',
      payLevel:10000,
      amount:1},
    {
      id:3,
      value:0.9,
      Csort:'耳機/喇叭',
      Cname:'SONY',
      rule:'滿件打折',
      slogan:'耳機/喇叭分類-滿3件打9折',
      payLevel:0,
      amount:3}
  ]

  //儲存優惠券種類，主要是拿來做變動執行
  const [couponArr,setCouponArr]=useState([])
  //選擇優惠券時使用的判斷
  const [chooseState,setChooseState]=useState(0)
  const [couponProduct,setCouponProduct]=useState([])
  const [couponMsg,setCouponMsg]=useState('')
  const couponDOM=[]
  let useFilterCoupon=[]
  const couponBox=props.saveCoupon.map((v,i)=>{
    useFilterCoupon.push(v.type)
    couponDOM.push(
      <div onClick={()=>{props.hadleCoupon(v.value,v.type,props.sTotal)
      setDiscount(0)
      filterCoupon(i)
      setChooseState(i+1)
      }} className={`Mao-coupon-text ${chooseState==i+1? 'Mao-coupon-active':''}`}>{v.slogan}</div>
    )
  })

  function filterCoupon(ind){
    setCouponMsg()
    let newCouponType=props.saveCoupon.filter(e=>e!==props.saveCoupon[ind])
    //儲存剩下的折價券，最後結帳時才一併更新
    //目前篩選後的折價券位置存放在total.js裡面 必須傳到orderInfo才可以一同送出
    setCouponArr(newCouponType)
    //優惠券折抵的值
    let judgeCouponValue=props.saveCoupon[ind].value
    //優惠券限定的產品分類
    let judgeCouponCSort=props.saveCoupon[ind].Csort
    //優惠券使用條件
    let judgeCouponRule=props.saveCoupon[ind].rule
    //優惠券是否有指定 品牌 使用條件
    let judgeCouponAssignCname=props.saveCoupon[ind].Cname
    //優惠券使用上的限定數量
    let judgeCouponAmount=props.saveCoupon[ind].amount
    //優惠券使用上的限定金額
    let judgeCouponPayLevel=props.saveCoupon[ind].payLevel
    let judgeCouponMsg=props.saveCoupon[ind].Cname
    // 購物車品項檢查
    let shopCartItems=props.AddItem
    let disCountItems=[]
    //折扣金額
    let discountPay=0
    //存放產品金額
    let productTotal=0
    
    setCouponMsg(judgeCouponMsg)
    shopCartItems.map((v,i)=>{
      
      //判斷是否為指定產品
      // 判斷為真 則表示null為無分類
      let truePrice = v.itemPrice.split('$').join('')
      let finalPrice = truePrice.split(',').join('')
      if(judgeCouponCSort==null ||judgeCouponCSort=='全部'){
        //判斷是有分類別限定
        if(judgeCouponAssignCname==v.name||judgeCouponAssignCname==null||judgeCouponAssignCname=='TRIPLEC'){
          disCountItems.push(v)
          //產品總數量 判斷數量是否符合購物券使用條件
          let productAmount=0
            disCountItems.map((cV,cI)=>{
            productAmount+=cV.count
          })
          //產品金額 判斷是否符合金額門檻
          productTotal+=v.count*finalPrice

          //選擇資料庫門檻
           switch(judgeCouponRule){
            case '一律':
              discountPay = productTotal-(productTotal-judgeCouponValue)
              if(productTotal>=judgeCouponPayLevel){
                setDiscount(discountPay)
                setCouponProduct(disCountItems)
              }
             break
            case '滿額折現':
              discountPay = productTotal-(productTotal-judgeCouponValue)
              if(productTotal>=judgeCouponPayLevel){
                setDiscount(discountPay)
                setCouponProduct(disCountItems)
              }
              break
            case '滿額打折':
              discountPay = productTotal-(Math.round(productTotal*judgeCouponValue))
              if(productTotal>=judgeCouponPayLevel){
                setDiscount(discountPay)
                setCouponProduct(disCountItems)
              }
              break
            case '滿件折現':
              discountPay = productTotal-(productTotal-judgeCouponValue)
              if(productTotal>=judgeCouponPayLevel){
                if(productAmount>=judgeCouponAmount){
                  setDiscount(discountPay)
                  setCouponProduct(disCountItems)
                }
              }
              break
            case '滿件打折':
              discountPay = productTotal-(Math.round(productTotal*judgeCouponValue))
              if(productTotal>=judgeCouponPayLevel){
                if(productAmount>=judgeCouponAmount){
                  setDiscount(discountPay)
                  setCouponProduct(disCountItems)
                }
              }
            default:
              setCouponProduct(disCountItems)
                break
           }
        
           setCouponProduct(disCountItems)
        }else{
          setCouponProduct(disCountItems)
        }
      }else{
          //判斷品牌是否相同
          if(judgeCouponCSort==v.itemCategoryId){
            if(judgeCouponAssignCname==v.name||judgeCouponAssignCname==null){
              disCountItems.push(v)
              //產品總數量
              let productAmount=0

              //獲取符合資格產品的總數量
                disCountItems.map((cV,cI)=>{
                productAmount+=cV.count
              })
              //判斷是否符合金額門檻
              productTotal+=v.count*finalPrice

               switch(judgeCouponRule){
                case '一律':
                  discountPay = productTotal-(productTotal-judgeCouponValue)
                  if(productTotal>=judgeCouponPayLevel){
                    setDiscount(discountPay)
                    setCouponProduct(disCountItems)
                  }
                 break
                case '滿額折現':
                  discountPay = productTotal-(productTotal-judgeCouponValue)
                  if(productTotal>=judgeCouponPayLevel){
                    setDiscount(discountPay)
                    setCouponProduct(disCountItems)
                  }
                  break
                case '滿額打折':
                  discountPay = productTotal-(Math.round(productTotal*judgeCouponValue))
                  if(productTotal>=judgeCouponPayLevel){
                    setDiscount(discountPay)
                    setCouponProduct(disCountItems)
                  }
                  break
                case '滿件折現':
                  discountPay = productTotal-(productTotal-judgeCouponValue)
                  if(productTotal>=judgeCouponPayLevel){
                    if(productAmount>=judgeCouponAmount){
                      setDiscount(discountPay)
                      setCouponProduct(disCountItems)
                    }
                  }
                  break
                case '滿件打折':
                  discountPay = productTotal-(Math.round(productTotal*judgeCouponValue))
                  if(productTotal>=judgeCouponPayLevel){
                    if(productAmount>=judgeCouponAmount){
                      setDiscount(discountPay)
                      setCouponProduct(disCountItems)
                    }
                  }
                default:
                  setCouponProduct(disCountItems)
                    break
               }
            }
            
          }else{
            setCouponProduct(disCountItems)
          }
       
      }
  
    })
    
    //計算總額會扣的折扣金額，存放在hooks裡面
    let hadle_discountNum=props.FinalTotal
}
useEffect(()=>{
  // props.CheckCoupon(couponType)
  // console.log('props.saveCoupon',props.saveCoupon)

  if(mb_id){
    props.cartCoupon(mb_id)
  }

},[])

let cartItemText=[]
const shopCartItemText=props.AddItem.map((v,i)=>{
  cartItemText.push(
    <Link to={`/commidty/${v.itemId}`}>
    <div className="Mao-shopCart-item-text">
    <img className="chin-watchs" src={`/chin-img/images/${v.itemName}/${v.itemImg}`} alt=""/>
    <div>
    <p>{v.itemName}</p>
      <p>價格：{v.itemPrice}<span className="ml-3">數量：{v.count}</span></p>
    </div>
      
    </div>
    </Link>
  )
})
let couponTargetDOM=[]
const couponTarget=couponProduct.map((v,i)=>{
  couponTargetDOM.push(
      <li className="Mao-coupon-list-img">
      <img className="Mao-coupon-img" src={`/chin-img/images/${v.itemName}/${v.itemImg}`} alt=""/>
      <p>{v.itemName}</p>
      </li>
  )
})
const NofixedDisplay = (
    <>
      <div className="Mao-total-box">
        <p className="Mao-total-box-title">
          <b>TOTAL</b>
        </p>
        <div className="Mao-total-box-title-info">
          <div>
            <b>運費</b>
            <span className="float-right">{shipping}</span>
          </div>
          <div>
            <b>小計金額</b>
            <span className="float-right">{props.sTotal}</span>
          </div>
          <div>
            <b>活動折扣</b>
            <span className="float-right">{discount}</span>
          </div>
          {CheckrouteName=='/OrderInfo'?( <label htmlFor="coupon" className="Mao-total-box-title-coupon">
            <div>
              <Link
                className="Mao-total-box-btn Mao-total-box-btn-border-b"
                onClick={() => {
                  showCoupon()
                }}
              >
                <FaTicketAlt />
                <b className="mx-2">選擇折價券</b>
              </Link>
              <div className="Mao-couponBox">
                <TiDeleteOutline
                  className="Mao-coupon-exit"
                  onClick={() => {
                    showCoupon()
                    setDiscount(0)
                  }}
                />
                <div style={{ margin: '15px' }}></div>
                <div className="Mao-coupon-text-box">
                <div>
                  <div className="Mao-coupon-DOM">
                  {couponDOM}
                  </div>
                  <ul className="Mao-coupon-ullist-img">
                    {couponTargetDOM}
                  </ul>  
                </div>
                <div className="d-flex">
                <button className="Mao-total-box-btn-black" onClick={()=>{
                  showCoupon()
                  props.postDiscount(discount)
                  {discount==0?props.CatchCoupon(couponType):props.CatchCoupon(couponArr)}
                }
                    }>確認<div className="Mao-total-show-black"></div>
                </button>
                <div style={{width:'270px',marginLeft:'35px',marginTop:'15px'}}>
                <p className="m-0">限定品牌： </p>
                <b style={{fontSize:'22px'}}>{couponMsg==null?'全部系列':couponMsg}</b>
               </div>
                </div>
                
                
                  
                </div>
              </div>
            </div>
          </label>):''}
         
        </div>
        <p style={{ fontSize: '18px' }}>
          <b>總金額</b>
          <span className="float-right">{props.FinalTotal}</span>
        </p>
        {changeCheckout}
        {CheckrouteName == '/member/ShopCartList' ?totalSort: ( <div className="Mao-shopCart-item-text-box">
       {cartItemText}
        </div>)}
       
        
      </div>
    </>
  )
  // ............................fixed...................
  const fixedDisplay = (
    <>
      <div className="Mao-total-box-fixed">
        <div className="container">
          <div className="Mao-container-box">
            <p className="Mao-total-box-title-fixed">
              <b>TOTAL</b>
            </p>
            {/* total內容 */}
            <div className="Mao-total-content-fixed">
              {/* 運費 */}
              <div className="Mao-total-ship-fixed">
                <b>運費</b>
                <span>{shipping}</span>
              </div>
              {/* 活動折扣 */}
              <div className="Mao-total-coupon-fixed">
                <span className="mx-4">
                  <b>活動折扣</b>
                  {discount}
                </span>
              </div>
              {/* 小計金額 */}
              <div className="Mao-total-sCount-fixed">
                <b>小計金額</b>
                <span id="sTotal">{props.sTotal}</span>
              </div>
              <p className="Mao-total-box-totalNum-fixed">
                <b>總金額</b>
                <span className="mx-2">{props.FinalTotal}</span>
              </p>
            </div>
          </div>
          {/* ----------------- */}
          <div className="Mao-total-box-total-fixed-btn">
            {CheckrouteName == '/OrderInfo' ? (
              <Link className="Mao-total-box-btn-fixed-goshop" to="/">
                繼續購物
              </Link>
            ) : (
              <Link className="Mao-total-box-btn-fixed" to="/OrderInfo">
                前往結帳
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      {fixedDisplay}
      {NofixedDisplay}
    </>
  )
}
// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return {
    //購物車內容
    data: store.getShop,
    AddItem: store.AddItem,
    Cart: store.displayShopCart,
    sTotal: store.calculator,
    FinalTotal: store.calculator_total,
    saveDiscount:store.saveDiscount,
    // saveCoupon:store.saveCoupon,
    saveCoupon:store.cartCouponData,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,
      AddCart,
      AddCartItem,
      DelCartItem,
      calCart,
      CalShopCartTotal,hadleCoupon,CheckCoupon,cartCoupon
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MaoCartShopTotal)
)
