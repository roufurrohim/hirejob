import React, { useState, useRef, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavbarHome from "../components/Navbar";
import FooterHome from "../components/Footer";
import EditWorker from "../components/editWorker";
import CompanyEdit from "../components/editCompanyProfile";
import { ACTION_GET_MYDETAILS_USER, UPDATE_WORKER, INSERT_ADD_SKILLS, INSERT_ADD_WORK_EXP, INSERT_ADD_PORTFOLIO } from "../redux/action/users";

const EditProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory()
  const idUser = localStorage.getItem("id")

  const dataStore = useSelector((state) => state.user);
  const dataUser = dataStore.mydetails
    console.log(dataUser)
  useEffect(() => {
    dispatch(ACTION_GET_MYDETAILS_USER())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const [dataPerson, setDataPerson] = useState(
    {
      nama: dataUser.name,
      image: dataUser.image,
      imagePrev: "",
      city: dataUser.city,
      special_skill: dataUser.special_skill,
      workplace: dataUser.workplace,
      description: dataUser.description,
      email: dataUser.email,
      password: dataUser.password,
      ig: dataUser.ig,
      github: dataUser.github,
      gitlab: dataUser.gitlab,
    }
  )
  console.log(dataUser.skills, )

  const [workExp, setWorkExp] = useState(dataUser.work_experiences === undefined ? [] : dataUser.work_experiences);
  
  const [dataSkills, setDataSkills] = useState(dataUser.skills === undefined ? [] : dataUser.skills)
  
  const [portfolio, setPortfolio] = useState(dataUser.portfolios === undefined ? [] : dataUser.portfolios)
  
  const [addSkill, setAddSkill] = useState("");

  const [msgSkill, setMsgSkill] = useState("")
  
  const [msgWork, setMsgWork] = useState("")

  const [addWork, setAddWork] = useState({
    position: "",
    company: "",
    start_work: "",
    end_work: "",
    description: "",
    users_id: parseInt(idUser),
  });

  const [addPortfolio, setAddPortfolio] = useState({
    name_apps: "",
    image: "",
    imgPrev:"",
    type: "",
    link_repo: "",
    users_id: parseInt(idUser),
  });

  const changePerson = (e) => {
    const {name, value} = e.target
    setDataPerson({
      ...dataPerson,
      [name]: value,
    })
  }

  // handle uploads image profile
  const changeHandlerImage = (e) => {
    setDataPerson({
      ...dataPerson,
      image: e.target.files[0],
      imagePrev: URL.createObjectURL(e.target.files[0]),
    });
  };

  const hiddenFileInput = useRef(null);

  const handleClickImg = e => {
    hiddenFileInput.current.click()
  }

  // handle drag & drop
  // const fileInput = useRef(null);
  // const [imagePort, setImagePort] = useState(null);
  // const [previewUrl, setPreviewUrl] = useState("");
  // const handleFile = (file) => {
  //   setImagePort(file);
  //   setPreviewUrl(URL.createObjectURL(file));
  // };

  // const handleOndragOver = (event) => {
  //   event.preventDefault();
  // };
  // const handleOndrop = (event) => {
  //   //prevent the browser from opening the image
  //   event.preventDefault();
  //   event.stopPropagation();
  //   //let's grab the image file
  //   const fileImg = event.target.files[0]
  //   let imageFile = event.dataTransfer.files[0];
  //   setPortfolio({
  //     ...portfolio,
  //     image: fileImg,
  //   })
    
  //   handleFile(imageFile);
  // };
  // end to handle drag & drop

  const changeHandlerImagePort = (e) => {
    setAddPortfolio({
      ...addPortfolio,
      image: e.target.files[0],
      imgPrev: URL.createObjectURL(e.target.files[0]),
    });
  };

  // handle change work
  const changeWorker = (e) => {
    const { name, value } = e.target;
    setAddWork({
      ...addWork,
      [name]: value,
    });
  };

  const changePortfolio = (e) => {
    const { name, value } = e.target;
    setAddPortfolio({
      ...addPortfolio,
      [name]: value,
    });
  };

  const changeSkill = (e) => {
    const { value } = e.target;
    setAddSkill(value)
  };

  // const delSkills = (i) => {
  //   const data = [...dataSkills];
  //   data.splice(i, 1);
  //   setDataSkills([...data])
  // };

  // const delWorks = (i) => {
  //   const data = [...workExp];
  //   data.splice(i, 1);
  //   setWorkExp({
  //     ...workExp,
  //     workExperience: [...data],
  //   });
  // };

  // const delPortfolio = (i) => {
  //   const data = [...worker.portfolio];
  //   data.splice(i, 1);
  //   setWorker({
  //     ...worker,
  //     portfolio: [...data],
  //   });
  // };

  // handdle submit Add portfolio
  const handleAddPortfolio = (e) => {
    e.preventDefault();
    setPortfolio([...portfolio, addPortfolio])
    console.log(addPortfolio)
    const formData = new FormData()
    formData.append("name_apps", addPortfolio.name_apps);
    formData.append("link_repo", addPortfolio.link_repo);
    formData.append("image", addPortfolio.image);
    formData.append("type", addPortfolio.type);
    INSERT_ADD_PORTFOLIO(idUser, formData).then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    setAddPortfolio({
      name_apps: "",
      image: "",
      type: "",
      link_repo: "",
      imagePrev: ""
    });
    // setImagePort(null);
    // setPreviewUrl("");
  };

  // handdle submit Add Skills
  const handleAddSkills = (e) => {
    e.preventDefault();
    setDataSkills([...dataSkills, {name_skill: addSkill}])
    const payload = {
      name_skill: addSkill,
      users_id: parseInt(idUser)
    }
    INSERT_ADD_SKILLS(payload)
    .then((res) => {
      setMsgWork(res.message)
    })
    .catch((err) => {
      alert(err.response)
    })
    setAddSkill("");
  };

  // handdle submit Add Works
  const handleAddWorks = (e) => {
    e.preventDefault();
    INSERT_ADD_WORK_EXP(addWork)
    setWorkExp([
      ...workExp,
      addWork,
    ]);
    setAddWork({
      position: "",
      company: "",
      start_work: "",
      end_work: "",
      description: "",
      users_id: parseInt(idUser)
    });
  };

  // handdle change submit data worker
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(dataPerson)
  // };

  const handleSubmitWorker = (e) => {
    e.preventDefault()
    console.log(dataPerson)
    const formData = new FormData()
    formData.append("name", dataPerson.nama);
    formData.append("email", dataPerson.email);
    formData.append("image", dataPerson.image);
    formData.append("github", dataPerson.github);
    formData.append("gitlab", dataPerson.gitlab);
    formData.append("ig", dataPerson.ig);
    formData.append("special_skill", dataPerson.special_skill);
    formData.append("description", dataPerson.description);
    formData.append("workplace", dataPerson.workplace);
    formData.append("city", dataPerson.city);
    UPDATE_WORKER(idUser, formData)
    .then((res) => {
      history.push(`/my-profile`)
    })
    .catch((err) => alert(err.response.message.message))
  }
  
  const cancel = () => {
    history.push(`/my-profile`)
  }
  return (
    <div>
      <div className="navbarHome border-bottom">
        <NavbarHome />
      </div>
      <div className="bgWorker"></div>
      <div className={id === '0' ? "d-block" : "d-none"}>
        <CompanyEdit
          // companydata={user}
          // setTable={changeUserCompany}
          // handleSubmit={handleSubmit}
        />
      </div>
      <div className={id === '1' ? "d-block" : "d-none"}>
        {
          dataStore.loadMyDetails === true ? <h1>Loading...</h1> : 
          // <h1>Harusnya Muncul</h1>
          <EditWorker
          worker={dataStore.details}
          handleChange={changeWorker}
          dataSkills={dataSkills}
          handleSkill={changeSkill}
          // delSkills={delSkills}
          handleAddSkills={handleAddSkills}
          addSkill={addSkill}
          msgSkill={msgSkill}
          workExp={workExp}
          addWork={addWork}
          handleAddWorks={handleAddWorks}
          // delWorks={delWorks}
          dataPortfolio={portfolio}
          addPortfolio={addPortfolio}
          changeAddPortfolio={changePortfolio}
          // delPortfolio={delPortfolio}
          handleAddPortfolio={handleAddPortfolio}
          // fileInput={fileInput}
          // imagePort={imagePort}
          // previewUrl={previewUrl}
          // handleFile={handleFile}
          // handleOndragOver={handleOndragOver}
          // handleOndrop={handleOndrop}
          dataPerson={dataPerson}
          handlePerson={changePerson}
          toCancel={cancel}
          handleSubmitWorker={handleSubmitWorker}
          changeHandlerImage={changeHandlerImage}
          handleClickImg={handleClickImg}
          refr={hiddenFileInput}
          changeHandlerImagePort={changeHandlerImagePort}
        />
        }
        
      </div>
      <div className="h-25 footerHome">
        <FooterHome />
      </div>
    </div>
  );
};
export default EditProfile;
