
// import React, {useEffect, useState} from "react";
// import {
//     Container,
//     Col,
//     Row,
// } from "reactstrap";
// import { GET_DETAIL_USER, GET_ALL_USER, GET_MY_DETAIL } from "../redux/action/users"
// import { LOGINMSG, EMITGETMSG, EMITSENDMSG, ONHISTORYMSG, ONLISTMSG } from "../redux/action/message"
// import './css/Chat.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import { useSelector, useDispatch } from "react-redux"
// import { API_URL } from "../helpers/env";
// import { useHistory } from "react-router-dom";
// import './css/Chat.css'
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import Chatlist from '../components/Chatlist';
// import Tablemsg from '../components/Listmsg';
// import socket from '../Config/socket'

// const Chat=(props)=> {
//   const [msg, setMsg] = useState("")
//   const [listMsg, setListMsg] = useState([]);
//   const [listMsgHistory, setListMsgHistory]= useState([]);
//   const [listUser, setListUser] = useState([]);
//   const [receiver, setReceiver]= useState('');
//   const dispatch = useDispatch()
//   const user = useSelector(state => state.user)
//   const message = useSelector(state => state.message)
//   const detail = user.myDetail
//   const detailById = user.getDetail
//   // const [dataChat, setDataChat] = useState({})
//   const getData = (id) =>{
//     dispatch(GET_MY_DETAIL())
//     dispatch(GET_ALL_USER())
//     // dispatch(ONLISTMSG())
    
    
//   }
//   socket.emit('login', detail.id);
//   useEffect(() => {
//     getData()
    
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])
//   const [updData, setUpd]=useState({})
//   const changeReceiver = (id) => {
//     dispatch(GET_DETAIL_USER(id))
//     setReceiver(id);
//     const data = {
//       receiver: id,
//       sender: detail.id
//     }
    
//     socket.emit("get-message", { receiver: id, sender: detail.id})
//     setListMsg([]);
//     socket.on("history-messages", (message) =>{
//       setListMsgHistory(message);
//       console.log(message)
//     })
//   }
//   const sendMessage = (e) => {
//     e.preventDefault();
//     const data = {
//       sender: detail.id,
//       receiver,
//       msg
//     }
//     socket.emit("send-message", {
//       sender: detail.id,
//       receiver,
//       msg
//     });
//     setListMsg([
//       ...listMsg,
//       {
//         sender: detail.id,
//         receiver,
//         msg
//       }
//     ])
//     setMsg('');
//   };
//   useEffect(() => {
//     socket.on("list-message", (payload) =>{
//       console.log(payload)
//       setListMsg([...listMsg, payload])
//     })
//     // socket.emit("list-user", {sender: detail.id})
    
//   })
//   useEffect(()=> {
//     setListUser(user.getAll)
//     setUpd({
//       img: detail.image,
//       name: detail.name,
//     })
//     // socket.on("contact-user", (payload) =>{
//     //   setListUser(payload)
//     //   console.log(payload)
//     // })

//   }, [user, detail, message, detailById])
//   // 
//   const dataChat1 = {
//     detailById,
//     listMsgHistory,
//     listMsg,
//     msg,
//     receiver,
//     listUser,
//     detail
//   }
//   console.log(listUser)
//   return(
//     <div>
//       <Navbar/>
//       <body className='bodychat'>
//         <div className='container-fluid'>
//           <div className='row'>
//             <aside className='col-lg-4 d-flex justify-content-end pt-5 asdchat'>
//               <Chatlist 
//               dataChat1={dataChat1}
//               changeReceiver={changeReceiver}
//               />
//             </aside>
//             <section className='col-lg-8 d-flex pt-5 sec'>
//               <Tablemsg 
//               dataChat={dataChat1}
//               sendMessage={sendMessage}
//               setMsg={setMsg}
//               />
//             </section>
//           </div>
//         </div>
//       </body>
//       <Footer/>
//     </div>
//   )
// }

// export default Chat;