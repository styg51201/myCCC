import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FiShoppingBag} from 'react-icons/fi'
import '../css/mao.scss'
function ShopCartIcon(props){
  console.log('看ICON的PROPS',props)



    return(<>
    <div className="Mao-icon-box">
    <Link to="/memberedit/ShopCartList">
        <FiShoppingBag
          className="chin-three-position2" style={{width:'100px',height:'100px'}}/>
            <div className="Mao-icon-text">
              <span>{props.AddItem.length}</span>
            </div>
     </Link>
    </div>
      
    </>)
}
const mapStateToProps = store => {
    return {
      //購物車內容
      AddItem: store.AddItem,
    }
  }
  export default connect(mapStateToProps, null)(ShopCartIcon)
