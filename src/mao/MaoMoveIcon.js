import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { FaShoppingBasket } from 'react-icons/fa'

/*
0 % { transform: scale(1); }
25 % { transform: scale(.97); }
35 % { transform: scale(.9); }
45 % { transform: scale(1.1); }
55 % { transform: scale(.9); }
65 % { transform: scale(1.1); }
75 % { transform: scale(1.03); }
100 % { transform: scale(1); }
`*/

function MaoMoveIcon() {
  const CartNoItem = (
    <div className="Mao-CartNoItem-shoplist">
    <Link to="/watch">
    <h3>趕快去尋找最愛的商品吧！</h3>
    </Link>
      <FaShoppingBasket className="Mao-Like-img-shoplist bounce" />
    </div>
  )
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
    <div onClick={() => toggle(!state)}>
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.8, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate(x => `scale(${x})`),
        }}
      >
        {CartNoItem}
      </animated.div>
    </div>
  )
}

export default MaoMoveIcon
