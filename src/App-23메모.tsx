
// React.memo 컴포넌트를 메모이제이션하여 불필요한 리렌더링을 방지하는 고차 컴포넌트입니다.
// React.memo는 컴포넌트의 props가 변경되지 않는 한 해당 컴포넌트를 리렌더링하지 않습니다.
// React.memo 사용 예제

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
