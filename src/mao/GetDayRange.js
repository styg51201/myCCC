import React from 'react'
  
const GetDayRange = ()=>{
//月
function getMonth() {
    let MonthBox = []
    for (let i = 1; i <= 12; i++) {
      MonthBox.push(<option value={i}>{i}</option>)
    }
    return MonthBox
  }
  //年
  function getYear() {
    let yearBox = []
    let MinDate = new Date()
    let year = MinDate.getFullYear()
    for (let i = year - 5; i <= year + 5; i++) {
      yearBox.push(<option value={i}>{i}</option>)
    }
    return yearBox
  }



  
  return (
      {getMonth,getYear}
  )
}

export default GetDayRange