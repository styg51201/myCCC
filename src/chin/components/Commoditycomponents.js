import React from 'react'


function Commoditycomponents(props){
    console.log(props.data.name)
    return(
       <div className="chin-commodity">
        <div className="chin-commodity-item">
            <ul className="chin-star-heart-bag">
                <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                <li className="chin-heart-bag">
                    <img className="chin-heart" src="./chin-img/heart.svg" alt=""/>
                    <img className="chin-bag" src="./chin-img/shopping-bag.svg" alt=""/>
                </li>
            </ul>
            <img className="chin-watch" src={`./chin-img/images/${props.data.itemImg}`} alt=""/>
            <h6>{props.data.name}</h6>
            <p>{props.data.itemName}</p>
            <h5>NT${props.data.itemPrice}</h5>
        </div>
    </div>
    )
}



export default Commoditycomponents