/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./css/Home.css";
import NavbarHome from "../components/Navbar";
import FooterHome from "../components/Footer";
import Pagination from "../components/Pagination";
import { HiOutlineSearch } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { Button, Form, Input } from "reactstrap";
import { ACTION_GET_USERS, ACTION_GET_USERS_QUERY } from "../redux/action/users";
import { API_URL } from "../helpers/env";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [postsPerPage, setPostPerPage] = useState(2);
  const [query, setQuery] = useState({
    search: "",
    sortby: "",
    page: "",
  });

  const dataStore = useSelector((state) => state.user);
  
  const useQuery = new URLSearchParams(useLocation().search)

  useEffect(() => {
    
    const sentQuery = {
      search : useQuery.get("search"),
      sortby: useQuery.get("sortby")
    }
    if (sentQuery.search === null) {
      dispatch(ACTION_GET_USERS_QUERY(query));  
    } else {
      dispatch(ACTION_GET_USERS_QUERY(sentQuery));
    }
    
  }, []);

  // useEffect(() => {
  //   setPostPerPage(dataStore.all.limit);
  // }, [dataStore.all.limit]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/home?search=${query.search}&sortby=${query.sortby}`)
    dispatch(ACTION_GET_USERS_QUERY(query));
    // setQuery({
    //   search: "",
    //   sortby: "",
    // });
  };

  const toProfile = (id) => {
    history.push(`/profile/${id}`);
  };

  return (
    <div>
      <div className="navbarHome border-bottom">
        <NavbarHome />
      </div>

      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center">
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center  topHome">
            <div className="ms-lg-5 titleHome">
              <h2>Top Jobs</h2>
            </div>
          </div>
          <div className="col-lg-12 d-flex justify-content-center mt-4">
            <Form
              onSubmit={handleSubmit}
              className="row p-lg-3 align-items-center contentSearch "
            >
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
                <Input
                  value={query.sortby}
                  name="sortby"
                  type="select"
                  onChange={(e) => changeHandler(e)}
                  className="inputSelect"
                >
                  <option value="">Sort by</option>
                  <option value="name">Name</option>
                  <option value="city">location</option>
                </Input>
              </div>

              <div className="col-lg-2 colBtn">
                <Button type="submit" className="btn btnSearch">
                  Search
                </Button>
              </div>
            </Form>
          </div>

          <div className="col-lg-12 mt-lg-5 d-flex flex-column align-items-center">
            {
            dataStore.loadAll !== false  ? (
              <h1>Loading...</h1>
            ) : (
              // <h1>harusnya muncul</h1>
              dataStore.all.map((e, i) => (
                <div
                  key={i}
                  className="row p-lg-4 pt-lg-0 pt-3 my-4 mx-5 cardUsers"
                >
                  <div className="col-lg-2 col-5 me-lg-0 me-5 colPict">
                    <img
                      src={`${API_URL}/image/uploads/${e.image}`}
                      alt="user"
                      className="pictUser"
                    />
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
                          {e.skills.map((e, i) => (
                            <div
                              key={i}
                              className="me-2 d-flex justify-content-center align-items-center cardSkills"
                            >
                              <span className="nameSkill">{e.name_skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-lg-12 my-3"></div>
                    </div>
                  </div>

                  <div className="col-lg-3 d-lg-block">
                    <button
                      onClick={() => toProfile(e.id)}
                      className="btn btnView"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))
            ) 
            
          }
          </div>

          <div className="col-lg-12 mt-5">
            <div className="d-flex justify-content-center">
              {/* <Pagination
                postsPerPage={postsPerPage}
                totalPosts={
                  dataStore.all.length
                }
              /> */}
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
