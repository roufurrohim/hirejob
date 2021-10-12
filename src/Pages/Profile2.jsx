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

  
// portofolio masih statik klo udah ada bisa di apus
const portfolio = [
  {
    id: 1,
    name: "Reminder App",
    picture:
      "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 2,
    name: "Reminder App",
    picture:
      "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 3,
    name: "Reminder App",
    picture:
      "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 4,
    name: "Reminder App",
    picture:
      "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 5,
    name: "Reminder App",
    picture:
      "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 6,
    name: "Reminder App",
    picture:
      "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
]


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
            <Company companydata={dataStore.details} />    
          )}
        </div>

        <div className={ statusUser === '1' ? "d-block" : "d-none" }>
          {dataStore.loadDetails === true ? (
            <div> loading </div>
          ):(
            <Worker
            workerData={dataStore.details}
            portfolio={portfolio}
            toHire={hire}
            statusHandle={statusActive}
            statusBtn={statusBtn}
            status={statusUser}
            handleEdit={editProfile}
          />
          )}
         
        </div>    
      </div>

      <div className="h-25 footerHome">
        <FooterHome />
      </div>
    </div>
  );
};

export default Profile;
