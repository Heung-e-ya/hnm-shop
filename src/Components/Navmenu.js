import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

import { Container, Button, Form, Nav, Navbar, Offcanvas, Row, Col, NavLink } from "react-bootstrap";

const Navmenu = ({ authenticate, setAuthenticate }) => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];
  const navigate = useNavigate();

  const search = (e) => {
    if (e.key === "Enter") {
      console.log("we click this key", e.key);
      // 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);

      console.log("keyword", keyword);
    }
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  const LogOut = () => {
    setAuthenticate(false);
    navigate("/");
  };
  return (
    <div>
      <div className="login-button">
        <div>
          <FontAwesomeIcon icon={faUser} />
          <div onClick={authenticate == true ? LogOut : goToLogin}>{authenticate == true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>

      <div className="nav-section" onClick={goToHome}>
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="menu-area">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar id="basic-navbar-nav">
          <Nav className="menu-list">
            {menuList.map((menu) => (
              <Nav.Link>{menu}</Nav.Link>
            ))}
          </Nav>
        </Navbar> */}

        {/* <Navbar className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="menu-list">
                  {menuList.map((menu) => (
                    <Nav.Link>{menu}</Nav.Link>
                  ))}
                </Nav>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> */}

        {["md"].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Row>
                <Navbar.Toggle fixed="top" aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>H&M</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="menu-list justify-content-end flex-grow-1 pe-3">
                      {menuList.map((menu) => (
                        <Nav.Link>{menu}</Nav.Link>
                      ))}
                    </Nav>

                    <div className="d-flex">
                      <input type="text" onKeyPress={(e) => search(e)} placeholder="제품검색" />
                    </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Row>
            </Container>
          </Navbar>
        ))}
        {/* <div className="nav-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(e) => search(e)} placeholder="제품검색" />
        </div> */}
      </div>
    </div>
  );
};

export default Navmenu;
