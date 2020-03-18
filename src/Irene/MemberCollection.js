import React from 'react'

import './I_css/MemberCollection.scss'

import MemberSidebar from './components/MemberSidebar'

function MemberCollection(props) {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <MemberSidebar />
        {/* 會員收藏內容 */}
        <div className="memberedit col-9">
          <h3>我的收藏</h3>
          <hr />
        </div>
      </div>
    </>
  )
}

export default MemberCollection
