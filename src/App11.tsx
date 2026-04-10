//useMemo
// 컴포넌트기 리랜더링 할때마다 특정 계산을 다시 하지 않도록 메모이제이션(캐싱)된 값을 변환하는 훅
//훅? --> 함수, API, 메서드
//useMemo의 특징
//--계산 결과를 메모이제이샨 히야 성능 최적화에 도움을 줌
//--의존성 배열을 통해 특정 값이 변경될 때만 계산을 다시 하도록 제어할 수 있음

import { use, useMemo, useState } from "react";
import type { DiscoverBehavior } from "react-router-dom";

export default function App() {
  const [count, setCount] = useState(0);
  const[text, setText] = useState("");

  const expensiveResult = () =>{
    console.log("expensiveResult function 이 실행되었습니다");
    let result = 0;
    for(let i=0l i<1000000000000;i++)
      result+=i;

    return result + count;
  }
import { useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveResult = useMemo(() => {
    console.log("expensive 계산 실행!");

    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }

    return result + count;
  }, [count]); // count 바뀔 때만 재계산

  return (
    <div>
      <h1>Memo 예제</h1>

      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Expensive Result : {expensiveResult}</p>
    </div>
  );

}