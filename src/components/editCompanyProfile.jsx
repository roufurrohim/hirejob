import React, { useState, useRef, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL } from "../helpers/env"
import { ACTION_GET_MYDETAILS_USER, UPDATE_USER } from "../redux/action/users";

const CompanyEdit = () =>{
  // const [data, setData] = useState({})
  // setData(companydata)
  const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const detail = user.mydetails

      const getData = () =>{
        dispatch(ACTION_GET_MYDETAILS_USER())
      }
      useEffect(() => {
        getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      const [users, setUser] = useState({});
  useEffect(() => {
    setUser({
      name: detail.name,
      sector: detail.sector,
      image: detail.image,
      imagePreview: null,
      city: detail.city,
      descriptions: detail.descriptions,
      email: detail.email,
      no_telp: detail.no_telp,
      ig: detail.ig,
      github: detail.github,
      linkedin: detail.linkedin,
    })
  }, [detail])
  const changeUserCompanyFile = (event) => {
    setUser({
      ...users,
      image: event.target.files[0],
      imagePreview: URL.createObjectURL(event.target.files[0])
    });
  }
  const changeUserCompany = (event) => {
    setUser({
      ...users,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users)
    const formData = new FormData()
    formData.append("name", users.name)
    formData.append("email", users.email)
    formData.append("password", users.password)
    formData.append("no_telp", users.no_telp)
    formData.append("descriptions", users.descriptions)
    formData.append("sector", users.sector)
    formData.append("image", users.image)
    formData.append("city", users.city)
    formData.append("ig", users.ig)
    formData.append("linkedin", users.linkedin)
    console.log(users)
    UPDATE_USER(detail.id, formData).then((response) => {
      console.log(response)
      localStorage.setItem("image", detail.image)
    }).catch((err) => {
      console.log(err)
    })
  };
  const history = useHistory()
    const done = (e) => {
      handleSubmit(e)
      history.push('/my-profile')
    }
    return(
        <div class="container-fluid col-12 body" style={{height:'unset'}}>
        <div class="row justify-content-center bg-light background">
        <div class="container-fluid col-12 m-0" style={{backgroundColor:"rgb(94, 80, 161)", height:'10%', zIndex:'0', position:'absolute'}}>
        </div>
           
                 <div class="col-xs-12 col-lg-3 me-lg-5">
                
                    <><div class="col-xs-12 col-lg-12 bg-white mb-5 card">
                        <label for="inputimg">
                         <img src={users.imagePreview?users.imagePreview:`${API_URL}uploads/${detail.image}`} alt="" class="rounded-circle offset-4 mt-3" style={{ height: "120px", width: "120px", objectFit: 'cover' }}></img>
                         <input style={{display:'none'}} type='file' name="image" id="inputimg" onChange={changeUserCompanyFile} />
                        </label>
                         <div>
                             <h5 class="text-center mb-2 head mt-3 text-muted">Edit</h5>
                             <h5 class="mb-2 head mt-3 ms-4">{detail.name}</h5>
                             <div>
                                 <p class="ms-4 mb-1 text-muted mt-1">{detail.sector}</p>
                             </div>
                             <div class="d-flex ms-4">
                                 <img src="https://raw.githubusercontent.com/aliefabdussalam/week3/main/map-pin%20(4)%201.png" alt="" style={{ height: "20px", width: "20px" }} />
                                 <p class="mb-4 text-muted ">{detail.city}</p>
                             </div>
                         </div>
                     </div>
                          <Link to="/my-profile">
                          <button class="btn btn-lg col-12  col-xs-6" onClick={(e)=>done(e)} style={{ backgroundColor: "rgb(94, 80, 161)", color: 'white' }}>
                             Simpan
                         </button>
                         </Link>
                         <Link to="/my-profile">
                         <button class="btn btn-outline col-12 col-xs-6 mt-3" style={{ color: 'rgb(94, 80, 161)', borderColor: "rgb(94, 80, 161)" }}>
                             Batal
                         </button>
                         </Link>
                         </>
                   
                </div><div class="col-xs-12 col-lg-6 bg-white mb-5 card">
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
                                        value={users.name}
                                        onChange={changeUserCompany}
                                         />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Bidang :</p>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="sector"
                                        placeholder="Tulis Bidang disini"
                                        onChange={changeUserCompany}
                                        value={users.sector}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Kota :</p>
                                    <input
                                        type="text"
                                        name="city"
                                        class="form-control"
                                        placeholder="Masukkan nama kota"
                                        onChange={changeUserCompany}
                                        value={users.city}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">deskripsi ringan :</p>
                                    <textarea
                                        type="text"
                                        name="descriptions"
                                        class="form-control text-lg-start"
                                        placeholder="deskripsi ringan"
                                        onChange={changeUserCompany}
                                        value={users.descriptions}
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
                                        onChange={changeUserCompany}
                                        value={users.email}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Password :</p>
                                    <input
                                        type="password"
                                        name="password"
                                        class="form-control"
                                        placeholder="Masukkan password"
                                        onChange={changeUserCompany}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Instagram :</p>
                                    <input
                                        type="text"
                                        name="ig"
                                        class="form-control"
                                        placeholder="Masukkan akun instagram"
                                        onChange={changeUserCompany}
                                        value={users.ig}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">Nomor Telepon :</p>
                                    <input
                                        type="number"
                                        name="no_telp"
                                        class="form-control"
                                        placeholder="Masukkan nomor telepon"
                                        onChange={changeUserCompany}
                                        value={users.no_telp}
                                        required />
                                </div>
                                <div class="form-group mt-3">
                                    <p class="formtext">linkedin :</p>
                                    <input
                                        type="text"
                                        name="linkedin"
                                        class="form-control"
                                        placeholder="Masukkan akun linkedin"
                                        onChange={changeUserCompany}
                                        value={users.linkedin}
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
