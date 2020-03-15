import React, { useEffect } from 'react'
import {productList} from './ProductList'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getShopCart,AddCart,realCart } from '../actions/index'


function ProductSlide(props){
useEffect(()=>{
    props.getShopCart()
},[])


  // 顯示購物車內容
  let checkBox=[]
  let amount=0;
  let RealCart=[]

  const shopcartItem=props.AddItem.map((v,i)=>{
    // let sameVal=el=>el=v.value
    if(checkBox.indexOf(v.value)==-1){
      checkBox.push(v.value)
      let val=v.value
      RealCart.push({pId:val,count:1})
    }else{
      RealCart.map((val,index)=>{
        if(val.pId==v.value){
          val.count+=1
        }
      })
    }
  })

 const productItem = productList.map((v,i)=>{
    return (
<>
     <div className="card border p-3 d-flex flex-column align-items-center justify-content-between m-3" style={{width:"15rem"}}>
            <img className="my-2" src="https://fakeimg.pl/50/"style={{width:"150px",height:"150px"}} alt="..."/>
                <h4 className="card-title">{v.pName}</h4>
                <p>${v.price}</p>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <button className="btn btn-primary" onClick={()=>
                {
                    props.realCart(RealCart)
                    props.AddCart(v.pId)
                }}>加入購物車</button>
            </div>
        </>
    )
})
    
    
    
return (
        <>
        <div className="bg-white p-3 d-flex flex-wrap" style={{width:"1300px"}}>{productItem}</div>
</>    
)
}




// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡

const mapStateToProps = store => {
    return {
      data: store.getShop,
      AddItem:store.AddItem
    }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getShopCart,AddCart,realCart
      },
      dispatch
    )
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSlide))
