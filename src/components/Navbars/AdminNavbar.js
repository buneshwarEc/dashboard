/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Card } from "react-bootstrap";

import routes from "routes.js";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "../../store/Authentication";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { getUserDetailsAction } from "store/User";
import { API } from "utils/https";

const Header = () => {
  const [show, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const data = useSelector((state) => state?.User?.UserDetails?.employee) ?? [];
  const token = useSelector((state) => state?.Auth?.token);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetailsAction(token));
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      setName(data[0].User_Full_Name);
      setProfilePic(data[0].User_Profile_image);
    }
  }, [data]);

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const onAccountClick = () => {
    setIsShow(!show);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  const logoutBtnHandler = () => {
    dispatch(LogoutAction());
    console.log("Logout");
  };

  const profilePicSrc = profilePic
    ? API + profilePic
    : require("../../assets/img/placeholder.jpg");

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          {/* <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          > */}
          <Navbar.Toggle className="mr-2" onClick={mobileSidebarToggle}>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </Navbar.Toggle>
          {/* </Button> */}
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>

        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        {/* <div> */}
        {/* <Nav className="nav mr-auto" navbar> */}
        {/* <Nav.Item> */}
        {/* <Nav.Link
                data-toggle="dropdown"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="m-0"
              >
                <i className="nc-icon nc-palette"></i>
                <span className="d-lg-none ml-1">Dashboard</span>
              </Nav.Link> */}
        {/* </Nav.Item> */}
        {/* <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <i className="nc-icon nc-planet"></i>
                <span className="notification">5</span>
                <span className="d-lg-none ml-1">Notification</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 1
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 2
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 3
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 4
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Another notification
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
        {/* </Nav> */}
        <section className="ml-auto d-flex">
          <div className="m-0 mx-2">
            {/* <Button
              variant="light text-dark border-0"
              onClick={(e) => {
                setTarget(e.target);
                setShow(!show);
                onAccountClick(e);
              }}
            >
              <span className="no-icon">Account</span>
            </Button>
          </div>
          <div className="m-0 mx-2">
            <Button
              variant="light text-dark border-0"
              onClick={logoutBtnHandler}
            >
              <span className="no-icon">Log out</span>
            </Button> */}

            <ButtonDropdown isOpen={show} toggle={onAccountClick}>
              <DropdownToggle
                variant="light text-dark "
                id="dropdown-basic"
                style={{
                  border: "none",
                }}
              >
                <img
                  src={profilePicSrc}
                  alt="..."
                  className="avatar "
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </DropdownToggle>
              <DropdownMenu>
                <Card
                  style={{
                    borderRadius: "10px",
                    border: "none",
                    marginRight: "5px",
                  }}
                >
                  <Card.Body>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        alt="..."
                        className="avatar "
                        src={profilePicSrc}
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="title mt-3">{name}</h5>

                      <Link to="/admin/user">
                        <DropdownItem>User Profile</DropdownItem>
                      </Link>
                      <Link to="/admin/change-password">
                        <DropdownItem>Change Password</DropdownItem>
                      </Link>
                      <div className="d-flex justify-content-center align-items-center">
                        <DropdownItem onClick={logoutBtnHandler}>
                          Logout
                        </DropdownItem>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </section>
        {/* </div> */}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Header;
