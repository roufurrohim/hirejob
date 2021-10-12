import '../components/css/Register.css'
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
            <div className="bungkusBg" >
                <div className="BgRegister" >
                <img className="logo" src={logo} alt=""/>
                <div className="ketBgRegis">Temukan developer berbakat & terbaik di berbagai bidang keahlian</div>
                </div>
            </div>
            <Col  className="Main-Register" > 
                <div className="bungkus"> 
                    <div className="ket-register">
                        <h1>Reset password</h1>
                        <div>
                        You need to change your password to activate your account
                        </div>       
                    </div>        
                    <form className="formRegister">
                        <label>Kata sandi</label>
                        <input
                        type="password"
                        placeholder="Masukan kata sandi"
                        />
                
                        <label>Confirmation new password</label>
                        <input
                        type="password"
                        placeholder="Masukan konfirmasi kata sandi"
                        />
                                
                        <button>Reset password</button>  
                    </form>
                    <div className="info">Anda sudah punya akun? <Link to="/login/0">Masuk disini</Link></div>
                </div>
            </Col>
        </Row>
     </Container>
    )
}

export default Register