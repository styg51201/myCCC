import React from 'react'
import {Link} from 'react-router-dom'
function Bread (){

    return(
        <>
        <div className="sty-bread">
        <div className="row">
          <div className="col-sm-3 col-6">
            <Link to="/getCoupon"><h3>優惠券專區</h3></Link>
          </div>
          <div className="col-6 mobileFilter">
            <button><span>篩選</span></button>
          </div>
        </div>
      </div>
      </>
    )
}

export default Bread