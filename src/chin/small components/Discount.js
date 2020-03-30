/*-----------------------Commoditylist.js的優惠--------------------------*/
import React,{useState,useEffect} from 'react'
import { withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {} from '../../stacey/actions/couponAction'

//classnames
import classNames from 'classnames'
import { filter } from 'bluebird'

function Discount(props){

    const [dis,setDis] = useState(true)

    const DiscountClassName= classNames('chin-discount',{active:dis})


    let object,rule,discount

        if(props.data.cp_id){
            //設定優惠字樣
            //目標
            switch(props.data.cpr_object){
                case 0:
                object = "全部商品"
                break
                case 1:
                object = "穿戴式裝置分類"
                break
                case 2:
                object = "耳機/喇叭分類"
                break
                case 3:
                object = "運動攝影機分類"
                break
                case 4:
                object = "周邊商品分類"
                break
                case 5:
                object = "指定商品"
                break
            }
            //條件
          
            switch(props.data.cpr_rule){
                case 0:
                rule = "一律"
                break
                case 1:
                rule = `滿${props.data.cpr_ruleNum}件`
                break
                case 2:
                rule = `滿${props.data.cpr_ruleNum}元`
                break
            }
            //金額
            
            switch(props.data.cpr_discount){
                case 0:
                discount = `打${props.data.cpr_discountNum}折`
                break
                case 1:
                discount = `折扣${props.data.cpr_discountNum}元`
                break
            }
        }
            
     
    

      
    return(
        <>
        <li className={DiscountClassName}>
            <div className="chin-price4 sty-dis" onChange={()=>{setDis(!dis)}}>
                <span>優惠</span>
                <img src="./chin-img/chevron-down-black.svg" alt=""/>
            </div>
            <div>
                <ul>
                    { props.data.cp_id 
                    ? 
                    <li className="chin-brand-checkbox"  key={props.data.cpi_cp_id}>
                        <label for={props.data.cpi_cp_id} className="chin-label" > 
                        [ {props.data.cp_vendor} ] - {object}{rule}{discount}
                        </label>
                    </li>
                    :
                    '' }
                </ul>
            </div>
        </li>
        </>
    )
}


// 選擇對應的reducer
const mapStateToProps = store => {
    return { 
              }
  }
  
  //action
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
     
    },dispatch)
  }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Discount))