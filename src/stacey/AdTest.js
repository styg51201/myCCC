import React ,{useEffect ,useState}from 'react'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter } from 'react-router-dom'
import styled from 'styled-components';

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {fromServerAdData,showMbData,addMbData} from './actions/couponAction'

function AdTest (props){

    useEffect(()=>{
        props.fromServerAdData()
    },[])

    const Div = styled.div`
        width:80%;
        height:500px;
        img{
            width:100%;
            height:100%
        }

    `
    
    let collectList =[]
    
    props.mbData.map((val)=>{
        let ind =collectList.indexOf(val.p_category)
        if(ind === -1 )collectList.push(val.p_category)
    })

    const adForAll = props.adData.map((val,ind)=>{
        if(!val.planGroup)
        return <img src={`/sty-img/${val.adImg}`}/>
    })
    const adForGroup = props.adData.map((val,ind)=>{
        if(!val.planGroup){
            return <img src={`/sty-img/${val.adImg}`}/>
        
        }else if( collectList.indexOf(val.groupCollectItems) > -1){
            return <img src={`/sty-img/${val.adImg}`}/>
        }
    })
    console.log(props)

    return (
        <>
            <button onClick={()=>{props.addMbData({mc_mb_id:5,mc_p_id:13,vid:5,p_category:2})}}>收藏</button>
            <Div>
            {collectList?adForGroup:adForAll}
            </Div>
        </>
    )
}

// 選擇對應的reducer
const mapStateToProps = store => {
    return { adData: store.adData ,
            mbData:store.memberData
              }
  }
  
  //action
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        fromServerAdData,showMbData,addMbData
    },dispatch)
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AdTest))