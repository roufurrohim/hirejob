import React from "react";
import "./css/Worker.css";
import { IoLocationOutline } from "react-icons/io5";

const Worker = ({ workerData, toHire, statusBtn, status, statusHandle, portfolio, work, handleEdit }) => {
  return (
    <div>
      <div className="bgWorker"></div>
      <div className="contentProfile">
        {workerData.map((e, i) => (
          <div key={i} className="row content">

            <div className="col-lg-3 pe-lg-5 colWorker">
              <div className=" userWorker pt-5">
                <div className="imgRounded">
                  <img src={e.pict} alt="imageWorker" className="imgWorker" />
                </div>
                <div className="text-start mt-lg-3 ms-4">
                  <h3 className="nameWorker">{e.name}</h3>
                  <p className="spWorker">{e.special_skill}</p>

                  <div className="my-2 cityProfile">
                    <IoLocationOutline size={22} className="me-2" />
                    <small>{e.city}</small>
                  </div>

                  <div>
                    <p className="workplace">{e.workplace}</p>
                  </div>

                  <p className="bioWorker">{e.description}</p>
                </div>

                <div className="row mt-3">
                  {/* <div className="col-12 d-none handleBtn"> */}
                  <div className={status === '1' ? "col-12 handleBtn" : "d-none" }>
                    <button
                      type="button"
                      onClick={() => handleEdit('1')}
                      className="btn btnHire"
                    >
                      Edit profile
                    </button>
                  </div>

                  <div className={status === '0' ? "col-12 handleBtn" : "d-none"}>
                    <button
                      type="button"
                      onClick={() => toHire('1')}
                      className="btn btnHire"
                    >
                      Hire
                    </button>
                  </div>
                </div>

                <div className="text-start mt-4 ms-4">
                  <h5 className="nameSkillProfile">Skills</h5>
                  <div className="d-flex flex-wrap mt-lg-4 mt-3">
                    {e.skills.map((e, i) => (
                      <div
                        key={i}
                        className="me-lg-4 me-3 my-2 cardSkillsProfile"
                      >
                        <p>{e.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          
            <div className="col-lg-8 colPortfolio">
                <div className="row cardPortfolio">
                  <div className="col-lg-12 p-4">
                    <nav className="border-bottom">
                      
                      <div className="d-flex">
                        <button
                         className={!statusBtn ? "btn me-5 btnPortfolio" : "btn me-5 btnWorkEx"}
                         onClick={statusHandle}>
                           
                          Portfolio
                         
                         </button>
                        
                        <button className={statusBtn ? "btn btnPortfolio" : "btn btnWorkEx"}
                        onClick={statusHandle}
                        >
                          
                          Work Experience
                        
                        </button>  

                      </div>
                        
                    </nav>
                  </div>

                    <div className={ statusBtn ? "d-none" : "col-lg-12"}>
                      <div className="row">
                          {
                            portfolio.map((e, i) => (
                              <div key={i} className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                                <img src={e.picture} alt="portfolio" className="pictPortfolio" />
                                <h5>{e.name}</h5>
                              </div>
                            ))
                          }            
                      </div>
                    </div>
                    
                    <div className={ !statusBtn ? "d-none" : "col-lg-12 "}>
                      <div className="row p-4">
                          {
                            work.map((e, i) => (
                              <div key={i} className="col-lg-9 my-3 mx-5">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <h5 className="workPosition">{e.position}</h5>    
                                  </div>

                                  <div className="col-lg-12">
                                    <small className="workCompany">{e.company}</small>    
                                  </div>

                                  <div className="col-lg-12">
                                    <small className="workDate">{e.startWork} - {e.endWork}</  small>    
                                  </div>

                                  <div className="col-lg-12 mt-3">
                                    <p className="workDescript">{e.description}</p>    
                                  </div>
                                  
                                </div>
                                
                              </div>
                            ))
                          }            
                      </div>
                    </div>

                </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Worker;
