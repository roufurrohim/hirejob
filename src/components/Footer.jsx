import React from "react"
import "./css/Footer.css"
import { Container, Row, Col } from "reactstrap"
import { API_URL } from "../helpers/env"

const Footer = () => {
  return (
    <footer>
      <Container className="pb-lg-3 footerBottom pt-5 text-white">
        <img src={`${API_URL}helpers/logo_white.png`} className="footerLogo" alt="" />
        <p className="footerTagline mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <hr />
        <Row>
            <Col xs="6">
              <p className="footerCopyright ">
                2020 Pewworld. All right reserved
              </p>        
            </Col>
            <Col xs="6">
              <div className="d-flex footerCopyright justify-content-end">
                <p className="me-5">Telepon</p>
                <p>Email</p>
              </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer