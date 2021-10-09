import React, {useState} from "react";
import {
    Container,
    Col,
    Row,
} from "reactstrap";
import { API_URL } from "../helpers/env";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Landingpage.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Landingpage = () =>{
    const history = useHistory()

    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <div>
            <Navbar />
            <div className="openSans">
                <Container>
                        {/* Tagline */}
                        <div className="mt-lg-5 mt-4">
                            <Row>
                                <Col xs="12" md="6">
                                    <div className=" divHeight d-flex justify-content-center flex-column">
                                        <h1 className=" fw-bold taglineTittle">Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
                                        <p className="fs14 mt-3 mb-md-5 mb-4 taglineSubTittle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                        <button onClick={()=> history.push("/home")} className="bgPurple fs12 fw-bold text-white buttonTagline">Mulai Dari Sekarang</button>
                                    </div>
                                </Col>
                                <Col xs="6" md="6">
                                    <div className="divHeight imageTagline">
                                        <div className="position-absolute">
                                            <div className="graySquare"></div>
                                            <div className="imageLanding">
                                                <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                                            </div>
                                            <div className="purpleSquare bgPurple"></div>
                                            <div className="yellowSquare bgYellow"></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* Benefit */}
                        <div>
                            <Row>
                                <Col md="6">
                                    <div className="marginTop divHeight imageBenefit">
                                        <div className="position-absolute">
                                            <div className="benefitGraySquare bgGray position-absolute"></div>
                                            <div className="benefitImage position-absolute"><img src={`${API_URL}helpers/image1.jpeg`} alt="" width="500px" height="auto" /></div>
                                            <div className="benefitPurpleSquare bgPurple position-absolute"></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="marginTop divHeight d-flex justify-content-center flex-column">
                                        <h1 className="fs30 fw-bold benefitTittle">Kenapa harus mencari tallent di peworld</h1>
                                        <ul className="fs14 mt-2 list-unstyled benefitlist">
                                            <li className="liLanding"> <span className="spanLanding bgPurple">✓</span> Lorem ipsum dolor sit amet </li>
                                            <li className="liLanding"> <span className="spanLanding bgPurple">✓</span> Lorem ipsum dolor sit amet </li>
                                            <li className="liLanding"> <span className="spanLanding bgPurple">✓</span> Lorem ipsum dolor sit amet </li>
                                            <li className="liLanding"> <span className="spanLanding bgPurple">✓</span> Lorem ipsum dolor sit amet </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* Skill Tallent */}
                        <div>
                            <Row>
                                <Col md="6">
                                    <div className="divHeight marginTop d-flex justify-content-center flex-column"> 
                                        <h1 className="fs30 fw-bold skillTittle">Skill Talent</h1>
                                        <p className="fs14 taglineSubTittle mt-2 skillSubtittle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor</p>
                                        <Row>
                                            <Col xs="6">
                                                <ul className="fs14 mt-2 list-unstyled">
                                                    <li className="liLanding"> <span className="spanLanding bgYellow text-white">✓</span> Java </li>
                                                    <li className="liLanding"> <span className="spanLanding bgYellow text-white">✓</span> Kotlin </li>
                                                    <li className="liLanding"> <span className="spanLanding bgYellow text-white">✓</span> PHP    </li>
                                                    <li className="liLanding"> <span className="spanLanding bgYellow text-white">✓</span> Javascript </li>
                                                    </ul>
                                                </Col>
                                            <Col xs="6">
                                                <ul className="fs14 mt-2 list-unstyled">
                                                    <li className="liLanding"><span className="spanLanding bgYellow text-white">✓</span> Golang</li>
                                                    <li className="liLanding"><span className="spanLanding bgYellow text-white">✓</span> C++</li>
                                                    <li className="liLanding"><span className="spanLanding bgYellow text-white">✓</span> Ruby</li>
                                                    <li className="liLanding"><span className="spanLanding bgYellow text-white">✓</span> 10+ Bahasa lainnya</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="marginTop divHeight skillImage">
                                        <div className="position-absolute">
                                            <div className="skillGraySquare bgGray position-absolute"></div>
                                            <div className="skillImage position-absolute"><img src={`${API_URL}helpers/image2.jpg`} alt="" width="500px" height="auto" /></div>
                                            <div className="skillYellowSquare bgYellow position-absolute"></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            
                        </div>
                </Container>
                {/* Carausel */}
                <div className="bgGray marginTop carouselComment">
                    <Container>
                        <h1 className="text-center fw-bold pt-5 pb-3">Their opinion about peworld</h1>
                        <Slider {...settings}>
                            <div className="carousel">
                                <div className="commentCard">
                                    <div className="imageComment">
                                        <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                                    </div>
                                    <h1 className="commentName fw-bold">Elizabeth</h1>
                                    <p className="commentJob">Queen</p>
                                    <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                            <div className="carousel">
                                <div className="commentCard">
                                    <div className="imageComment">
                                        <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                                    </div>
                                    <h1 className="commentName fw-bold">Elizabeth</h1>
                                    <p className="commentJob">Queen</p>
                                    <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                            <div className="carousel">
                                <div className="commentCard">
                                    <div className="imageComment">
                                        <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                                    </div>
                                    <h1 className="commentName fw-bold">Elizabeth</h1>
                                    <p className="commentJob">Queen</p>
                                    <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div><div className="carousel">
                                <div className="commentCard">
                                    <div className="imageComment">
                                        <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                                    </div>
                                    <h1 className="commentName fw-bold">Harry</h1>
                                    <p className="commentJob">Web Developer</p>
                                    <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                            <div className="carousel">
                                <div className="commentCard">
                                    <div className="imageComment">
                                        <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                                    </div>
                                    <h1 className="commentName fw-bold">Elizabeth</h1>
                                    <p className="commentJob">Queen</p>
                                    <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                            <div className="carousel">
                                <div className="commentCard">
                                    <div className="imageComment fw-bold">
                                        <img src={`${API_URL}helpers/image3.jpg`} alt="" />
                                    </div>
                                    <h1 className="commentName">Elizabeth</h1>
                                    <p className="commentJob">Queen</p>
                                    <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                        </Slider>
                    </Container>
                </div>
                <div className="pt-5 pb-5"> 
                    <Container>
                        <div className="w-100 bgPurple p-4 cardPromo">
                            <Row>
                                <Col xs="6">
                                    <h1 className="text-white cardPromoTittle fw-bold">Lorem ipsum dolor sit amet</h1>
                                </Col>
                                <Col xs="6" className="d-flex justify-content-end">
                                    <button type="" onClick='#' className="btn bg-white buttonPromo fw-bold textPurple p-2">Mulai dari Sekarang</button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default Landingpage