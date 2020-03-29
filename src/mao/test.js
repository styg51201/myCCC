import React from 'react'
import {Spring} from 'react-spring/renderprops'

function Test(){
  const sqr=(
    <div style={{width:'100px',height:'100px',border:'1px solid #000'}}></div>
  )
  return(
<Spring
  from={{ value: 0,reset:true }}
  to={{ value: 1300,reset:true}}>
  {props => <div style={{width:props.value+'px',height:'100px',border:'1px solid #000'}}></div>}
</Spring>
  )



}

export default Test
