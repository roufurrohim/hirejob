// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import '../Pages/css/Logsign.css'
import React, { useState } from "react"
// import { LOGIN } from "../redux/actions/users"
// import {Link, useHistory} from 'react-router-dom'


const Resetpw =(props)=>{
  // const history = useHistory()
  const [user, setUser] = useState({
    email: "",
  })

  const setData=(event)=>{
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const submit=(event)=>{
    event.preventDefault();
    
  }
  return(
    <div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <aside className="asdlogin col-lg-6">
              <img src="https://raw.githubusercontent.com/farizian/chatting/master/img/fixedbg.png" alt="" srcset="" />
            </aside>
            <section className="lgn col-lg-6">
              <form onSubmit="" className="formlgn">
                <div className="logolgn">
                  <img src="https://raw.githubusercontent.com/farizian/chatting/master/img/Groupwaswa.png" alt="" srcset="" />
                </div>
                <div className="header">
                  <h1>Reset password</h1>
                  <p>Enter your user account's verified email address and we will send you a password reset link.</p>
                </div>
                <div className="signbox">
                  <h3>Email</h3>
                  <div className="textbox">
                    <input type="text" placeholder="Enter your email address" name="email" value={user.email} onChange=""></input>
                  </div>
                </div>
              </form>
              <div className="buttonlgn">
                <div className="btn">
                  <button className="login" onClick="">Send password reset email</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Resetpw