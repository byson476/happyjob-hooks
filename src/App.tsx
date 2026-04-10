//useLayoutEffect
//useEffect와 유사하지만, 컴포넌트가 렌더링된 후ㅠ에- 동기적으로 실행된
//DOM 업데이트가 완성되기 전에 실행되므로, 레이아웃 속성이나 DOM조작과 같은 작업에 적합
//렌더링이 완료된 후에 실행되므도. 사용자에게 깜박임 없이 UI를 업데이트 할 수 있음
//렌더링 -> DOM그리기 :: 렌더링 후에 useLayoutEffect가 실행되고 그 후에 브라우저가 DOM그림
//


/*
  const useReducer


*/
import { useRef, useState, useLayoutEffect } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.log("useLayoutEffect가 실행되었습니다");

    if (boxRef.current) {
      // DOM 조작 예시
      boxRef.current.style.backgroundColor = "lightblue";
      boxRef.current.style.width = `${count * 50}px`;
    }
  }, [count]);

  return (
    <div>
      <h1>useLayoutEffect 예제</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>

      <div
        ref={boxRef}
        style={{
          height: "100px",
          backgroundColor: "gray",
          transition: "0.3s",
        }}
      >
        박스
      </div>
    </div>
  );
}