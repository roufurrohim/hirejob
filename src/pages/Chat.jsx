
import React, {useEffect, useState} from "react";
import { ACTION_GET_DETAILS2_USER, ACTION_GET_USERS, ACTION_GET_MYDETAILS_USER } from "../redux/action/users"
import './css/Chat.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from "react-redux"
import { API_URL } from "../helpers/env";
import { useHistory } from "react-router-dom";
import './css/Chat.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Chatlist from '../components/Chatlist';
import Tablemsg from '../components/Listmsg';
import socket from '../Config/socket'

const Chat=(props)=> {
  const [msg, setMsg] = useState("")
  const [listMsg, setListMsg] = useState([]);
  const [listMsgHistory, setListMsgHistory]= useState([]);
  const [receiver, setReceiver]= useState('');
  const [cn, setCn] = useState({
    asd: 'col-lg-4 col-12 pt-5 asdchat',
    sec: 'col-lg-8 pt-5 sec'
  });
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const message = useSelector(state => state.message)
  const detail = user.mydetails
  const detailById = user.details2
  
  const getData = (id) =>{
    dispatch(ACTION_GET_MYDETAILS_USER())
    dispatch(ACTION_GET_USERS())  
  }
  socket.emit('login', detail.id);
  useEffect(() => {
    getData()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [updData, setUpd]=useState()
  const [listUser, setListUser] = useState([]);
  const changeReceiver = (id) => {
    dispatch(ACTION_GET_DETAILS2_USER(id))
    setReceiver(id);
    setCn({
      asd: 'col-lg-4 col-12 pt-5 asdnone',
      sec: 'col-lg-8 pt-5 none'
    })
    socket.emit("get-message", { receiver: id, sender: detail.id})
    setListMsg([]);
    socket.on("history-messages", (message) =>{
      setListMsgHistory(message);
    })
  }
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("send-message", {
      sender: detail.id,
      receiver,
      msg
    });
    setListMsg([
      ...listMsg,
      {
        sender: detail.id,
        receiver,
        msg
      }
    ])
    setMsg('');
  };
  useEffect(() => {
    socket.on("list-message", (payload) =>{
      console.log(payload)
      setListMsg([...listMsg, payload])
    }) 
  })
  useEffect(()=> {
    setListUser(user.all)
 

  }, [user, detail, message, detailById])
  
  const dataChat1 = {
    detailById,
    listMsgHistory,
    listMsg,
    msg,
    receiver,
    listUser,
    detail
  }
  
  return(
    <div>
      <Navbar/>
      <body className='bodychat'>
        <div className='container-fluid'>
          <div className='row'>
            <aside className={cn.asd}>
              <Chatlist 
              dataChat1={dataChat1}
              changeReceiver={changeReceiver}
              />
            </aside>
            <section className={cn.sec}>
              {/* {cn==='col-lg-8 col-12 d-flex pt-5 sec'?

              } */}
              <Tablemsg 
              setCn={setCn}
              dataChat={dataChat1}
              sendMessage={sendMessage}
              setMsg={setMsg}
              />
            </section>
          </div>
        </div>
      </body>
      <Footer/>
    </div>
  )
}

export default Chat;
