import React from 'react'

function SideFilter (){

    return(
        <>
        <div className="col-3 sty-sideFilter">
          <h3 className="">品牌</h3>
          <hr />
          <ul>
            <li>
              <input type="checkbox" name="apple" id="all" /><label for="all"
                >ALL</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="apple" /><label
                for="apple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="bpple" /><label
                for="bpple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="cpple" /><label
                for="cpple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="dpple" /><label
                for="dpple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="epple" /><label
                for="epple"
                >APPLE</label>
            </li>
          </ul>
        </div>
        </>
    )
}

export default SideFilter