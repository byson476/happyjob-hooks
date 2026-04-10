// 조건부 랜더링 예제
import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // if문은 JSX에서 직접 사용할 수 없기 때문에, 즉시 실행 함수(IIFE)를 사용하여 조건부 렌더링을 구현할 수 있습니다.
  let content;
  if (isLoggedIn) {
    content = (
      <div>
        <h1>Welcome back!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div>
        <h1>Please log in.</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      {/* 1. 조건부 랜더링 삼항연산자 */}
      <h2 style={{ color: "blue" }}>조건부 랜더링 삼항연산자</h2>
      {isLoggedIn ? (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in.</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {/* 2. 조건부 랜더링 && 연산자 */}
      <h2 style={{ color: "blue" }}>조건부 랜더링 && 연산자</h2>
      {isLoggedIn && (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!isLoggedIn && (
        <div>
          <h1>Please log in.</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {/* 3. 조건부 랜더링 if문 
          - JSX는 표현식(Expression)만 가능 */}
      <h2 style={{ color: "blue" }}>
        조건부 랜더링 if문 - JSX는 표현식(Expression)만 가능
      </h2>
      {(() => {
        if (isLoggedIn) {
          return (
            <div>
              <h1>Welcome back!</h1>
              <button onClick={handleLogout}>Logout</button>
            </div>
          );
        } else {
          return (
            <div>
              <h1>Please log in.</h1>
              <button onClick={handleLogin}>Login</button>
            </div>
          );
        }
      })()}

      {/* 4. 조건부 랜더링 변수 활용 */}
      <h2 style={{ color: "blue" }}>조건부 랜더링 변수 활용</h2>
      {content}
    </div>
  );
}

export default App;
