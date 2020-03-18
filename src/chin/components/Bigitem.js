import React,{useState,useEffect} from 'react'


function Bigitem(props){
  console.log(props.data.multiple.length)
  console.log(props.data.multiple)
    let imgUrl = props.data.data[0] ? `/chin-img/images/${props.data.data[0].itemImg}` : ''
  const [properties,setProperties] = useState(props.data.multiple)
  const [property,setProperty]=useState(props.data.multiple[0])

  const nextProperty = () => {
    const newIndex = property.multipleImageImg+1;
    console.log(newIndex)
    setProperty(newIndex)
  }
  const prevProperty = () => {
    console.log('456')
    const newIndex = property.multipleImageImg-1;
    setProperty(newIndex)
    console.log(newIndex)
  }


    return(
        <>
        <div>
              <div className="chin-bigitem">
                <img src={imgUrl} alt="" />
              </div>
              <div className="chin-smallitem">
                <img src="/chin-img/chevron-left.svg" alt="" onClick={() =>nextProperty()} className="chin-smallitem-Arr"/>
                {props.data.multiple.map((val,ind)=>{
                                return(
                        <img key={ind} src={`/chin-img/images/${val.multipleImageImg}`} className="chin-smallitem-img"/>
                        )
                                })}
                <img src="/chin-img/chevron-right.svg" alt="" onClick={() =>prevProperty()} className="chin-smallitem-Arr"/>
              </div>
              <div className="chin-rwd-circle-circle">
                <span className="chin-rwd-circle"></span>
                <span className="chin-rwd-circle"></span>
                <span className="chin-rwd-circle"></span>
                <span className="chin-rwd-circle"></span>
              </div>
            </div>
        </>
    )
}

export default Bigitem