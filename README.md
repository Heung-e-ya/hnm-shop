react router useNavigate, useParams

bootstrap - Container, Row , Col , Form, Button

PrivateRoute 로그인 상태 확인 유무로 알맞는 페이지 뿌려주기

//* 자체 db활용

react server db.json  ( src 에 만들것) /  서버 키는 법-> npx json-server --watch db.json --port 5000  


//* 검색기능 Search  - key 활용하기  useSearchParams
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
//*
const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let serachQuery = query.get("q") || "";
    console.log("쿼리값은?", serachQuery);

//*   

//* 
<input type="text" onKeyPress={(e) => search(e)} placeholder="제품검색" />


//* 배포
netlify 로 서버 배포
