import axios from "axios"
import { API_URL } from "../../helpers/env"

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