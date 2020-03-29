import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import { Form, Button, Table } from 'react-bootstrap'

import MemberSidebar from './components/MemberSidebar'
import './I_css/MemberOrder.scss'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaInfoCircle } from 'react-icons/fa'
import $ from 'jquery'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getServerMemberOrder } from './actions/memberAction'

function MemberOrder(props) {
  console.log('props', props.data)
  // console.log('orderdata', orderdata)

  const [startDate, setStartDate] = useState(new Date('2020/01/01'))
  const [endDate, setEndDate] = useState(new Date(new Date()))
  let orderdata = JSON.stringify(props.data)
  console.log('orderdata', orderdata)
  let created_at = props.data[0].created_at ? props.data[0].created_at : ' '
  console.log('created_at ', created_at)

  console.log(created_at)
  let orderId = props.data[0].orderId ? props.data[0].orderId : ' '
  let outStatus = props.data[0].outStatus ? props.data[0].outStatus : ''

  useEffect(() => {
    // $('.memberorderdetail').click(() => alert('click'))
    props.getServerMemberOrder()
  }, [])

  return (
    <>
      <div className="row d-flex">
        <MemberSidebar />
        {/* 會員訂單 */}

        <div className="memberorder col">
          <h3>交易紀錄</h3>
          <hr></hr>
          <div className="memberorderquery">
            <div className="d-flex">
              <span>快速查詢：</span>
              <Form>
                {/* 單選 */}
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="1個月內訂單"
                      type={type}
                      name={type}
                    />
                    <Form.Check
                      inline
                      label="未出貨訂單"
                      type={type}
                      name={type}
                    />
                    <Form.Check
                      inline
                      label="1年內訂單"
                      type={type}
                      name={type}
                    />
                  </div>
                ))}
              </Form>
            </div>
            <div className="d-flex">
              <span>訂單時間：</span>
              <div className="">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  maxDate={endDate}
                />
                <span>至</span>
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
            <div>
              <span>訂單編號：</span>
              <input type="text"></input>
            </div>
            <div className="text-right">
              <Button className="querysubmit text-right" variant="dark">
                查詢
              </Button>
            </div>
          </div>
          <div className="irene_memberorder_list">
            <Table>
              {/* 抓取訂單資料 */}
              <thead>
                <tr>
                  <th>購買時間</th>
                  <th>訂單編號</th>
                  <th>訂單狀態</th>
                  <th>退貨</th>
                  <th>商品評價</th>
                </tr>
              </thead>
              {/* <div>{created_at}</div> */}
              <tbody>
                <tr>
                  <td>{created_at}</td>
                  <td>
                    {orderId}
                    <button
                      class="btn memberorderdetail"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <FaInfoCircle />
                    </button>
                  </td>
                  <td>{outStatus}</td>
                  <td>
                    <button>退貨</button>
                  </td>
                  <td>
                    <button>評價</button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getMemberOrder }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getServerMemberOrder,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MemberOrder)
)
