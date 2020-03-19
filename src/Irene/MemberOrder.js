import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Table } from 'react-bootstrap'

import MemberSidebar from './components/MemberSidebar'
import './I_css/MemberOrder.scss'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaInfoCircle } from 'react-icons/fa'
import $ from 'jquery'

function MemberOrder() {
  const [startDate, setStartDate] = useState(new Date('2020/01/01'))
  const [endDate, setEndDate] = useState(new Date(new Date()))

  useEffect(() => {
    $('.memberorderdetail').click(() => alert('click'))
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
                  <th>購買日期</th>
                  <th>訂單編號</th>
                  <th>訂單狀態</th>
                  <th>退貨</th>
                  <th>商品評價</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    {' '}
                    訂單編號
                    <button
                      class="btn memberorderdetail"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <FaInfoCircle />
                      {/* 點選之後會彈出會員訂單詳細內容，for迴圈產生列 */}
                    </button>
                  </td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberOrder
