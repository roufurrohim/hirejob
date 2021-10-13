/* eslint-disable array-callback-return */
import React from "react"
import { API_URL } from "../helpers/env"
import "./css/Listmsg.css"
import { FaArrowLeft } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi'

const List = ({dataChat, sendMessage, setMsg, setCn}) => {
  const {receiver, detailById, detail, listMsgHistory, listMsg, msg} = dataChat
  console.log(dataChat)
  return(

      <body className="chatrow" style={{width:'100%'}}>
        {receiver?(
          <nav className='chatnav'>
            <FaArrowLeft className="arrow" onClick={()=>setCn({
              asd: 'col-lg-4 col-12 pt-5 asdchat',
              sec: 'col-lg-8 pt-5 sec'
            })}/>
            <img src={`${API_URL}uploads/${detailById.image}`}  alt="" srcset="" />
            <div className='textbox'>
            <p>{detailById.name}</p>
            </div>
          </nav>
        ):(
          <nav className='chatnav' style={{backgroundColor:'transparent'}}></nav>
        )}
        <div className="chatbox" style={{ width:"100%", height: "50vh", overflow: "scroll" }}>
          {receiver?
          listMsgHistory.map((e, i) => {
              if(e.receiver === receiver || e.sender === receiver) {
                return (
                  <div key={i}>
                    {e.sender === detail.id ? 
                    (
                      <div className="chatlist" style={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'flex-start', height:'unset'}}>
                        <div className="text" style={{ width:"50%", backgroundColor:'skyblue', borderRadius:"35px 10px 35px 35px", display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
                          <p>{e.msg}</p>
                        </div>
                        <img style={{marginLeft:'20px'}} src={`${API_URL}uploads/${detail.image}`} alt="" srcset="" />
                      </div>): 
                    (
                      <div className="chatlist" style={{width:'100%', display:'flex', justifyContent:'flex-start', alignItems:'flex-end', height:'unset'}}>
                        <img style={{marginRight:'20px'}} src={`${API_URL}uploads/${detailById.image}`} alt="" srcset="" />
                        <div className="text" style={{ width:"50%", backgroundColor:'#7E98DF', borderRadius:"35px 35px 35px 10px", display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
                          <p>{e.msg}</p>
                        </div>
                      </div>)}
                  </div>
                )
              }
            }):(
              <div style={{
                width:'100%',
                height:'300px',
                display:'flex',
                alignItems:'center',
                paddingTop:'40px'
              }}>
              <p style={{
                width:'100%',
                margin:'0',
                textAlign:'center',
                fontSize:'24px',
                fontWeight:'400',
                color:'#848484'
              }}>Please select a chat to start messaging</p>
              </div>
            )}
            {
            listMsg.map((e, i) => {
              if(e.receiver === receiver || e.sender === receiver) {
                return (
                  <div key={i}>
                    {e.sender === detail.id ?
                    (
                      <div className="chatlist" style={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'flex-start', height:'unset'}}>
                        <div className="text" style={{ width:"50%", backgroundColor:'skyblue', borderRadius:"35px 10px 35px 35px", display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
                          <p>{e.msg}</p>
                        </div>
                        <img style={{marginLeft:'20px'}} src={`${API_URL}uploads/${detail.image}`} alt="" srcset="" />
                      </div>):
                    (
                      <div className="chatlist" style={{width:'100%', display:'flex', justifyContent:'flex-start', alignItems:'flex-end', height:'unset'}}>
                        <img style={{marginRight:'20px'}} src={`${API_URL}uploads/${detailById.image}`} alt="" srcset="" />
                        <div className="text" style={{ width:"50%", backgroundColor:'#7E98DF', borderRadius:"35px 35px 35px 10px", display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
                          <p>{e.msg}</p>
                        </div>
                      </div>)}
                  </div>
                )
              }
            })}
          </div>
          {receiver ? (
            <div className='sendbox'>
              <div className="send">
                <form onSubmit={sendMessage}>
                  <input type="text"
                  className="inputMsg"
                  value={msg}
                  placeholder="Type your message..."
                  onChange={(e) =>setMsg(e.target.value)}/>
                </form>
                <div className='rowbox'>
                <div className='imgbox' style={{cursor:'pointer',backgroundColor:'#5E50A1', width:'45px', height:'45px', borderRadius:'50%'}} onClick={sendMessage}>
                  <FiSend size={28} style={{color: "#fff"}} />
                </div>
                </div>
              </div>
            </div>
          ):(
            <div className='sendbox'></div>
          )}
        
      </body>
  )
}

export default List;
