import '../Pages/css/Logsign.css'
import React, { useState } from "react"
import { useHistory, useParams} from 'react-router-dom'
import {LOGIN} from '../redux/action/users'


const Login =()=>{
const { id }= useParams()
const history = useHistory()
const [errorMsg, setErrorMsg] = useState("");
const [user, setUser] = useState({
  email: "",
  password: "",
})

const setData=(event)=>{
  setUser({
    ...user,
    [event.target.name]: event.target.value
  })
}

const submit=(e)=>{
  e.preventDefault();
  LOGIN(user)
  .then((response)=>{
    history.push("/")
    setErrorMsg("");
  }).catch((err)=>{
    
    // console.log(err)
    setErrorMsg(err.error);
  })
}
  return(
    <div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <aside className="asdlogin col-lg-6 ">
              <img src="https://raw.githubusercontent.com/farizian/chatting/master/img/fixedbg.png" alt="" srcset="" />
            </aside>
            <section className="lgn col-lg-6 ">
              <form onSubmit={submit} className="formlgn">
                <div className="logolgn">
                  <img src="https://raw.githubusercontent.com/farizian/chatting/master/img/Groupwaswa.png" alt="" srcset="" />
                </div>
                <div className="header">
                  <h1>Login</h1>
                  <p>Temukan developer berbakat & terbaik di berbagai bidang keahlian.</p>
                </div>
                <div className="signbox">
                  <h3>Email</h3>
                  <div className="textbox">
                    <input type="email" required placeholder="Enter your email address" name="email" value={user.email} onChange={setData}></input>
                  </div>
                  <h3>Kata Sandi</h3>
                  <div className="textbox">
                    <input type="password" required placeholder="Enter your password" value={user.password} name="password" onChange={setData}></input>
                  </div>
                  <p className="text-danger">{errorMsg}</p>
                  <h3 className="forgot">Lupa kata sandi?</h3>
                </div>
              </form>
              <div className="buttonlgn">
                <div className="btn">
                  <button className="login" onClick={submit}>Login</button>
                </div>
                <div className="txt">
                  <p>Anda belum punya akun?</p>
                  <p id="p2" style={{cursor:'pointer'}} onClick={()=>history.push(`/register/${id}`)}>&nbsp;Daftar disini</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login