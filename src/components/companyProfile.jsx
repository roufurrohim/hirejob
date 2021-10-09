import React from "react";
import { Link } from "react-router-dom";

const Company = ({companydata}) => {
    return(
        <div class="container-fluid col-12 body">
        <div class="row justify-content-center bg-light background">
            <div class="col-md-6 col-lg-10 bg-white mt-5 mb-5 card">
            {/* <div class="container-fluid col-12 m-0" style={{backgroundColor:"rgb(94, 80, 161)", height:'80px', zIndex:'-1', position:'absolute'}}>
                             </div> */}
                <div class="login-wrap">
                    {companydata.map((e, i) => (
                        
                        <div class="text-center">
                        <img src={e.image} alt="" class="rounded-circle" style={{height:"120px", width:"120px", objectFit:'cover' }}></img>
                        <div>
                            <h5 class="text-center mb-2 head mt-3">{e.name}</h5>
                        </div>
                        <div>
                            <p class="text-center mb-1 text-muted mt-1">{e.sector}</p>
                        </div>
                        <div class="d-flex offset-lg-5 offset-2"> 
                            <img src="https://raw.githubusercontent.com/aliefabdussalam/week3/main/map-pin%20(4)%201.png" alt=""style={{height:"20px", width:"20px"}}/>
                            <p class="text-center mb-4 text-muted">{e.city}</p>
                        </div>
                        <p class="text-center mb-4 text-muted col-lg-4 offset-lg-4 col-xs-12">{e.descriptions}</p>
                        <Link to="/edit-profile">
                        <button class="btn btn-lg col-lg-3 col-xs-6" style={{backgroundColor:"rgb(94, 80, 161)", color:'white'}}>
                            Edit Profile
                        </button>
                        </Link>
                        <div class="d-flex offset-lg-5 offset-2 mt-5"> 
                            <img src="https://github.com/aliefabdussalam/week3/blob/main/mail%20(4).png?raw=true" alt=""style={{height:"20px", width:"20px"}}/>
                            <p class="text-center text-muted col-lg-3 ms-2">{e.email}</p>
                        </div>
                        <div class="d-flex offset-lg-5 offset-2"> 
                            <img src="https://github.com/aliefabdussalam/week3/blob/main/instagram.png?raw=true" alt=""style={{height:"20px", width:"20px"}}/>
                            <p class=" text-muted col-lg-3 ms-2">{e.ig}</p>
                        </div>
                        <div class="d-flex offset-lg-5 offset-2"> 
                            <img src="https://github.com/aliefabdussalam/week3/blob/main/phone%201.png?raw=true" alt=""style={{height:"20px", width:"20px"}}/>
                            <p class=" text-muted col-lg-3 ms-2">{e.no_telp}</p>
                        </div>
                        <div class="d-flex offset-lg-5 offset-2"> 
                            <img src="https://github.com/aliefabdussalam/week3/blob/main/linkedin%201.png?raw=true" alt=""style={{height:"20px", width:"20px"}}/>
                            <p class=" text-muted col-lg-3 ms-2">{e.linkedin}</p>
                        </div>
                        </div>
                    ))}
             
        </div>
            </div>
        </div>
    </div>
    )
}
export default Company