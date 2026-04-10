//useCallback
//함수 컴포넌트에서 함수를 메모이제이션히여 성능을 최적화 함
//-함수를 메모이제이션하여 컴포넌트가 리렌더랑 때마다 동일한 함수 인스턴스를 반환
//-의존성 배열을 통해 특정 값이 변경될 때만 함수를 다시 생성하도록 제어 가능
/*
  const memoizedCallBack


*/
import {  useCallback, useState } from "react";

export default function App() {
  const[count, setCount] = useState<mumber>(0);
  const[text, setText] = useState("");

  const memoizedCallBack = useCallback(() => {
    console.log("expensive 계산 실행!");   

    return count *2;
  }, [count]);

  return(
    <div>
      <h1>Memo 예제</h1>
      <p>COUNT : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br/>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <p>Expensive Result : {memoizedCallBack()}</p>
    </div>

  );
}