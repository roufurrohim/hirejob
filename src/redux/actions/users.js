import axios from "axios";
import { API_URL } from "../../helpers/env";
import { getAllUser, getAllUserPending, getAllUserError, getDetailUser, getDetailUserPending, getDetailUserError, getMyDetailUser, getMyDetailUserPending, getMyDetailUserError } from "../../helpers/var";



// export const LOGIN = (data)=> {
//   return new Promise((resolve, reject) =>{
//     axios.post(`${API_URL}login`, data)
//     .then((response) => {
//       resolve(response.data)
//       const tokenLogin = response.data.token
//       const img = response.data.field[0].img
//       const status = response.data.field[0].status
//       console.log(img)
//       localStorage.setItem("token", tokenLogin)
//       localStorage.setItem("img", img)
//       localStorage.setItem("status", status)
//     }).catch ((err) => {
//       reject(err)
//     })
//   })
// }
// export const REGISTER = (data)=> {
//   return new Promise((resolve, reject) =>{
//     axios.post(`${API_URL}register`, data)
//     .then((response) => {
//       resolve(response.data.success)
//     }).catch ((err) => {
//       reject(err)
//     })
//   })
// }
// export const UPDATE_USER = (form, id)=> {
//   const token = localStorage.getItem("token")
//   return new Promise((resolve, reject) =>{
//     const headers = {
//       "Content-Type": "multipart/form-data",
//       "token": token
//     }
//     axios.put(`${API_URL}user/${id}`, form, {headers})
//     .then((response) => {
//       resolve(response)
//     }).catch ((err) => {
//       reject(err)
//     })
//   })
// }
export const GET_ALL_USER = (data) => {
  return (dispatch) => {
    dispatch({
      type: getAllUserPending
    })
    axios.get(`${API_URL}users?search=${!data?'':data}&field=id`).then((response) => {
      dispatch({
        type: getAllUser,
        payload: response.data.result
      })
    }).catch((err) => {
      dispatch({
        type: getAllUserError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}
export const GET_DETAIL_USER = (id) => {
  const token = localStorage.getItem("token")
  // {headers: {token: token} }
  return (dispatch) => {
    dispatch({
      type: getDetailUserPending
    })
    axios.get(`${API_URL}user/${id}`).then((response) => {
      dispatch({
        type: getDetailUser,
        payload: response.data.result[0]
      })
    }).catch((err) => {
      dispatch({
        type: getDetailUserError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}
export const GET_MY_DETAIL = () => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({
      type: getMyDetailUserPending
    })
    axios.get(`${API_URL}mydetail`, {headers: {token: token}}).then((response) => {
      dispatch({
        type: getMyDetailUser,
        payload: response.data.result[0]
      })
    }).catch((err) => {
      dispatch({
        type: getMyDetailUserError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}
