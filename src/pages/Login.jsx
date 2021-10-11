// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import './css/Logsign.css'
import React, { useState } from "react"
import {Link, useHistory} from 'react-router-dom'


const Login =(props)=>{
const history = useHistory()
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

const submit=(event)=>{
  event.preventDefault();
  history.push('/home')
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
                    <input type="text" placeholder="Enter your email address" name="email" value={user.email} onChange={setData}></input>
                  </div>
                  <h3>Kata Sandi</h3>
                  <div className="textbox">
                    <input type="password" placeholder="Enter your password" value={user.password} name="password" onChange={setData}></input>
                  </div>
                  <Link className='linked' to='/reset-password'>
                  <h3 className="forgot">Lupa kata sandi?</h3>
                  </Link>
                </div>
              </form>
              <div className="buttonlgn">
                <div className="btn">
                  <button className="login" onClick={submit}>Login</button>
                </div>
                <div className="txt">
                  <p>Anda belum punya akun?</p>
                  <p id="p2" style={{cursor:'pointer'}}>&nbsp;</p>
                  <Link to='/register'>
                  <p>Daftar disini</p>
                  </Link>
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