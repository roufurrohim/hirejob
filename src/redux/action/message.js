import { io } from "socket.io-client";
import { getHistoryMsg, getHistoryMsgPending, getHistoryMsgError, getListMsg, getListMsgPending, getListMsgError } from "../../helpers/var";
const socket = io("http://localhost:2021");

export const LOGINMSG = (data)=> {
  socket.emit('login', data)
}
export const EMITGETMSG = (data)=> {
  socket.emit('get-message', { receiver: data.receiver, sender: data.sender })
}
export const EMITSENDMSG = (data)=> {
  const { sender, receiver, msg } = data
  socket.emit('send-message', {
    sender, receiver, msg
  })
}
export const ONHISTORYMSG = ()=> {
  return (dispatch) => {
    try {
      dispatch({
        type: getHistoryMsgPending
      })
      socket.on('history-messages', (payload) =>{
        dispatch({
          type: getHistoryMsg,
          payload: payload
        })
        console.log(payload)
      })
    } catch(err) {
      dispatch({
        type: getHistoryMsgError,
        payload: `terjadi kesalahan, ${err}`
      })
    }
  }
}
export const ONLISTMSG = ()=> {
  return (dispatch) => {
    try {
      dispatch({
        type: getListMsgPending
      })
      socket.on('list-message', (payload) =>{
        dispatch({
          type: getListMsg,
          payload: payload
        })
      })
    } catch(err) {
      dispatch({
        type: getListMsgError,
        payload: `terjadi kesalahan, ${err}`
      })
    }
  }
}

