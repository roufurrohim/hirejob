import './css/Register.css'
import {
    Row,
    Col,
    Container
  } from "reactstrap";


const Register = ({insertData, Data, insertPass, pass, handleRegister, handleLogin}) => {
    return(
        <Container fluid={true}>  
        <Row className="register">
        <aside className="asdlogin col-lg-6 ">
              <img src="https://raw.githubusercontent.com/farizian/chatting/master/img/fixedbg.png" alt="" srcset="" />
            </aside>
            <Col lg="6" sm="12" className="Main-Register" >  
            <div className="bungkus">
                <div className="ket-register">
                    <h1>Halo, Pewpeople</h1>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>       
                </div>        
                <form onSubmit={handleRegister} className="formRegister">
                    <label>Nama</label>
                    <input
                    type="text"
                    name="name"
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
                <div className="txt">
                        <a>Anda sudah punya akun?</a>
                        <a id="p2" style={{cursor:'pointer'}} onClick={handleLogin}>&nbsp;Masuk disini</a>
                    </div>
                </div>

            </Col>
        </Row>
     </Container>
    )
}

export default Register