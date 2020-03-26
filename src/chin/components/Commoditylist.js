import React, { useState, useEffect } from 'react'
import Features from '../small components/Features'
import Brand from '../small components/Brand'
import Price from '../small components/Price'
import Discount from '../small components/Discount'
import { withRouter } from 'react-router-dom'


//redux
import { connect ,useDispatch } from 'react-redux'



function Commoditylist(props) {


  const dispatch = useDispatch()
  useEffect(()=>{
    return ()=>dispatch({type:'SHOW_DISCOUNT',value:{isShow:false,value:{}}})
  },[])

  
  let nameList = []
  for (let i = 0; i < props.data.length; i++) {
    if (nameList.indexOf(props.data[i].name) === -1) {
      nameList.push(props.data[i].name)
    }
  }
  nameList.sort()
  return (
    <ul className="chin-commoditylist">
      <Price price={props.data}/>
      <Brand list={nameList} />
      <Features />
      {props.showDiscount.isShow ? <Discount data={props.showDiscount.value}/> : ''}
      
    </ul>
  )
}



// 選擇對應的reducer
const mapStateToProps = store => {
  return { showDiscount: store.showDiscount, 
           }
}


export default withRouter(
  connect(mapStateToProps)(Commoditylist)
)


