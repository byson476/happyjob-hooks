//useEffect 주요 사용영역
//API호출, DOM조작 타이머 설정, 이벤트 리스너 등록, 해제 등
import { useEffect, useState } from "react";

function App() {
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSecond(prev => prev + 1);
      }, 1000);

      setMessage("타이머가 시작되었습니다");
    } else {
      setMessage("타이머가 정지되었습니다");
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      setMessage("타이머가 멈췄습니다");
      }
    };
  }, [isRunning]);

  const toggleRunning = () => {
    setIsRunning(prev => !prev);
  };

  const handleReset = () => {
    setSecond(0);
    setIsRunning(false);
    setMessage("타이머가 초기화되었습니다.");
  };
  return (
    <div>
      <p>초 : {second}</p>
      <button onClick={toggleRunning}>
        {isRunning ? "정지" : "시작"}
      </button>
      <p>상태메시지 : {message}</p>
    </div>
  );
}

export default App;