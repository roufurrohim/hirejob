import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Register from '../components/register'
import RegisterPekerja from '../components/RegisterPekerja'
import { REGISTER } from '../redux/action/users'

const Registers = () => {
    const { id } = useParams();
    const history = useHistory();

    const [pass, setpass] = useState({
        newPassword: "",
        komfirmasiPassword:""
    })

    const [Data, setData] = useState({
        name:"",
        email:"",
        no_telp:"",
        status: id
    })
    
    const insertData = (e) => {
        setData({ 
            ...Data,
            [e.target.name]:e.target.value
        })
    }

    const insertPass = (e) => {
        setpass({
            ...pass,
            [e.target.name]:e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if(pass.newPassword === pass.komfirmasiPassword){  
            const Datauser = {...Data, password: pass.newPassword }
            console.log(Datauser)
            REGISTER(Datauser).then((response)=>{
                if(response.data === null){
                    alert("email sudah ada")
                } else {
                    history.push("/login")
                }
            }).catch((err)=>{
                console.log(err.message)
              alert(err.message)
            })
        } else {
            alert("passwords dont macth")
        }
    }

    return(
        <div>
            <div  className={id === '0' ? "d-block" : "d-none"} >
                <Register 
                insertData={insertData}
                insertPass={insertPass}
                handleRegister={handleRegister}
                Data={Data}
                pass={pass}
                />
            </div>
            <div  className={id === '1' ? "d-block" : "d-none"} >
                <RegisterPekerja 
                insertData={insertData}
                insertPass={insertPass}
                handleRegister={handleRegister}
                Data={Data}
                pass={pass}
                />
            </div>
        </div>
    )
}

export default Registers