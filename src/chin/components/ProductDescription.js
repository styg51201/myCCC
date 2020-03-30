import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {
  IoIosStarOutline,
  IoIosStar,
} from 'react-icons/io'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    AddCart,
    getShopCart,
    AddCartItem,
    DelCartItem,
    CalShopCart,
    Handle_AddMyFavorite,AddCartNewItem_sendcal} from '../../mao/actions/ShopCartAction'
    
import {addMbLikeData,delMbLikeData} from '../../stacey/actions/couponAction'


import { FiHeart ,FiShoppingBag} from 'react-icons/fi'
import Swal from 'sweetalert2'
function ProductDescription(props){
  
console.log('看我~=',props.data)
const [forMyfavor,setForMyfavor]=useState(false)

const [alertType,setAlertType]=useState('')

//會員
const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0

console.log('mblike',props.mbLike)

const checkAlertType=showTpye=>{
  switch(showTpye){
      case '加入購物車':
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: '已加入購物車',
              showConfirmButton: false,
              timer: 1000
            })
            break
      case '加入我的最愛':
          Swal.fire({
              position: 'center',
              icon:'success',
              title: '已加入我的最愛',
              showConfirmButton: false,
              timer: 1000
            })
            break
            case '已取消我的最愛':
                Swal.fire({
                    position: 'center',
                    icon:'error',
                    title: '已取消我的最愛',
                    showConfirmButton: false,
                    timer: 1000
                  })
                  break
      default:
          break                
  }
}
    return(
        <div className="chin-productname">
        <h6>{props.data[0] ? props.data[0].name : ''}</h6>
        <h5>{props.data[0] ? props.data[0].itemName : ''}</h5>
        <div className="chin-starimg">
          <IoIosStar style={{width:'25px',height:'25px',color:'#FFDD00'}}/>
          <IoIosStar style={{width:'25px',height:'25px',color:'#FFDD00'}}/>
          <IoIosStar style={{width:'25px',height:'25px',color:'#FFDD00'}}/>
          <IoIosStar style={{width:'25px',height:'25px',color:'#FFDD00'}}/>
          <IoIosStar style={{width:'25px',height:'25px',color:'#FFDD00'}}/>
        <span>5.0 (5)</span>
        </div>
        <h4>NT{props.data[0] ? props.data[0].itemPrice : ''}</h4>
        <p>
          {props.data[0] ? props.data[0].itemDescription : ''}
        </p>
        <div className="chin-myfavourite-shopping">
          <div className="chin-myfavourite">
            <div className="chin-shopping">
              <button  onClick={()=>{
                              props.AddCartNewItem_sendcal(props.data[0],props.AddItem) 
                              checkAlertType("加入購物車")
                            }}>加入購物車</button>
              <Link to='/OrderInfo' onClick={()=>{
                              props.AddCartNewItem_sendcal(props.data[0],props.AddItem) 
                              checkAlertType("加入購物車")
                            }}>立即購買</Link>
            </div>
          </div>
          <button className="chin-favourite"  
          onClick={()=>{
            if(mb_id){
              props.mbLike ? props.delMbLikeData(mb_id,props.data[0]) : props.addMbLikeData(mb_id,props.data[0])
            // props.Handle_AddMyFavorite(!props.mbLike,props.data, props.MyFavorite)
            // setForMyfavor(!forMyfavor)
            let info=!props.mbLike?"加入我的最愛":"已取消我的最愛"
            checkAlertType(info)
            }else{
              alert('請先登入')
            }}}>
            <FiHeart className={props.mbLike?'Mao-like-red':''}/>
            <span>{!props.mbLike?"加入我的最愛":"我的最愛"}</span>
          </button>
        </div>
      </div>
    )
}

const mapStateToProps = store => {
  return {
    AddItem: store.AddItem,
    MyFavorite: store.MyFavorite,
    CtrlData: store.ControlDataState,
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      AddCart,
      getShopCart,
      AddCartItem,
      DelCartItem,
      CalShopCart,
      Handle_AddMyFavorite,
      AddCartNewItem_sendcal,
      delMbLikeData,
      addMbLikeData,
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription)
// export default ProductDescription