// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import '../Pages/css/Hire.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useState } from "react"
import Profile from '../components/profileCard.jsx'
// import { LOGIN } from "../redux/actions/users"
// import {Link, useHistory} from 'react-router-dom'


const Hire =(props)=>{
  
  return(
    <div>
      <Navbar />
      <body className='hire'>
        <div className="container-fluid">
          <div className="row">
            <aside className="col-lg-4 asdhire">
              <Profile/>
            </aside>
            <section className="col-lg-8 sechire">
              <div className="row">
                <div className='textbox'>
                  <h1>Hubungi Lous Tomlinson</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
                <form action="" className='form'>
                  <div className='inputbox'>
                    <p>Tujuan tentang pesan ini</p>
                    <select class="custom-select">
                      <option selected>Projek</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='inputbox'>
                    <p>Nama lengkap</p>
                    <input type="text" placeholder='Masukan nama lengkap' />
                  </div>
                  <div className='inputbox'>
                    <p>Email</p>
                    <input type="text" placeholder='Masukan email' />
                  </div>
                  <div className='inputbox'>
                    <p>No Handphone</p>
                    <input type="number" placeholder='Masukan no handpone' />
                  </div>
                  <div className='inputbox'>
                    <p>Deskripsi</p>
                    <textarea name="" id="" placeholder='Deskripsikan/jelaskan lebih detail' ></textarea>
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