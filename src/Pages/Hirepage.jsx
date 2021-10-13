import "bootstrap/dist/css/bootstrap.min.css"
import '../Pages/css/Hire.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useState, useEffect } from "react"
import Profile from '../components/profileCard.jsx'
import {Link, useHistory, useParams} from 'react-router-dom'
import { ACTION_GET_DETAILS2_USER } from "../redux/action/users";
import socket from '../Config/socket'
import { useDispatch, useSelector } from "react-redux";


const Hire =(props)=>{
  const { id } = useParams();
  const history = useHistory()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const data = user.details2;
  const skill = user.skills
  const hire = localStorage.getItem('id')
  const idHire = parseInt(hire)
  socket.emit('login', idHire);
  useEffect(() => {
    dispatch(ACTION_GET_DETAILS2_USER(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [hireChat, setHireChat] = useState({
    project : "",
    name: "",
    email: "",
    noHandphone : "",
    deskripsi : ""
  })
  const changeInput = (event) => {
    setHireChat({
      ...hireChat,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    const msg = `
    Tujuan: ${hireChat.project}
    Dari: ${hireChat.name}
    ${hireChat.email}
    No Telpon ${hireChat.noHandphone}
    ${hireChat.deskripsi}`
    socket.emit("send-message", {
      sender: idHire,
      receiver: id,
      msg: msg
    });
    history.push('/message')
    console.log(typeof msg)
    console.log(msg)
  }

  return(
    <div>
      <Navbar />
      <body className='hire'>
        <div className="container-fluid">
          <div className="row">
            <aside className="col-lg-4 asdhire">
              <Profile data={data} skill={skill}/>
            </aside>
            <section className="col-lg-8 sechire">
              <div className="row">
                <div className='textbox'>
                  <h1>{`Hubungi ${data.name}`}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
                <form onSubmit={handleSubmit} action="" className='form'>
                  <div className='inputbox'>
                    <p>Tujuan tentang pesan ini</p>
                    <select onChange={changeInput} name="project" class="custom-select">
                      <option value="Projek">Projek</option>
                      <option value="Offering">Offering</option>
                      <option value="Hiring">Hiring</option>
                      <option value="Part time">Part time</option>
                    </select>
                  </div>
                  <div className='inputbox'>
                    <p>Nama lengkap</p>
                    <input onChange={changeInput} name="name" type="text" placeholder='Masukan nama lengkap' />
                  </div>
                  <div className='inputbox'>
                    <p>Email</p>
                    <input onChange={changeInput} name="email" type="text" placeholder='Masukan email' />
                  </div>
                  <div className='inputbox'>
                    <p>No Handphone</p>
                    <input onChange={changeInput} name="noHandphone" type="number" placeholder='Masukan no handpone' />
                  </div>
                  <div className='inputbox'>
                    <p>Deskripsi</p>
                    <textarea onChange={changeInput} name="deskripsi" id="deskripsi" placeholder='Deskripsikan/jelaskan lebih detail' ></textarea>
                  </div>
                  <button type="submit">Hire</button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </body>
      <Footer/>
    </div>
  )
}

export default Hire
