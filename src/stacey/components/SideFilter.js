import React from 'react'

function SideFilter (){

    return(
        <>
        <div className="col-3 sty-sideFilter">
          <h3 className="">品牌</h3>
          <hr />
          <ul>
            <li>
              <input type="checkbox" name="apple" id="all" /><label htmlFor="all"
                >ALL</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="apple" /><label
                htmlFor="apple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="bpple" /><label
                htmlFor="bpple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="cpple" /><label
                htmlFor="cpple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="dpple" /><label
                htmlFor="dpple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="epple" /><label
                htmlFor="epple"
                >APPLE</label>
            </li>
          </ul>
        </div>
        </>
    )
}

export default SideFilter