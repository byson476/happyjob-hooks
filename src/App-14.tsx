//4.리액트 라우터(React Router)
//1)라우트 정의
//2)링크생성
//3)동적 라우팅
//4)중첩 라우팅
//5)라우트 보호

// 라우터 사용 예제
import { Routes, Route, NavLink, useParams, useNavigate, Navigate,Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

// 데이터
const contracts = [
  { id: 1, name: "강감찬", details: "contractA", phone: "111-2222" },
  { id: 2, name: "소지섭", details: "contractB", phone: "222-3333" },
  { id: 3, name: "량현", details: "contractC", phone: "333-4444" }
];

function Home() {
  return <h1>홈페이지</h1>;
}

function About() {
  return <h1>소개페이지</h1>;
}

function Contact() {
  return (
    <div>
      <h1>연락처페이지</h1>
      {contracts.map((contract) => (
        <p key={contract.id}>
          {contract.name} {contract.details} {contract.phone}
        </p>
      ))}
    </div>
  );
}

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "orange" : "green",
  textDecoration: "none",
  margin: "10px",
});

function UserList() {
  return (
    <div>
      <h1>사용자 목록페이지</h1>
          {contracts.map((contract) => (
          <p key={contract.id}>
            <NavLink to={`/user/${contract.id}`}>{contract.name}</NavLink>
          </p>
        ))}
      <hr/>
      <Outlet />
    </div>
  );
}


function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = contracts.find((contract) => contract.id === Number(id));

  if (!user) return <h1>사용자를 찾을 수 없습니다.</h1>;

  return (
    <div style={style1}>
      <h2>{user.name}</h2>
      <h2>{user.details}</h2>
      <h2>{user.phone}</h2>
      { /*}
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로</button>
      { */}
    </div>
  );
}

const style1 = {    
    color : "aliceblue" ,
  textDecoration: "none",
  margin: "10px",
}

function App() {
    const navigate = useNavigate();
 useEffect(() => {
  navigate("/");
}, []);

  return (
    <div>
      <nav>
        <NavLink to="/" style={linkStyle}>홈</NavLink> | 
        <NavLink to="/about" style={linkStyle}>소개</NavLink> | 
        <NavLink to="/contact" style={linkStyle}>연락처</NavLink> | 
        <NavLink to="/user" style={linkStyle}>사용자</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<UserList />} >
            <Route path="/user/:id" element={<User />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;