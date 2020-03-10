import React from 'react'
import { Container,Row,Col,InputGroup,FormControl} from 'react-bootstrap'
import './I_css/MemberLogin.css'

function MemberLogin(){
    return (
        <>
        <div>
            <div className="row">     
                <div className="col card" style={{borderRight: '1px solid #ddd'}}>       
                    <h3>Sign In 登入</h3>
                    <form>
                        <div>      
                        <label >帳號:</label> <input className="form-control" type="text" />
                        <label className="">密碼:</label> <input className="form-control"  type="text" />
                        <p style={{textAlign:"right"}}>忘記密碼?</p>
                        </div>
                        <button type="button" className="btn btn-dark mg-auto" style={{margin: '100px auto',display:'block'}}>SIGN IN</button> 
                    </form>                               
                </div>
                <div className="col card">
                    <h3>Register Now 快速註冊</h3>
                    <form >
                        <div>      
                        <label >帳號:</label> <input className="form-control" type="text" />
                        <label className="">密碼:</label> <input className="form-control"  type="text" />
                        <label className="">電子信箱:</label> <input className="form-control"  type="text" />
                        <input type="checkbox" /><span>我同意會員服務條款與隱私權聲明</span>
                        </div>
                        <button type="button" className="btn btn-dark mg-auto" style={{margin: '20px auto',display:'block'}}>REGISTER NOW</button>
                    </form>
                </div>
                </div> 
            </div>       
        
        </>      
    )
}

export default MemberLogin