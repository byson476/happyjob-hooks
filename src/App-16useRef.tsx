//useRef
//1.Dom접근
//2.(랜더링 없이) 값 저장
//3.이전값 기억. 혅재값은 유지
//
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);

  useEffect(() => {
    countRef.current = count;
    console.log("렌더링 왼료");
    console.log("현재 키운트 : ", count);
    console.log("이전 카운트 : ", countRef.current);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };
  
  const refIncrement = () => {
    countRef.current += 1;
    console.log("Ref에 저장된 키운트 : ", countRef.current);
  };

  return (
    <div>
      <h2>카운트 : {count}</h2>

      <p>현재 카운트 : {count}</p>
      <p>저장된 카운트 : {countRef.current}</p>

      <button onClick={increment}> 카운트 증가</button><br/>
      <button onClick={refIncrement}> Ref 카운트 증가</button>
    </div>
  );
}
