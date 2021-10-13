import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavbarHome from "../components/Navbar";
import FooterHome from "../components/Footer";
import { ACTION_GET_DETAILS2_USER } from "../redux/action/users";
import { IoLocationOutline } from "react-icons/io5";
import { API_URL } from "../helpers/env";

const ViewProfile = () => {
  const history = useHistory();
  const { id } = useParams();

  const dispatch = useDispatch();
  const dataStore = useSelector((state) => state.user);
  const data = dataStore.details2;

  useEffect(() => {
    dispatch(ACTION_GET_DETAILS2_USER(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [statusBtn, setStatusBtn] = useState(false);

  const hire = (id) => {
    history.push("/hire");
  };

  const statusActive = () => {
    setStatusBtn(!statusBtn);
    console.log(statusBtn);
  };

  // portofolio masih statik klo udah ada bisa di apus
  // co/

  return (
    <div>
      <div className="navbarHome border-bottom">
        <NavbarHome />
      </div>

      <div>
        <div className="bgWorker"></div>
        <div className="contentProfile">
          {/* <h1>Tampil Data</h1> */}
          {dataStore.loadDetails2 === true ? (
            <div className="d-flex justify-content-center align-items-center">
              <h1>Loading...</h1>
            </div>
          ) : (
            <div className="row content">
              <div className="col-lg-3 pe-lg-5 colWorker">
                <div className=" userWorker pt-5">
                  <div className="imgRounded">
                    <img
                      src={`${API_URL}uploads/${data.image}`}
                      alt="imageWorker"
                      className="imgWorker"
                    />
                  </div>
                  <div className="text-start mt-lg-3 ms-4">
                    <h3 className="nameWorker">{data.name}</h3>
                    <p className="spWorker">{data.special_skill}</p>

                    <div className="my-2 cityProfile">
                      <IoLocationOutline size={22} className="me-2" />
                      <small>{data.city}</small>
                    </div>

                    <div>
                      <p className="workplace">{data.workplace}</p>
                    </div>

                    <p className="bioWorker">{data.description}</p>
                  </div>

                  <div className="row mt-3">
                    <div className="col-12 handleBtn">
                      <button
                        type="button"
                        onClick={() => hire()}
                        className="btn btnHire"
                      >
                        Hire
                      </button>
                    </div>
                  </div>

                  <div className="text-start mt-4 ms-4">
                    <h5 className="nameSkillProfile">Skills</h5>
                    {dataStore.skills === 0 ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <small>Edit Profile untuk menambahkan Skills</small>
                      </div>
                    ) : (
                      <div className="d-flex flex-wrap mt-lg-4 mt-3">
                        {dataStore.skills.map((e, i) => (
                          <div
                            key={i}
                            className="me-lg-4 me-3 my-2 cardSkillsProfile"
                          >
                            <p>{e.name_skill}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-8 colPortfolio">
                <div className="row cardPortfolio">
                  <div className="col-lg-12 p-4">
                    <nav className="border-bottom">
                      <div className="d-flex">
                        <button
                          className={
                            !statusBtn
                              ? "btn me-5 btnPortfolio"
                              : "btn me-5 btnWorkEx"
                          }
                          onClick={statusActive}
                        >
                          Portfolio
                        </button>

                        <button
                          className={
                            statusBtn ? "btn btnPortfolio" : "btn btnWorkEx"
                          }
                          onClick={statusActive}
                        >
                          Work Experience
                        </button>
                      </div>
                    </nav>
                  </div>

                  <div className={statusBtn ? "d-none" : "col-lg-12"}>
                    <div className="row">
                          {
                            dataStore.portfolios.map((e, i) => (
                              <div key={i} className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                                <img src={`${API_URL}uploads/${e.image}`} alt="portfolio" className="pictPortfolio" />
                                <h5>{e.name_apps}</h5>
                              </div>
                            ))
                          }            
                      </div>
                  </div>

                  <div className={!statusBtn ? "d-none" : "col-lg-12 "}>
                    {dataStore.loadDetails2 === true ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <h1>Loading...</h1>
                      </div>
                    ) : (
                      <div className="row p-4">
                        {data.work_experiences.map((e, i) => (
                          <div key={i} className="col-lg-9 my-3 mx-5">
                            <div className="row">
                              <div className="col-lg-12">
                                <h5 className="workPosition">{e.position}</h5>
                              </div>

                              <div className="col-lg-12">
                                <small className="workCompany">
                                  {e.company}
                                </small>
                              </div>

                              <div className="col-lg-12">
                                <small className="workDate">
                                  {e.startWork} - {e.endWork}
                                </small>
                              </div>

                              <div className="col-lg-12 mt-3">
                                <p className="workDescript">{e.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="h-25 footerHome">
        <FooterHome />
      </div>
    </div>
  );
};

export default ViewProfile;
