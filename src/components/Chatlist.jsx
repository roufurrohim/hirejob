/* eslint-disable array-callback-return */
import React from "react"
import { API_URL } from "../helpers/env"
import "./css/Chatlist.css"

const List = ({dataChat1, changeReceiver}) => {
  const {listUser, detail } = dataChat1
  console.log(detail.status)
  return(
    <body className='chatlist'>
      <header className='hchat'>
        <p>Chat</p>
      </header>
      <section className='schat'>
      {listUser.length <= 0 ?(
        <div className="imgbox d-flex align-items-center justify-content-center" style={{width:'100%', height:'50vh'}}>
        <img src={`${API_URL}helpers/chat-kosong.png`} alt=""></img>
        </div>
      ): (
        listUser.map((e, i) => {
          if(e.id !== detail.id && e.status !== detail.status){
            return (
              <div className="listuser" key={i} style={{display:'flex'}}>
                <img src={`${API_URL}uploads/${e.image}`} style={{width:'40px', height:'40px', borderRadius:'40px', marginRight:'15px'}} alt="" srcset="" />
                <p onClick={() => changeReceiver(e.id)} style={{cursor:'pointer'}} >{e.name}</p>
              </div>
            )
          }
        })
      )}
      </section>
    </body>
  )
}

export default List;
