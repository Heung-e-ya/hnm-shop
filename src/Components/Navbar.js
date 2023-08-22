import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
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
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="nav-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(e) => search(e)} placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
