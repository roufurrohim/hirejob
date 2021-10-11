import {
    Row,
    Col,
    Container
  } from "reactstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Register from '../components/register'
import RegisterPekerja from '../components/RegisterPekerja'

const Registers = () => {
    const { id } = useParams();
    const [Data, setData] = useState({
        nama:"",
        email:"",
        phone_number:"",
        password:""
    })

    const insertData = (e) => {
        setData({
            [e.target.name]:e.target.value
        })

    }
    return(
        <div>
            <div  className={id === '0' ? "d-block" : "d-none"} >
                <Register 
                insertData={insertData}
                Data={Data}
                />
            </div>
            <div  className={id === '1' ? "d-block" : "d-none"} >
                <RegisterPekerja 
                insertData={insertData}
                Data={Data}
                />
            </div>
        </div>
    )
}

export default Registers