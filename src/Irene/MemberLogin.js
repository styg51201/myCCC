import React from 'react'
import './I_css/MemberLogin.css'

function MemberLogin(){
    return (
        <>
        <div>
            <div className="row">     
                <div className="col card" style={{borderRight: '1px solid #ddd'}}>       
                    <h3 className="MemberLoginh3">Sign In 登入</h3>
                    <form>
                        <div>      
                        <label >帳號:</label> <input className="form-control" type="text" />
                        <label className="">密碼:</label> <input className="form-control"  type="text" />
                        <p style={{textAlign:"right"}}>忘記密碼?</p>
                        </div>
                        <button type="button" className="btn btn-dark mg-auto" style={{margin: '100px auto',display:'block'}}>SIGN IN</button> 
                    </form>
                    {/* //如果可以要做google&facebook登入                                */}
                </div>
                <div className="col card">
                    <h3 className="MemberLoginh3">Register Now 快速註冊</h3>
                    <form >
                        <div>      
                        <label >帳號:</label> <input className="form-control" type="text" />
                        <label className="">密碼:</label> <input className="form-control"  type="text" />
                        <label className="">電子信箱:</label> <input className="form-control"  type="text" />
                        <input type="checkbox" /><span>我同意會員服務條款與隱私權聲明</span>
                        </div>
                        <button type="button" className="btn btn-dark mg-auto" style={{margin: '20px auto',display:'block'}}>REGISTER NOW</button>
                    </form>
                    {/* //如果可以要做google&facebook登入                                */}
                </div>
                </div> 
            </div>       
        
        </>      
    )
}

export default MemberLogin