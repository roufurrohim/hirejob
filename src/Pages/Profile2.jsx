import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Company from "../components/companyProfile";
import Worker from "../components/Worker.jsx";
import NavbarHome from "../components/Navbar";
import FooterHome from "../components/Footer";
import { ACTION_GET_DETAILS_USER } from "../redux/action/users";

const Profile = () => {

  const statusUser = localStorage.getItem("status")
  const id = localStorage.getItem("id")
  const token = localStorage.getItem('token')
  const history = useHistory();


  const dispatch = useDispatch()
  const dataStore = useSelector((state) => state.user)
  console.log(dataStore, "ini di profile")
  console.log(dataStore.details, "ini details")

  useEffect(() => {
    dispatch(ACTION_GET_DETAILS_USER(id, token))
  },[])

  const [statusBtn, setStatusBtn] = useState(false);


  const hire = (id) => {
    console.log(id);
    history.push("/hire");
  };

  const editProfile = (id) => {
    history.push(`/editprofile/${id}`)
  }

  const statusActive = () => {
    setStatusBtn(!statusBtn);
    console.log(statusBtn);
  };

  const logout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div>
      <div className="navbarHome border-bottom">
        <NavbarHome />
      </div>
        
      <div>
        <div className={statusUser === '0' ? "d-block" : "d-none"}>
          {dataStore.loadDetails === true ? (
            <div>loading..</div>
          ):(
            <Company 
            handleLogout = {logout}
            companydata={dataStore.details} />    
          )}
        </div>

        <div className={ statusUser === '1' ? "d-block" : "d-none" }>
          {/* {dataStore.loadDetails === true ? ( */}
            {/* <div> loading </div> */}
          {/* ):( */}
            <Worker
            workerData={dataStore.details}
            toHire={hire}
            statusHandle={statusActive}
            statusBtn={statusBtn}
            status={statusUser}
            handleEdit={editProfile}
            handleLogout={logout}
          />
          {/* // )} */}
         
        </div>    
      </div>

      <div className="h-25 footerHome">
        <FooterHome />
      </div>
    </div>
  );
};

export default Profile;
