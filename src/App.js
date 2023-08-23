import { Routes, Route } from "react-router-dom";
import ProductAll from "./Components/ProductAll";
import ProductDetail from "./Components/ProductDetail";
import Login from "./Components/Login";
import Navmenu from "./Components/Navmenu";
import PrivateRoute from "./route/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";

//1. 전체상품페이지 , 로그인 , 상품상세페이지 v
//1-1 네비게이션 바 만들기 v
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다 (api fake-server만들어 연동)
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그인이 안돼있을경우에는 로그인페이지가 먼저 나온다
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다
//6. 로그아우웃되면 상품 디테일페이즐 볼 수 없다, 다시 로긘페이지가 보인다
//7. 로그인을 하면 로그아웃이 보이고 , 로그아웃을 하면 다시 로긘장면이 보인다
//8. 상품을 검색 ok

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    console.log("AAaaa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navmenu search={search} authenticate={authenticate} setAuthenticate={setAuthenticate} />

      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />}></Route>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
