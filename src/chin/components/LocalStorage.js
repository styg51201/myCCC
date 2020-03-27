import React from 'react'

function LocalStorage(){

    function getItemToLocalStorage() {

        const currentHisitem = localStorage.getItem('hisitem') || []
      
        console.log(JSON.parse(currentHisitem))
      
        // 設定資料
        setNewHisitem(JSON.parse(currentHisitem))
      }
        function SamplePrevArrow(props) {
          const { className, style, onClick } = props;
          return (
              <img src="/chin-img/chevron-left.svg"
                className="chin-hiarr" onClick={onClick}/>
          );
        }

        return(
            getItemToLocalStorage
        )
}

export default LocalStorage