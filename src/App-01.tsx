// 리액트 컴포넌트 생성 및 중첩하기
//import React from "react";
import "./App.css";
import { useState } from "react";

// 중첩된 컴포넌트 생성
function App() {
  return (
    <div>
      <Hello name="길동" />
      <Hello name="철수" />
      <p>Welcome to my React app.</p>
    </div>
  );
}

// 컴포넌트 생성
function Hello(props: { name: string }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="h1Class">Hello, {props.name}! </h1>
      <h2>카운트 {count} </h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
