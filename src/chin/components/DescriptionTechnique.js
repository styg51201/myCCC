import React from 'react'


function DescriptionTechnique(props){
    return(<>
    <div className="chin-productdescription-technicalspecifications">
        <div className="chin-productdescription">
          <h3>商品敘述</h3>
            <p> {props.data[0] ? props.data[0].itemDescription : ''}</p>
              <h3>技術規格</h3>
        </div>
        <div className="chin-technicalspecifications">
          <div className="chin-size-digital">
            <div className="chin-size">
              <ul>
                <li>尺寸 (長x寬x高)</li>
                <li>重量 (g)</li>
                <li>定位系統</li>
                <li>藍牙版本</li>
                <li>RAM (GB)</li>
              </ul>
            </div>
            <div className="chin-digital">
              <ul>
                <li>39.5 x 39.5 x 10.5mm</li>
                <li>25</li>
                <li>GPS,Glonass,Beidou,Galileo</li>
                <li>Bluetooth v4.2</li>
                <li>0.75GB</li>
              </ul>
            </div>
          </div>
          <div className="chin-memory-narrative-p">
            <div className="chin-memory-narrative">
              <div className="chin-memory">
                <ul>
                  <li>內建使用記憶體 (GB)</li>
                  <li>內建可用記憶體* (GB)</li>
                </ul>
              </div>
              <div className="chin-narrative">
                <ul>
                  <li>4GB</li>
                  <li>1.5GB</li>
                </ul>
              </div>
            </div>
            <p>
              作業系统及預設應用程序將占用部分儲存空間，實際用户可使用儲存空間將少於規格所標示的記憶體容量；作業系统或軟體版本的更新可能會導致用户可使用空間容量有所改變。
            </p>
          </div>
        </div>
      </div>
    </>)
}

export default DescriptionTechnique