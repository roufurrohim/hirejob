import "bootstrap/dist/css/bootstrap.min.css";
import "../Pages/css/Logsign.css";
import React, { useState } from "react";
import { FORGET_PASS } from "../redux/action/users";


const Resetpw = (props) => {
  // const history = useHistory()
  const [user, setUser] = useState({
    email: "",
  });

  const setData = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    // console.log(user)
    FORGET_PASS(user)
      .then((response) => {
        alert("link reset password sudah dikirim ke email anda");
      })
      .catch((error) => {
        // console.log(error)
        alert(error.error);
      });
  };
  return (
    <div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <aside className="asdlogin col-lg-6">
              <img
                src="https://raw.githubusercontent.com/farizian/chatting/master/img/fixedbg.png"
                alt=""
                srcset=""
              />
            </aside>
            <section className="lgn col-lg-6">
              <form onSubmit="" className="formlgn">
                <div className="logolgn">
                  <img
                    src="https://raw.githubusercontent.com/farizian/chatting/master/img/Groupwaswa.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="header">
                  <h1>Reset password</h1>
                  <p>
                    Enter your user account's verified email address and we will
                    send you a password reset link.
                  </p>
                </div>
                <div className="signbox">
                  <h3>Email</h3>
                  <div className="textbox">
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      name="email"
                      value={user.email}
                      onChange={setData}
                    ></input>
                  </div>
                </div>
              </form>
              <div className="buttonlgn">
                <div className="btn">
                  <button className="login" onClick={submit}>
                    Send password reset email
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resetpw;
