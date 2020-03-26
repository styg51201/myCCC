/*-----------------------Commoditylist.js的優惠--------------------------*/
import React,{useState,useEffect} from 'react'
import { withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {fromServerMemberCouponData} from '../../stacey/actions/couponAction'

//classnames
import classNames from 'classnames'
import { filter } from 'bluebird'

function Discount(props){

    const [discount,setDiscount] = useState(false)
    const DiscountClassName= classNames('chin-discount',{active:discount})

    useEffect(()=>{
        props.fromServerMemberCouponData()
      },[])
<<<<<<< HEAD
      console.log(props.couponData)


    //   const couponLi = props.couponData.map((val,ind)=>{

    //     //設定優惠字樣
    //     //目標
    //     let object = ""
    //     switch(val.cpr_object){
    //         case 0:
    //         object = "全部商品"
    //         break
    //         case 1:
    //         object = "穿戴式裝置分類"
    //         break
    //         case 2:
    //         object = "耳機/喇叭分類"
    //         break
    //         case 3:
    //         object = "運動攝影機分類"
    //         break
    //         case 4:
    //         object = "周邊商品分類"
    //         break
    //         case 5:
    //         object = "指定商品"
    //         break
    //     }
    //     //條件
    //     let rule = ""
    //     switch(val.cpr_rule){
    //         case 0:
    //         rule = "一律"
    //         break
    //         case 1:
    //         rule = `滿${val.cpr_ruleNum}件`
    //         break
    //         case 2:
    //         rule = `滿${val.cpr_ruleNum}元`
    //         break
    //     }
    //     //金額
    //     let discount = ""
    //     switch(val.cpr_discount){
    //         case 0:
    //         discount = `打${val.cpr_discountNum}折`
    //         break
    //         case 1:
    //         discount = `折扣${val.cpr_discountNum}元`
    //         break
    //     }

    //     return ( <li className="chin-brand-checkbox"  key={val.cpi_cp_id}>
    //     <input name={val.cpi_cp_id} id={val.cpi_cp_id} value={val.cp_vendor+'-'+object} type="checkbox" />
    //     <label for={val.cpi_cp_id} className="chin-label" onClick={(e)=>{e.stopPropagation()}}> 
    //     <div className="chin-box"></div>
    //     [ {val.cp_vendor} ] - {object}{rule}{discount}
    //     </label>
           
    // </li>)


    //   })


      const routeChange=()=> {
        let path = `/onSale`;
        props.history.push(path)
      }

      const filter = function(e) {
        // console.log(e.target.value)

        let vendor =  e.target.value.split('-')[0] 
        let category =  e.target.value.split('-')[1] 
        
        console.log(category)

        let path =null
        switch(category){
            case '穿戴式裝置分類 || 全部商品':
                path = '/watch'
            break
            case '耳機/喇叭分類':
                path = '/watch'
            break
            case '運動攝影機分類':
                path = '/watch'
            break
            case '周邊商品分類':
                path = '/watch'
            break
        }

        // props.history.push(path)

      }


=======
    
>>>>>>> b9083654eaa1436636c14400938fcf273aa6a5a8

    return(
        <>
        <li className={DiscountClassName}>
            <div className="chin-price4" onChange={()=>{setDiscount(!discount)}}>
                <span>優惠</span>
                <img src="./chin-img/chevron-down-black.svg" alt=""/>
            </div>
            <div>
<<<<<<< HEAD
                <ul onClick={(e)=>filter(e)}>
                {/* {couponLi} */}
                </ul>
=======
                
>>>>>>> b9083654eaa1436636c14400938fcf273aa6a5a8
            </div>
        </li>
        </>
    )
}


// 選擇對應的reducer
const mapStateToProps = store => {
    return { couponData: store.memberCouponFilterData
              }
  }
  
  //action
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        fromServerMemberCouponData
    },dispatch)
  }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Discount))