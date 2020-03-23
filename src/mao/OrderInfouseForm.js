import React, { useState, useEffect } from 'react'

const OrderInfouseForm= (Callback,validate)=>{

const [values,setValues]=useState ({buyer_name:'',buyer_mobile:'',buyer_adress:'',invoiceType:'個人電子發票',shipping:'黑貓宅急便',paymentType:'貨到付款',shipCost:'',discount:'',total:'',orderId:'',taxNo:0})

const [errors,setErrors]=useState({buyer_name:'',buyer_mobile:'',buyer_adress:'',invoiceType:'',shipping:'',paymentType:'',shipCost:'',discount:0,total:'',taxNo:0})

const [isSubmit,setIsSubmit]=useState(false)


        const hadnleChange = e=>{
        const {name, value}=e.target
        console.log({values})
        setValues({
          ...values,
          [name]:value
        })
      }
      
      const handleSubmit=e=>{
        e.preventDefault()
        // 處理錯誤
        setErrors(validate(values))
        // Callback()
        setIsSubmit(true)
      }




useEffect(()=>{
    if(Object.keys(errors).length===0 & isSubmit){
        Callback()
    }
},[errors])

      
    return {
        hadnleChange,
        handleSubmit,
        values,
        errors
    }

}


export default OrderInfouseForm