import React, {useState} from "react";
import {
    Container,
    Col,
    Row,
} from "reactstrap";
import { API_URL } from "../helpers/env";
import { useHistory } from "react-router-dom";
import './css/Chat.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Chatlist from '../components/Chatlist';

const chat=()=> {
  return(
    <div>
      <Navbar/>
      <body className='bodychat'>
        <div className='container-fluid'>
          <div className='row'>
            <aside className='col-lg-4 d-flex justify-content-end pt-5 asdchat'>
              <Chatlist/>
            </aside>
            <section className='col-lg-8 d-flex pt-5 secchat'>
              <div className='chatroom'>
                <header className='hchat'>

                </header>
              </div>
            </section>
          </div>
        </div>
      </body>
      <Footer/>
    </div>
  )
}

export default chat;