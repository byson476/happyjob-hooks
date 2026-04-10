// 9. 리액트 컴포넌트
// 1) export, import
// 2) 마크업추가하기 : HTML -> JSX
// - return( {... } )
// 3) 중첩해서 사용하기 : 컴포넌트 생성 -> 메인컴포넌트 여러번 사용할수 있다.

//import App from "./App org";

// 1. 함수형 컴포넌트 : 함수로 컴포넌트 만들기
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <section>
        <h2>사진정보 보여주기</h2>
        <img
          style={{ width: "90px", textAlign: "right" }}
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt="Katherine Johnson"
        />
      </section>
      <section>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </div>
  );
}

// 2. 클래스형 컴포넌트 : 클래스문법으로 컴포넌트 만들기
// import { Component } from "react";

// class Profile extends Component {
//   render() {
//     return (
//       <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <section>
//         <h1>사진정보-class</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//       </section>
//     );
//   }
// }

//3. export, import : 컴포넌트 분리하기 -> 재사용성 향상
// - 컴포넌트 파일을 분리해서 관리하기 : 컴포넌트가 많아질수록 파일도 많아진다.
