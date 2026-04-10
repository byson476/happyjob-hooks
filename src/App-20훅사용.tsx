//useRef
//1.Dom접근
//2.(랜더링 없이) 값 저장
//3.이전값 기억. 혅재값은 유지
//
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(10);
  const [color, setColor] = useState("gray");
  const [statusCondition, setStatusCondition] = useState("gray");
  const [statusCondition1, setStatusCondition1] = useState("");
  const countRef = useRef<number>(0);
  const counttenmRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    counttenmRef.current?.focus();
    console.log("현재 키운트 : ", count);
    console.log("이전 카운트 : ", countRef.current);

    countRef.current = count;
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 10);
    setColor("red");
    setStatusCondition("red");
    setStatusCondition1("증가입니다");
  };

  const decrease = () => {
    if(count-10<0) return;
    setCount((prev) => prev - 10);
    setColor("blue");
    setStatusCondition("blue");
    setStatusCondition1("감소입니다");
  };

  const reset = () => {
    setCount(10);
    countRef.current = 0;
    setColor("gray");
    setStatusCondition("gray");
    setStatusCondition1("");
  };

  return (
    <div>
      <p>
        현재값 : {count}
      </p>
      <p>이전값  : {countRef.current} </p>
      <p style={{ color: statusCondition }}> 입력값 차이 : {(count ?? 0) - (countRef.current ?? 0)} / {statusCondition1}</p>
      <br />
      <br />
      <input
        min={0}
        type="number"
        ref={counttenmRef}
        onChange={(e) => {
          const value = Number(e.target.value);

          setCount(value);

          // 상태 계산
          if (value > countRef.current) {
            setStatusCondition("red");
            setStatusCondition1("증가");
          } else if (value < countRef.current) {
            setStatusCondition("blue");
            setStatusCondition1("감소");
          } else {
            setStatusCondition("gray");
            setStatusCondition1("변화없음");
          }
        }}
        style={{ color: color }}
        value={count}
      ></input>
      <br />
      <br />
      <button onClick={decrease}> 카운트 감소</button>
      <button onClick={increment}> 카운트 증가</button>
      <button onClick={reset}> 초기화</button>
      <br />
    </div>
  );
}