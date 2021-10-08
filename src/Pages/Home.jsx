/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./css/Home.css";
import NavbarHome from '../components/Navbar'
import FooterHome from '../components/Footer'
import Pagination from "../components/Pagination";
import { HiOutlineSearch } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5"
import { Button, Form, Input } from "reactstrap";

const Home = () => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPAge] = useState(2)
  const [query, setQuery] = useState({
    search: "",
    sortby: "",

  })
  const users = [
    {
      id: 1,
      name: "Louis Tomlinson",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
    {
      id: 2,
      name: "Liam Payne",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
    {
      id: 3,
      name: "Niall Horan",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
    {
      id: 4,
      name: "Harry Styles",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
    {
      id: 4,
      name: "Harry Styles",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
    {
      id: 4,
      name: "Harry Styles",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
    {
      id: 4,
      name: "Harry Styles",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
    {
      id: 4,
      name: "Harry Styles",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
    {
      id: 4,
      name: "Harry Styles",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
    {
      id: 4,
      name: "Harry Styles",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      city: "Lorem ipsum",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML",
        },
      ],
    },
  ];

  const changeHandler = (e) => {
    const {name, value} = e.target
    setQuery({
      ...query,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(query)
  }

  const history = useHistory()
  const toProfile = () => {
    history.push('/profile')
  }

  return (
    <div>
      <div className="navbarHome border-bottom">
        <NavbarHome />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center  topHome">
            <div className="ms-lg-5 titleHome">
              <h2>Top Jobs</h2>
            </div>
          </div>
          <div className="col-lg-12 d-flex justify-content-center mt-4">
            <Form onSubmit={handleSubmit} className="row p-lg-3 align-items-center contentSearch ">
              <div className="col-lg-6 colInput">
                <Input
                  type="text"
                  placeholder="Search for any skill"
                  className="inputSearch"
                  name="search"
                  value={query.search}
                  onChange={(e) => changeHandler(e)}
                />
              </div>

              <div className="col-lg-1 colIcon">
                <HiOutlineSearch size={28} className="iconSearch " />
              </div>

              <div className="col-lg-2 mx-lg-3 colSelect">
                <Input value={query.sortby} 
                name="sortby" 
                type="select"
                onChange={(e) => changeHandler(e)}
                className="inputSelect">
                  <option value="">Sort by</option>
                  <option value="name">Name</option>
                  <option value="skill">Skill</option>
                  <option value="location">location</option>
                </Input>
              </div>

              <div className="col-lg-2 colBtn">
                <Button type="submit" className="btn btnSearch">Search</Button>
              </div>
            </Form>
          </div>
        
          <div className="col-lg-12 mt-lg-5 d-flex flex-column align-items-center">
              {users.map((e, i) => (
                <div key={i} className="row p-lg-4 pt-lg-0 pt-3 my-4 mx-5 cardUsers">
                  <div className="col-lg-2 col-5 me-lg-0 me-5 colPict">
                      <img src={e.pict} alt="user" className="pictUser" />
                  </div>
                  <div className="col-lg-6 col-6 ms-lg-0 ms-5">
                      <div className="row">
                        <div className="col-lg-12 contentInfo">
                          <h4 className="username">{e.name}</h4>
                          <small className="spSkill">{e.special_skill}</small>
                          <div className="my-2 spSkill">
                            <IoLocationOutline size={22} className="me-2" />
                            <small>{e.city}</small>
                          </div>

                          <div className="d-flex contentSkills">
                          {
                            e.skills.map((e, i) => (
                              <div key={i} className="me-2 d-flex justify-content-center align-items-center cardSkills">
                                  <span className="nameSkill">{e.name}</span>
                              </div>
                            ))
                          }
                          </div>
                          
                        </div>

                        <div className="col-lg-12 my-3">
                          
                        </div>
                      </div>
                  </div>

                  <div className="col-lg-3 d-lg-block">
                      <button onClick={toProfile} className="btn btnView">View Profile</button>
                  </div>
                </div>
              ))}
          
          </div>

          <div className="col-lg-12 mt-5">
            <div className="d-flex justify-content-center">
                <Pagination postsPerPage={postsPerPage} totalPosts={users.length} />
            </div>
          </div>
        </div>
      </div>

      <div className="h-25 footerHome">
        <FooterHome />
      </div>
    </div>
  );
};

export default Home;
