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
            <div className="bungkusBg" >
                <div className="BgRegister" >
                <img className="logo" src={logo} alt=""/>
                <div className="ketBgRegis">Temukan developer berbakat & terbaik di berbagai bidang keahlian</div>
                </div>
            </div>
            <Col  className="Main-Register" >  
            <div className="bungkus">
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
                    placeholder="Masukan nama perusahaan"
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
                    <button type="submit">Daftar</button>  
                </form>
                <div className="info">Anda sudah punya akun? <Link to="/login/0">Masuk disini</Link></div>
            </div>

            </Col>
        </Row>
     </Container>
    )
}

export default Register