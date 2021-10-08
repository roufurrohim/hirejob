import React from "react"
import { Container, Row, Col, Nav, NavLink} from "reactstrap"
import { API_URL } from "../helpers/env"
import "./css/Navbar.css"
import { BsBell, BsEnvelope, BsHouseDoor, BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom"


const Navbar=()=>{
  const history = useHistory()
  const token = localStorage.getItem("token")
  return (
    <nav className=" p-3">
      <Container>
        <Row>
          <Col md="6" xs="12"  className="navbarLeft">
            <img
              className="navLogo"
              src={`${API_URL}helpers/logo_purple.png`}
              alt=""
              onClick={()=> history.push("/")}
            />
            <p
              onClick={()=> history.push("/home")}
              className={`ms-5 fw-bold mt-3 ${!token ? "d-none" : "homeMenu"} `}
            >
              Home
            </p>
          </Col>
          <Col md="6" xs="12">
            {token ? (
              <div>
                <div className="navUpper mt-md-2">
                  <div className="me-4 iconNavbar">
                    <BsBell />
                  </div>
                  <div className="me-4 iconNavbar" onClick={()=> history.push("/message")}>
                    <BsEnvelope />
                  </div>
                  <div className="me-4 iconImage" onClick={()=> history.push("/my-profile")}>
                    <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                  </div>
                </div>
                {/* bottom nav */}

                <nav className="navbar navbarBottom fixed-bottom navbar-light" role="navigation">
                  <Nav className="w-100">
                    <div className=" d-flex flex-row bg-white p-2 justify-content-around w-100">
                        <NavLink onClick={()=> history.push("/")} className="nav-link" activeClassName="active">
                          <div className="row d-flex iconNavbar flex-column justify-content-center align-items-center">
                            <BsHouseDoor />
                          </div>
                        </NavLink>
                        <NavLink onClick={()=> history.push("/home")} className="nav-link" activeClassName="active">
                          <div className="row d-flex iconNavbar flex-column justify-content-center align-items-center">
                            <BsSearch />
                          </div>
                        </NavLink>
                        <NavLink onClick={()=> history.push("")} className="nav-link" activeClassName="active">
                          <div className="row d-flex iconNavbar flex-column justify-content-center align-items-center">
                            <BsBell />
                          </div>
                        </NavLink>
                        <NavLink onClick={()=> history.push("/message")} className="nav-link" activeClassName="active">
                          <div className="row d-flex iconNavbar flex-column justify-content-center align-items-center">
                            <BsEnvelope />
                          </div>
                        </NavLink>
                        <NavLink onClick={()=> history.push("/profile")} className="nav-link" activeClassName="active">
                          <div className="row d-flex iconNavbar flex-column justify-content-center align-items-center">
                            <div className="iconImage">
                              <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                            </div>
                          </div>
                        </NavLink>
                    </div>
                  </Nav>
                </nav>
              </div>
            ) : (
              <div className="d-flex align-items-center justify-content-lg-end justify-content-sm-center btnNavbar">
                <button
                  className="btn btnPekerja fw-bold text-white"
                  onClick={()=> history.push("/login/1")}
                >
                  Login Pekerja
                </button>
                <button className="btn btnRekruter fw-bold" onClick={()=> history.push("login/2")}>
                  Login Rekruter
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;