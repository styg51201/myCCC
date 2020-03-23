
function ValidateForm(values){

let errors={};

// buyer_name 字數不能小於1
if(values.buyer_name.length<2){
    errors.buyer_name="名字不能空白"
}else if(/[0-9]|\W/.test(values.buyer_name)){
    errors.buyer_name="名字不能為數字或符號"
}
// buyer_mobile 字數只能等於10
if(values.buyer_mobile.length==0){
    errors.buyer_mobile="電話號碼不能為空白"
}else if(!/^09[0-9]\d{7}$/.test(values.buyer_mobile)){
    errors.buyer_mobile="電話號碼格式有誤，請以09xxxxxxxx輸入"
}
// buyer_adress 不能為空白
if(!values.buyer_adress){
    errors.buyer_adress="地址不能空白"
}
// paymentType 不能為空白
if(!values.paymentType){
    errors.paymentType="請選擇付款方式"
}
// shipping 不能為空白
if(!values.shipping){
    errors.shipping="請選擇運送方式"
}
// invoiceType 
// shipCost

// discount

// total
return errors
}

export default ValidateForm