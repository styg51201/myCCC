import React,{useState,useEffect, useReducer} from 'react'
//classnames
import classNames from 'classnames'
import {
  IoIosStarOutline
} from 'react-icons/io'
import {BrowserRouter as Router,Route,Link,Switch,withRouter} from 'react-router-dom'
//redux
import {connect} from 'react-redux'
//action
import {bindActionCreators} from 'redux'
import {formServerUsersData} from '../actions/itemsActions'

function UserComment(props){
  console.log(props)
  const [postacomment,setPostacomment]=useState(false)

const PostacommentClassName= classNames('chin-usercomment-fractionalstars',{active:postacomment})
const itemId = props.match.params.itemId ? props.match.params.itemId : ''
console.log(itemId)

useEffect(()=>{
  props.formServerUsersData(itemId)
},[])


    return(
        <>
        <div className={PostacommentClassName}>
        <h3>用戶評論</h3>
        <div className="chin-usercomment">
          <div className="chin-fractionalstars">
            <div className="chin-fractional">
              <p>4.0</p>
              <img src="/chin-img/star.svg" alt="" />
              <img src="/chin-img/star.svg" alt="" />
              <img src="/chin-img/star.svg" alt="" />
              <img src="/chin-img/star.svg" alt="" />
              <img src="/chin-img/star.svg" alt="" />
              <p>6則評論</p>
            </div>
            <div className="chin-commentstars">
              <div>
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                5
              </div>
              <div>
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                4
              </div>
              <div>
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                3
              </div>
              <div>
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                2
              </div>
              <div>
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                <img src="/chin-img/star.svg" alt="" />
                1
              </div>
            </div>
          </div>
          <div className="chin-sort-discuss">
            <div className="chin-discuss">
              <button onClick={()=>{setPostacomment(!postacomment)}}>發表評論</button>
            </div>
          </div>
        </div>
        <div className="chin-discusspost">
            <h3>發表評論</h3>
            <div className="chin-disclopsaa">
              <div>
                <p>評分</p>
                <div>
                  <IoIosStarOutline style={{width:'20px',height:'20px'}}/>
                  <IoIosStarOutline style={{width:'20px',height:'20px'}}/>
                  <IoIosStarOutline style={{width:'20px',height:'20px'}}/>
                  <IoIosStarOutline style={{width:'20px',height:'20px'}}/>
                  <IoIosStarOutline style={{width:'20px',height:'20px'}}/>
                </div>
              </div>
              <div>
                <p>標題</p>
                <input type="text" />
              </div>
              <div>
                <p>內容</p>
                <textarea type="text" />
              </div>
            </div>
            <div className="chin-loopkpi">
              <button>取消</button>
              <button>發表評論</button>
            </div>
        </div>
        <div className="chin-sortspan">
            <button>
              <span>排序</span>
              <img src="/chin-img/chevron-down-black.svg" alt="" />
            </button>
        </div>
      </div>
      {props.UserData.map((val,ind)=>{
        return(
      <div className="chin-avatar-name-p">
        <div className="chin-avatar-name">
          <div className="chin-avatar">
            <img src={`/chin-img/${val.img}`} alt="" />
          </div>
          <div>
            <img src="/chin-img/star.svg" alt="" />
            <img src="/chin-img/star.svg" alt="" />
            <img src="/chin-img/star.svg" alt="" />
            <img src="/chin-img/star.svg" alt="" />
            <img src="/chin-img/star.svg" alt="" />
            <h6>{val.userName}</h6>
            <span>1個月前</span>
          </div>
          <div className="chin-rwd-avatar-circle-circle">
            <span className="chin-rwd-avatar-circle"></span>
            <span className="chin-rwd-avatar-circle"></span>
            <span className="chin-rwd-avatar-circle"></span>
          </div>
        </div>
        <div>
          <p>
          {val.commentText}
          </p>
          <div className="chin-reply">
            <a href="">回復</a>
            <a href="">有幫助</a>
            <a href="">檢舉</a>
          </div>
        </div>
      </div>
      )
    })}
      </>
    )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { UserData:store.getUsersData,
         }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      formServerUsersData,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserComment)
)