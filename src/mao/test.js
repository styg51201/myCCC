import React from 'react'

funcion testRR(){
const invoiceType=[
  {type:'personal-invoice',name:'個人電子發票'},
  {type:'donate',name:'捐贈發票'},
  {type:'company',name:'公司戶電子發票'}
]
const invoiceDOM=[]
const invoiceBox=invoiceType.map((v,i)=>{
  payTypeDOM.push(
    <div className="custom-control custom-radio mr-5">
<input
  type="radio"
  className="custom-control-input"
  name="invoice"
  id={v.type}
  onClick={(e, str) => {
    getformInfo(e, 'invoice')
    setOpentaxNo(false)
  }}
/>
<label
  className="custom-control-label"
  htmlFor={v.type}
>
  {v.name}
</label>
</div>
  )
})

 
<div className="custom-control custom-radio mr-5">
<input
  type="radio"
  className="custom-control-input"
  name="invoice"
  id="personal-invoice"
  onClick={(e, str) => {
    getformInfo(e, 'invoice')
    setOpentaxNo(false)
    // setInvoiceType(1)
  }}
  // checked={invoiceType == 1 ? true : false}
/>
<label
  className="custom-control-label"
  htmlFor="personal-invoice"
>
  個人電子發票
</label>
</div>
<div className="custom-control custom-radio mr-5">
<input
  type="radio"
  className="custom-control-input"
  name="invoice"
  id="donate"
  onClick={(e, str) => {
    getformInfo(e, 'invoice')
    setOpentaxNo(false)
    // setInvoiceType(2)
  }}
  // checked={invoiceType == 2 ? true : false}
/>
<label className="custom-control-label" htmlFor="donate">
  捐贈發票
</label>
</div>
<div className="custom-control custom-radio">
<input
  type="radio"
  className="custom-control-input"
  name="invoice"
  id="company"
  onClick={(e, str) => {
    getformInfo(e, 'invoice')
    setOpentaxNo(true)
    // setInvoiceType(3)
  }}
  // checked={invoiceType == 3 ? true : false}
/>
<label className="custom-control-label" htmlFor="company">
  公司戶電子發票
</label>
</div>
</div>



}

export default testRR