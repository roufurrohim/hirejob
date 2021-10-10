import '../css/Register.css'
import {
    FormGroup,
    Form,
    Label,
    Input,
    Row,
    Col,
    Container
  } from "reactstrap";
import logo from '../images/logo.svg'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Register = () => {

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
        <Container fluid={true}>  
        <Row className="register">
            <Col lg="5" className="BgRegister">
                <img className="logo" src={logo} alt=""/>
                <div className="ketBgRegis">Temukan developer berbakat & terbaik di berbagai bidang keahlian</div>
            </Col>
            <Col  className="Main-Register" >  
                <div className="ket-register">
                    <h1>Halo, Pewpeople</h1>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>       
                </div>        
                <form className="formRegister">
                    <label>Nama</label>
                    <input
                    type="text"
                    value={Data.nama}
                    onChange={insertData}
                    placeholder="Masukan nama panjang"
                    />
            
                    <label>Email</label>
                    <input
                    type="email"
                    value={Data.email}
                    onChange={insertData}
                    placeholder="Masukan alamat Email"
                    />
            
                    <label>No handphone</label>
                    <input 
                    type="number"
                    value={Data.phone_number}
                    onChange={insertData}
                    placeholder="Masukan no handphone"
                    />
            
                    <label>Katasandi</label>
                    <input
                    type="password"
                    value={Data.password}
                    onChange={insertData}
                    placeholder="Masukan kata sandi"
                    />
            
                    <label>Konfirmasi kata sandi</label>
                    <input 
                    type="password"
                    onChange={insertData}
                    placeholder="Masukan konfirmasi kata sandi"
                    />
                    <button>Daftar</button>  
                    <div className="info">Anda sudah punya akun? <Link to="/login">Masuk disini</Link></div>
                </form>
                <div className="info2">Anda sudah punya akun? <Link to="/login">Masuk disini</Link></div>

            </Col>
        </Row>
     </Container>
    )
}

export default Register