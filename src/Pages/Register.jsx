import '../css/Register.css'
import {
    Row,
    Col,
    Container
  } from "reactstrap";
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

const Register = () => {
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
                    placeholder="Masukan nama panjang"
                    />
            
                    <label>Email</label>
                    <input
                    type="email"
                    placeholder="Masukan alamat Email"
                    />
            
                    <label>Perusahaan</label>
                    <input 
                    placeholder="Masukan nama perusahaan"
                    />
            
                    <label>No handphone</label>
                    <input 
                    type="number"
                    placeholder="Masukan no handphone"
                    />
            
                    <label>Katasandi</label>
                    <input
                    type="password"
                    placeholder="Masukan kata sandi"
                    />
            
                    <label>Konfirmasi kata sandi</label>
                    <input 
                    type="password"
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