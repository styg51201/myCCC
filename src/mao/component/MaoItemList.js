import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    AddCart,
    getShopCart,
    AddCartItem,
    DelCartItem,
    CalShopCart,
    Handle_AddMyFavorite,AddCartNewItem_sendcal} from '../../mao/actions/ShopCartAction'
import { FiHeart ,FiShoppingBag} from 'react-icons/fi'
import Swal from 'sweetalert2'
function Commoditycomponents(props){

const [forMyfavor,setForMyfavor]=useState(false)

const [alertType,setAlertType]=useState('')

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
        <>
              <div className="chin-commodity-item">
                    <ul className="chin-star-heart-bag">
                        <li><img className="chin-star" src="/chin-img/star.svg" alt=""/></li>
                        <li><img className="chin-star" src="/chin-img/star.svg" alt=""/></li>
                        <li><img className="chin-star" src="/chin-img/star.svg" alt=""/></li>
                        <li><img className="chin-star" src="/chin-img/star.svg" alt=""/></li>
                        <li><img className="chin-star" src="/chin-img/star.svg" alt=""/></li>
                        <li className="chin-heart-bag">
                        
                        <FiHeart className={`chin-heart ${forMyfavor?'Mao-like-red':''}`}  
                        onClick={()=>{
                          props.Handle_AddMyFavorite(!forMyfavor,props.data, props.MyFavorite)
                          setForMyfavor(!forMyfavor)
                          let info=!forMyfavor?"加入我的最愛":"已取消我的最愛"
                          checkAlertType(info)
                          }
                                }/>
                            <FiShoppingBag  className="chin-bag"  onClick={()=>{
                              props.AddCartNewItem_sendcal(props.data,props.AddItem)
                              props.sendFunc(!props.forChange)
                              checkAlertType("加入購物車")
                            }}
                            />
                        </li>
                    </ul>
                    <Link to={'/commidty/'+props.data.itemId}>
                      <img className="chin-watchs" src={`/chin-img/images/${props.data.itemName}/${props.data.itemImg}`} alt=""/>
                      <h6>{props.data.name}</h6>
                      <h4>{props.data.itemName}</h4>
                      <h5>NT{props.data.itemPrice}</h5>
                      
                    </Link>
            </div>
          
        </>
    )
}


// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
    return {
      AddItem: store.AddItem,
      MyFavorite: store.MyFavorite,
      CtrlData: store.ControlDataState,
    }
  }
  
  //action
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
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Commoditycomponents)
  

// export default Commoditycomponents