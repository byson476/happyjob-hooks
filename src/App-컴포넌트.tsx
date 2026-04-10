//리액트 컴포넌트
//1) export, import
//2)마크업 추가하기 : html->jsx
//  - return((......))
//3)중첩해서 사용하기 : 컴포넌트 생성 -> 메인컴포넌트 여러번 사용할 수 있음

import React from "react";

/*
//함수형 컴포넌트
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

function App() {
  return (
    <>     
    <h1>Amazing scientists</h1>
    <section>
      <Profile />
      <Profile />
      <Profile />
    </section>
  </>

  );
}
export default App;
*/
//2.클래스형 컴포넌트
/*
class Profile extends React.Component {
  render() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
}
export default class App extends React.Component {
  render() {   
    return (
      <>     
      <h1>Amazing scientists</h1>
      <section>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>

    );
  }
}
*/
//3.export, import : 컴포넌트 분리하기 -> 재사용성 향상
// - 컴포넌트 파일을 분리하여 관리하기 : 컴포넌트가 많아질수록 파일도 많아진다.
