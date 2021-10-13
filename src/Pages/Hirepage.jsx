import "bootstrap/dist/css/bootstrap.min.css"
import '../Pages/css/Hire.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useState, useEffect } from "react"
import Profile from '../components/profileCard.jsx'
import {Link, useHistory, useParams} from 'react-router-dom'
import { ACTION_GET_DETAILS2_USER } from "../redux/action/users";

import { useDispatch, useSelector } from "react-redux";


const Hire =(props)=>{
  const { id } = useParams();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const data = user.details2;
  const skill = user.skills

  useEffect(() => {
    dispatch(ACTION_GET_DETAILS2_USER(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                  <Link to="/message">
                  <button type="submit">Hire</button>
                  </Link>
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
