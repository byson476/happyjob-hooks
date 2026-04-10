// 1. useMemo란
// 컴포넌트가 리렌더링 될 때마다 특정 계산을 다시 하지 않도록 메모이제이션(캐싱)된 값을 반환하는 Hook입니다.
// 훅을 함수, API, 메서드 라고 부르기도 합니다. React에서 제공하는 기능을 사용할 때는 훅을 사용합니다.
// 2. useMemo 특징
// 계산결과를 메모이제이션하여 성능 최적화에 도움을 줍니다.
// 의존성 배열을 통해 특정 값이 변경될 때만 계산을 다시 수행하도록 제어할 수 있습니다.

// 3. useMemo 사용 예제
import { useMemo, useState } from "react";

 export default function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

   // count가 변경될 때만 expensiveFunction이 다시 계산됩니다.
   const expensiveResult = useMemo(() => {
     //const expensiveResult = () => {
     console.log("expensiveFunction이 실행되었습니다." + text);
     let result = 0;
     for (let i = 0; i < 1000000; i++) {
       result += i;
    }
    console.log("냥냥냥"+result + count);
     return result + count;
   }, [count]);

   return (
     <div style={{ padding: "30px" }}>
       <h1>useMemo 예제</h1>
       <p>Count: {count}</p>
       <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
       <input
         type="text"
       value={text}
        onChange={(e) => setText(e.target.value)}
         placeholder="Type something..."
      />
      <p>Expensive Result: {expensiveResult}</p>
    </div>
   );
 }

// React.memo 컴포넌트를 메모이제이션하여 불필요한 리렌더링을 방지하는 고차 컴포넌트입니다.
// React.memo는 컴포넌트의 props가 변경되지 않는 한 해당 컴포넌트를 리렌더링하지 않습니다.
// React.memo 사용 예제
/*
import React, { useState } from "react";

const ExpensiveComponent = React.memo(({ count }: { count: number }) => {
  console.log("ExpensiveComponent가 리렌더링되었습니다.");
  return <div>Expensive Component Count: {count}</div>;
});

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  return (
    <div style={{ padding: "30px" }}>
      <h1>React.memo 예제</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <ExpensiveComponent count={count} />
    </div>
  );
}
*/