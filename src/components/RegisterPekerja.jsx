import './css/Register.css'
import {
    Row,
    Col,
    Container
  } from "reactstrap";
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

const Register = ({insertData, Data, insertPass, pass, handleRegister}) => {

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
                <form onSubmit={handleRegister} className="formRegister">
                    
                    <label>Nama</label>
                    <input
                    type="text"
                    name="nama"
                    onChange={insertData}
                    value={Data.nama}
                    placeholder="Masukan nama panjang"
                    />
            
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    onChange={insertData}
                    placeholder="Masukan alamat Email"
                    />
            
                    <label>No handphone</label>
                    <input 
                    type="number"
                    name="no_telp"
                    onChange={insertData}
                    value={Data.no_telp}
                    placeholder="Masukan no handphone"
                    />
            
                    <label>Katasandi</label>
                    <input
                    type="password"
                    name="newPassword"
                    onChange={insertPass}
                    value={pass.newPassword}
                    placeholder="Masukan kata sandi"
                    />
            
                    <label>Konfirmasi kata sandi</label>
                    <input 
                    type="password"
                    onChange={insertPass}
                    value={pass.komfirmasiPassword}
                    name="komfirmasiPassword"
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