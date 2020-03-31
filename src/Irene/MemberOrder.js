import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import { Form, Button, Table, Modal, Row, Col, Toast } from 'react-bootstrap'

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
  // console.log('props', props.data[0].orderId)
  // console.log('orderdata', orderdata)

  const [startDate, setStartDate] = useState(new Date('2020/01/01'))
  const [endDate, setEndDate] = useState(new Date(new Date()))

  // for訂單細節內容彈出
  const [showA, setShowA] = useState(false)
  const [searchbar, setSearchbar] = useState('')

  const toggleShowA = () => setShowA(!showA)

  // let orderdata = JSON.stringify(props.data)
  // console.log('orderdata', orderdata)

  useEffect(() => {
    // $('.memberorderdetail').click(() => alert('click'))
    props.getServerMemberOrder()
  }, [])

  function ShowMyOrderDetail() {
    return (
      <Row>
        <Col xs={6}>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowA}>
            Toggle Toast <strong>with</strong> Animation
          </Button>
        </Col>
      </Row>
    )
  }

  useEffect(() => {
    // var searchword = $('.searchbar').val()
    // console.log('searchword', searchbar)
    if (searchbar !== '') {
      $('.irene-ordernumber')
        .parent('tr')
        .css('display', 'none')
      $('.irene-ordernumber')
        .find(":contains('" + searchbar + "')")
        .parent()
        .parent('tr')
        .css('display', 'table-row')
    } else {
      $('.irene-ordernumber')
        .parent('tr')
        .css('display', 'table-row')
      // console.log('nothing')
    }
  }, [searchbar])

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
                      label="1年內訂單"
                      type={type}
                      name={type}
                    />
                    <Form.Check
                      inline
                      label="未出貨訂單"
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
            <div style={{ marginTop: '10px' }}>
              <span>訂單編號：</span>
              <input
                type="text"
                className="searchbar"
                onChange={e => setSearchbar(e.target.value)}
              ></input>
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
                  <th>訂單成立時間</th>
                  <th>訂單編號</th>
                  <th>訂單狀態</th>
                  <th>退貨</th>
                  <th>商品評價</th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((v, i) => (
                  <tr>
                    <td>{v.created_at}</td>
                    <td className="irene-ordernumber">
                      <span>{v.orderId}</span>
                      <button
                        class="btn memberorderdetail"
                        type="button"
                        id={i}
                        onClick={() => setShowA(true)}
                      >
                        <FaInfoCircle />
                        {/* <ShowMyOrderDetail
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        /> */}
                      </button>
                    </td>
                    <td>{v.outStatus}</td>
                    <td>
                      <button className="irene-memberreturnbtn">退貨</button>
                    </td>
                    <td>
                      <button className="irene-membercommentbtn">評價</button>
                    </td>
                  </tr>
                ))}
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
