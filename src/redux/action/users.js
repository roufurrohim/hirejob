import axios from "axios";
import { API_URL } from "../../helpers/env";


export const ACTION_GET_USERS = () => {
    
    
    const token = localStorage.getItem('token')
    
    const headers = {
        token: token
    }

    return (dispatch) => {
        dispatch(usersPending())
        axios.get(`${API_URL}users`, {headers} ).then((res) => {
            dispatch(usersFullfilled(res.data.result))
        }).catch((err) => {
            dispatch(usersRejected(err))
        })
    }
}

export const ACTION_GET_USERS_QUERY = (query) => {
    const { search, sortby } = query
    const token = localStorage.getItem('token')
    
    const headers = {
        token: token
    }

    return (dispatch) => {
        dispatch(usersPending())
        axios.get(`${API_URL}users?search=${search}&sortby=${sortby}`, {headers} ).then((res) => {
            dispatch(usersFullfilled(res.data.result))
        }).catch((err) => {
            dispatch(usersRejected(err))
        })
    }
}

export const ACTION_GET_DETAILS_USER = (id) => {
    const token = localStorage.getItem('token')
    const headers = {
        token,
    }
    console.log(headers)
    return (dispatch) => {
        dispatch(userDetailsPending())
        axios.get(`${API_URL}user/${id}`, {headers}).then((res) => {
            dispatch(userDetailsFullfilled(res.data.result))
        }).catch((err) => {
            dispatch(userDetailsRejected(err))
        })
    }
}

export const ACTION_GET_DETAILS2_USER = (id) => {
  const token = localStorage.getItem('token')
  const headers = {
      token,
  }
  console.log(headers)
  return (dispatch) => {
      dispatch(userDetails2Pending())
      axios.get(`${API_URL}user/${id}`, {headers}).then((res) => {
          dispatch(userDetails2Fullfilled(res.data.result[0]))
      }).catch((err) => {
          dispatch(userDetails2Rejected(err))
      })
  }
}
export const ACTION_GET_MYDETAILS_USER = () => {
  const token = localStorage.getItem('token')
  const headers = {
      token,
  }
  console.log(headers)
  return (dispatch) => {
      dispatch(userMyDetailsPending())
      axios.get(`${API_URL}mydetail`, {headers}).then((res) => {
          dispatch(userMyDetailsFullfilled(res.data.result[0]))
      }).catch((err) => {
          dispatch(userMyDetailsRejected(err))
      })
  }
}
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

const usersPending = () => {
    return {
        type: "GET_USERS_PENDING"
    }
}

const usersFullfilled = (payload) => {
    return {
        type: "GET_USERS_FULLFILLED",
        payload
    }
}

const usersRejected = (payload) => {
    return {
        type: "GET_USERS_REJECTED",
        payload : "An error occurred!"
    }
}

const userDetailsPending = () => {
    return {
        type: "GET_DETAILS_USER_PENDING"
    }
}

const userDetailsFullfilled = (payload) => {
    return {
        type: "GET_DETAILS_USER_FULLFILLED",
        payload
    }
}

const userDetailsRejected = (payload) => {
    return {
        type: "GET_DETAILS_USER_REJECTED",
        payload : "An error occurred!"
    }
}

const userDetails2Pending = () => {
  return {
      type: "GET_DETAILS2_USER_PENDING"
  }
}

const userDetails2Fullfilled = (payload) => {
  return {
      type: "GET_DETAILS2_USER_FULLFILLED",
      payload
  }
}

const userDetails2Rejected = (payload) => {
  return {
      type: "GET_DETAILS2_USER_REJECTED",
      payload : "An error occurred!"
  }
}
const userMyDetailsPending = () => {
  return {
      type: "GET_MYDETAILS_USER_PENDING"
  }
}

const userMyDetailsFullfilled = (payload) => {
  return {
      type: "GET_MYDETAILS_USER_FULLFILLED",
      payload
  }
}

const userMyDetailsRejected = (payload) => {
  return {
      type: "GET_MYDETAILS_USER_REJECTED",
      payload : "An error occurred!"
  }
}
