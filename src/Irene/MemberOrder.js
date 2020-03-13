import React,{useState} from 'react'
import './I_css/MemberLogin.css'
import { Link } from 'react-router-dom'
import { Form, FormControl} from 'react-bootstrap'
// import MemberSidebar from './components/MemberSidebar'
import './I_css/MemberEdit.css'
import Nav from 'react-bootstrap/Nav'
import MemberSidebar from './components/MemberSidebar'
import InputGroup from 'react-bootstrap/InputGroup'
import DatePicker from ''


function MemberOrder() {
  const [startDate, setStartDate] = useState(new Date(""));
  const [endDate, setEndDate] = useState(new Date(""));
  return (
    <>
     <div className="row d-flex">
      <MemberSidebar/> 
        {/* 會員訂單 */}
        
        <div className="memberorder col">
        <h3>交易紀錄</h3>
        <hr></hr>
        <div className="d-flex">
        <span>快速查詢：</span>
        <Form>
        {/* 單選 */}
          {['radio'].map(type => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="1個月內訂單" type={type} name={type}/>
      <Form.Check inline label="未出貨訂單" type={type} name={type}/>
      <Form.Check inline label="1年內訂單" type={type} name={type}/> 
    </div>
  ))}
</Form>
</div>
<div className="">
<span>訂單時間：</span>
<div className=""> 
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />至
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
</div>
</div>
          <table></table>
        
        </div>
        </div>         
    </>
  )
}

export default MemberOrder
