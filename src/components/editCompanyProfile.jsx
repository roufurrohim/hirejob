import React from "react";
import { Link } from "react-router-dom";

const CompanyEdit = ({companydata, setTable, handleSubmit}) =>{
    return(
        <div class="container-fluid col-12 body">
        <div class="row justify-content-center bg-light background">
        <div class="container-fluid col-12 m-0" style={{backgroundColor:"rgb(94, 80, 161)", height:'250px', zIndex:'0', position:'absolute'}}>
                             </div>
           
                 <div class="col-xs-12 col-lg-3 me-lg-5">
                
                    <><div class="col-xs-12 col-lg-12 bg-white mt-5 mb-5 card">
                         <img src={companydata.image} alt="" class="rounded-circle offset-4 mt-3" style={{ height: "120px", width: "120px", objectFit: 'cover' }}></img>
                         <div>
                             <h5 class="text-center mb-2 head mt-3 text-muted">Edit</h5>
                             <h5 class="mb-2 head mt-3 ms-4">{companydata.name}</h5>
                             <div>
                                 <p class="ms-4 mb-1 text-muted mt-1">{companydata.sector}</p>
                             </div>
                             <div class="d-flex ms-4">
                                 <img src="https://raw.githubusercontent.com/aliefabdussalam/week3/main/map-pin%20(4)%201.png" alt="" style={{ height: "20px", width: "20px" }} />
                                 <p class="mb-4 text-muted ">{companydata.city}</p>
                             </div>
                         </div>
                     </div><button class="btn btn-lg col-12  col-xs-6" onClick={handleSubmit} style={{ backgroundColor: "rgb(94, 80, 161)", color: 'white' }}>
                             Simpan
                         </button>
                         <Link to="/my-profile">
                         <button class="btn btn-outline col-12 col-xs-6 mt-3" style={{ color: 'rgb(94, 80, 161)', borderColor: "rgb(94, 80, 161)" }}>
                             Batal
                         </button>
                         </Link>
                         </>
                   
                </div><div class="col-xs-12 col-lg-6 bg-white mt-5 mb-5 card">
                        <div class="Register-wrap p-4 p-md-5">
                            <h5 class="text-left mb-4">Data Perusahaan</h5>
                            <form onSubmit={handleSubmit} class="Register-form">
                                <p class="formtext">Nama Perusahaan :</p>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        placeholder="Nama perusahaan"
                                        value={companydata.name}
                                        onChange={(e)=>setTable(e)}
                                         />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Bidang :</p>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="sector"
                                        placeholder="Tulis Bidang disini"
                                        onChange={(e)=>setTable(e)}
                                        value={companydata.sector}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Kota :</p>
                                    <input
                                        type="text"
                                        name="city"
                                        class="form-control"
                                        placeholder="Masukkan nama kota"
                                        onChange={(e)=>setTable(e)}
                                        value={companydata.city}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">deskripsi ringan :</p>
                                    <textarea
                                        type="text"
                                        name="descriptions"
                                        class="form-control text-lg-start"
                                        placeholder="deskripsi ringan"
                                        onChange={(e)=>setTable(e)}
                                        value={companydata.descriptions}
                                        style={{height:"120px"}}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Email :</p>
                                    <input
                                        type="text"
                                        name="email"
                                        class="form-control"
                                        placeholder="Masukkan alamat email"
                                        onChange={(e)=>setTable(e)}
                                        value={companydata.email}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Instagram :</p>
                                    <input
                                        type="text"
                                        name="ig"
                                        class="form-control"
                                        placeholder="Masukkan akun instagram"
                                        onChange={(e)=>setTable(e)}
                                        value={companydata.ig}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Nomor Telepon :</p>
                                    <input
                                        type="text"
                                        name="no_telp"
                                        class="form-control"
                                        placeholder="Masukkan nomor telepon"
                                        onChange={(e)=>setTable(e)}
                                        value={companydata.no_telp}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">linkedin :</p>
                                    <input
                                        type="text"
                                        name="linkedin"
                                        class="form-control"
                                        placeholder="Masukkan akun linkedin"
                                        onChange={(e)=>setTable(e)}
                                        value={companydata.linkedin}
                                        required />
                                </div>
                            </form>
                        </div>
                    </div>
     
            
           
            
            </div>
    </div>
    )
}
export default CompanyEdit