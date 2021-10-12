import React from "react"
import { Container, Row, Col, Nav } from "reactstrap"
import { API_URL } from "../helpers/env"
import "./css/Navbar.css"
import { BsBell, BsEnvelope, BsHouseDoor, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom"


const Navbar=()=>{
  const history = useHistory()
  const token = localStorage.getItem("token")
  const img = localStorage.getItem("image")
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
              exact

            />
            <NavLink 
              to= "/home"
              activeClassName="textPurple"
              exact
              className={`ms-5 fw-bold txtDark  text-decoration-none  ${!token ? "d-none" : "homeMenu"} `}
            >
              Home
            </NavLink>
          </Col>
          <Col md="6" xs="12">
            {token ? (
              <div>
                <div className="navUpper">
                  <NavLink exact to=""  activeClassName="" className="me-4 iconNavbar txtDark text-decoration-none">
                    <BsBell />
                  </NavLink>
                  <NavLink exact to="/message" activeClassName="textPurple" className="me-4 iconNavbar text-decoration-none txtDark">
                    <BsEnvelope />
                  </NavLink>
                  <div className="me-4 iconImage" onClick={()=> history.push("/my-profile")}>
                    {img?(
                      <img src={`${API_URL}uploads/${img}`} alt="" />
                    ):(
                      <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                    )}
                  </div>
                </div>
                {/* bottom nav */}

                <nav className="navbar navbarBottom fixed-bottom navbar-light" role="navigation">
                  <Nav className="w-100">
                    <div className=" d-flex flex-row bg-white p-2 justify-content-around w-100">
                        <NavLink exact to="/" className="nav-link txtDark" activeClassName="textPurple">
                          <div className="row d-flex iconNavbar   flex-column justify-content-center align-items-center">
                            <BsHouseDoor />
                          </div>
                        </NavLink>
                        <NavLink exact to="/home" className="nav-link txtDark" activeClassName="textPurple">
                          <div className="row d-flex iconNavbar flex-column  justify-content-center align-items-center">
                            <BsSearch />
                          </div>
                        </NavLink>
                        <NavLink to="#" className="nav-link txtDark" activeClassName="">
                          <div className="row d-flex iconNavbar flex-column  justify-content-center align-items-center">
                            <BsBell />
                          </div>
                        </NavLink>
                        <NavLink to="/message" exact className="nav-link txtDark" activeClassName="textPurple">
                          <div className="row d-flex iconNavbar flex-column  justify-content-center align-items-center">
                            <BsEnvelope />
                          </div>
                        </NavLink>
                        <NavLink to="/my-profile" exact className="nav-link txtDark" activeClassName="textPurple">
                          <div className="row d-flex iconNavbar flex-column  justify-content-center align-items-center">
                            <div className="iconImage">
                              {img?(
                                <img src={`${API_URL}uploads/${img}`} alt="" />
                              ):(
                                <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                              )}
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
                  onClick={()=> history.push("/login/1")} exact
                >
                  Login Pekerja
                </button>
                <button className="btn btnRekruter fw-bold" exact onClick={()=> history.push("login/0")}>
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
