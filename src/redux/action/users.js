import axios from "axios";
import { API_URL } from "../../helpers/env";
import { getAllUser, getAllUserPending, getAllUserError, getDetailUser, getDetailUserPending, getDetailUserError, getMyDetailUser, getMyDetailUserPending, getMyDetailUserError } from "../../helpers/var";

export const LOGIN = (form) =>{
    return new Promise((resolve, reject)=>{
        axios.post(`${API_URL}login`, form)
        .then((response)=>{
            resolve(response.data)
            console.log(response.data)
            localStorage.setItem('token', response.data.result.token)
            localStorage.setItem("status", response.data.result.user.status);
            localStorage.setItem("image", response.data.result.user.image);
        }).catch((err)=>{
            reject(err.response.data)
        })
    })
}
export const REGISTER = (data) =>{
    console.log(data, 'ini di action')
    return new Promise((resolve, reject)=>{
        axios.post(`${API_URL}register`, data)
        .then((response)=>{
            resolve(response.data)
            console.log(response)
        }).catch((err)=>{
            reject(err.response.data)
        })
    })
}
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