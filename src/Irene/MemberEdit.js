import React from 'react'
import './I_css/MemberLogin.css'
import { Form } from 'react-bootstrap'

function MemberEdit(){
    return (
        <>
<div class="container d-flex space-between">
      <div class="">
        <div class="col">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <img src="" alt="" />
              <a>編輯</a>
            </li>
            <li class="list-group-item"><a>基本資料管理</a></li>
            <li class="list-group-item"><a>交易紀錄</a></li>
            <li class="list-group-item"><a>我的收藏</a></li>
            <li class="list-group-item"><a>優惠券</a></li>
          </ul>
        </div>
      </div>
      <div class="">
        <div class="col">
          <h2>基本資料管理</h2>
          <hr />
          <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label"
                >帳號</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticEmail"
                  value="固定的帳號"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-2 col-form-label">電子信箱</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >密碼</label
              >
              <div class="col-sm-10">
                <input type="password" class="form-control" id="" />
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-2 col-form-label">姓名</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="" />
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-2 col-form-label">性別</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="" />
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-2 col-form-label">生日</label>
              <div class="col-sm-10">
                <input type="date" class="form-control" id="" />
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-2 col-form-label">地址 </label>
              <div>
                <select>
                  <option value="Taipei">台北市</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="Daan">大安區</option>
                </select>
              </div>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        </>      
    )
}

export default MemberEdit