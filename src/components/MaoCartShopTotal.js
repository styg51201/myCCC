import React from 'react'

function MaoCartShopTotal() {
  return (
    <>
      <div
        className="border bg-white"
        style={{
          height: '415px',
          width: '300px',
          marginLeft: '10px',
          padding: '10px',
        }}
      >
        <p style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
          <b>TOTAL</b>
        </p>
        <p style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
          <b>運費</b>
        </p>
        <p style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
          <b>小計金額</b>
        </p>
        <p style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
          <b>活動折扣</b>
        </p>
        <p style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
          <b>折價券輸入</b>
        </p>
        <input />
        <p style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
          <b>總金額</b>
        </p>
        <button>繼續購物</button>
        <button>前往結帳</button>
      </div>
    </>
  )
}

export default MaoCartShopTotal
